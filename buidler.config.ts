import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config"

usePlugin('@nomiclabs/buidler-ethers')

const config: BuidlerConfig = {
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
      gas: 9500000,
      gasPrice: 20e9,
      timeout: 99999999
    }
  },
  mocha: {
    timeout: 99999999
  },
  solc: {
    version: '0.6.6',
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  paths: {
    artifacts: './artifacts'
  }
}

export default config