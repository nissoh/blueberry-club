import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { expect } from "chai"
import { BigNumber } from "ethers"
import { ethers } from "hardhat"
import {
  GBC,
  GBC__factory,
  GBCLab__factory,
  GBCLab,
  Police,
  Police__factory,
  HolderSaleEasy__factory,
  HolderSaleEasy,
  HolderFactoryEasy__factory,
  HolderFactoryEasy,
} from "../../typechain-types"
import { ZERO_ADDRESS } from "../../utils/getAddress"
import { now } from "../utils"

export enum ROLES {
  MINTER,
  BURNER,
  DESIGNER,
}

const MINTED_TOKEN = 100

const granter = (police: Police) => async (address: string) => {
  await police.setUserRole(address, ROLES.MINTER, true)
}

describe("HolderEasySale.sol", function () {
  let owner: SignerWithAddress
  let bob: SignerWithAddress
  let alice: SignerWithAddress

  let gbc: GBC
  let lab: GBCLab
  let police: Police
  let implementation: HolderSaleEasy
  let factory: HolderFactoryEasy
  let sale: HolderSaleEasy

  let grant: (address: string) => Promise<void>

  this.beforeAll(async () => {
    const [owner_, user1_, user2_] = await ethers.getSigners()
    owner = owner_
    bob = user1_
    alice = user2_
    const gbcFactory = new GBC__factory(owner)

    gbc = await gbcFactory.deploy("Blueberry Club", "GBC", "")
    await gbc.deployed()

    await gbc.startPublicSale()

    await gbc.connect(bob).mint(20, {
      value: ethers.utils.parseEther("0.6"),
    })

    await gbc.connect(alice).mint(20, {
      value: ethers.utils.parseEther("0.6"),
    })

    await gbc.connect(owner).mint(20, {
      value: ethers.utils.parseEther("0.6"),
    })

    const policeFactory = new Police__factory(owner)
    police = await policeFactory.deploy(owner.address)
    await police.deployed()

    const itemsFactory = new GBCLab__factory(owner)
    lab = await itemsFactory.deploy(owner.address, police.address)
    await lab.deployed()

    const implementationFactory = new HolderSaleEasy__factory(owner)
    implementation = await implementationFactory.deploy()
    await implementation.deployed()

    const holderFactory = new HolderFactoryEasy__factory(owner)
    factory = await holderFactory.deploy(implementation.address, owner.address)
    await factory.deployed()

    const setRoleTx = await police.setRoleCapability(
      ROLES.MINTER,
      lab.address,
      lab.interface.getSighash(
        lab.interface.functions["mint(address,uint256,uint256,bytes)"]
      ),
      true
    )
    setRoleTx.wait()

    grant = granter(police)
  })

  it("Should be possible to deploy sale from factory", async () => {
    const tx = await factory.deploy(
      lab.address,
      100,
      owner.address,
      10,
      ZERO_ADDRESS,
      0,
      gbc.address,
      0,
      10000,
      ethers.utils.parseEther("0.02"),
      MINTED_TOKEN,
      owner.address
    )
    const receipt = await tx.wait()
    let sale_ = ""
    receipt.logs.forEach((log) => {
      if (
        log.topics[0] ==
        "0x1365c884440d696b1f7aace8423543f2a5bc6939db2ba2ecc419c95c84cd9a2e"
      ) {
        const result = factory.interface.decodeEventLog(
          factory.interface.events["CreateSale(address)"],
          log.data,
          log.topics
        )
        sale_ = result.sale
      }
    })

    // @ts-ignore
    sale = await ethers.getContractAt("HolderSaleEasy", sale_)

    expect(await sale.lab()).to.be.equal(lab.address)
    expect(await sale.wallet()).to.be.equal(BigNumber.from(100))
    expect(await sale.receiver()).to.be.equal(owner.address)
    expect(await sale.transaction()).to.be.equal(BigNumber.from(10))
    expect(await sale.token()).to.be.equal(ZERO_ADDRESS)
    expect(await sale.finish()).to.be.equal(BigNumber.from(0))
    expect(await sale.checker()).to.be.equal(gbc.address)
    expect(await sale.start()).to.be.equal(BigNumber.from(0))
    expect(await sale.supply()).to.be.equal(BigNumber.from(10000))
    expect(await sale.cost()).to.be.equal(ethers.utils.parseEther("0.02"))
    expect(await sale.item()).to.be.equal(BigNumber.from(MINTED_TOKEN))

    await grant(sale.address)
  })

  it("Should be possible to mint tokens", async () => {
    let balance = await lab.balanceOf(alice.address, MINTED_TOKEN)
    expect(balance).to.be.equal(BigNumber.from(0))

    await sale
      .connect(alice)
      .mint([21, 22, 23, 24], { value: ethers.utils.parseEther("0.02").mul(4) })

    balance = await lab.balanceOf(alice.address, MINTED_TOKEN)
    expect(balance).to.be.equal(BigNumber.from(4))
  })
})