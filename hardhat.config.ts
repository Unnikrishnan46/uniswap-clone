import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { privateKey1, privateKey2 } from "./constants/constants";

// MUMBAI :   https://polygon-mumbai.infura.io/v3/42237fbfbd2a472c88e935a4bfac5aac
// SEPOLIA  :   https://sepolia.infura.io/v3/b40c4ca6a7c2468a9bf2b51fba999cf9

//0x1Fc18D6FFf4cC9d4601Ac3c75373517fc694898d

const config: HardhatUserConfig = {
  solidity: "0.7.6",
  // networks:{
  //   hardhat:{
  //     forking:{
  //       url:"https://mainnet.infura.io/v3/42237fbfbd2a472c88e935a4bfac5aac"
  //     }
  //   }
  // }
  defaultNetwork:"sepolia",
  networks:{
    hardhat:{
      chainId: 1337,
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/b40c4ca6a7c2468a9bf2b51fba999cf9",
      accounts: [privateKey1, privateKey2]
    },
    polygon:{
      url:"https://polygon-mumbai.infura.io/v3/42237fbfbd2a472c88e935a4bfac5aac",
      accounts: [privateKey1, privateKey2]
    }
  },
  etherscan:{
    apiKey:"JK1FKFIMXXH8JGDYGDQ8DWMSXRS63R6CWB"
  },
  sourcify: {
    enabled: true
  },
  gasReporter: {
    enabled:true 
  }
};

export default config;
