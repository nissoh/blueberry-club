import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const GBC = await deployments.get('GBC');
  const Police = await deployments.get('Police');

  const {deployer} = await getNamedAccounts();

  await deploy('Profile', {
    from: deployer,
    args: [GBC.address, deployer, Police.address],
    log: true,
    autoMine: true,
  });
};
export default func;
func.tags = ['Profile'];
func.dependencies = ['GBC', 'Police'];
