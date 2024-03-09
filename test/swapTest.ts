import { expect } from "chai";
import { ethers } from "hardhat";

// const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
// const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";  // MAINNET
const WETH9 = "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14"; // Sepolia
// const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";  // MAINNET
const USDC = "0x6f14C02Fc1F78322cFd7d707aB90f18baD3B54f5" // Sepolia

describe("swapExamples", function () {
  it("swapExactInputSingle", async function () {
    const accounts = await ethers.getSigners();
    const weth = await ethers.getContractAt("IWETH",WETH9);
    const usdc = await ethers.getContractAt("IERC20",USDC);
    const SwapExamples = await ethers.getContractFactory("SwapExamples");
    const swapExamples = await SwapExamples.deploy();
    await swapExamples.waitForDeployment();

    const amountIn = BigInt("10000000000000000");
    (await weth.connect(accounts[0])?.deposit({value:amountIn})).wait();
    (await weth.connect(accounts[0]).approve(swapExamples.getAddress(),amountIn)).wait();

    (await swapExamples.swapExactInputSingle(amountIn,WETH9,USDC)).wait();
    
    console.log("USDC balance : ",await usdc.balanceOf(accounts[0].address));
    console.log(accounts[0].address);
  });
});
