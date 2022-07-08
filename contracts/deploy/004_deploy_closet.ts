import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const GBC = await deployments.get('GBC');
  const Lab = await deployments.get('GBCLab');

  const {deployer} = await getNamedAccounts();

  await deploy('Closet', {
    from: deployer,
    args: [GBC.address, Lab.address],
    log: true,
    autoMine: true,
  });
};
export default func;
func.tags = ['Closet'];
func.dependencies = ['GBC', 'GBCLab'];
