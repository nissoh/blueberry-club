import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const Police = await deployments.get('Police');

  const {deployer} = await getNamedAccounts();

  await deploy('GBCLab', {
    from: deployer,
    args: [deployer, Police.address],
    log: true,
    autoMine: true,
  });
};
export default func;
func.tags = ['GBCLab'];
func.dependencies = ['Police'];
