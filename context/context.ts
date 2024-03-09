import { contractAbi } from "@/constants/constants";
import { ethers } from "ethers";

const WETH9 = "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14"; // Sepolia
const USDC = "0x6f14C02Fc1F78322cFd7d707aB90f18baD3B54f5"; // Sepolia

async function exicute() {
  try {
    // const provider = await new ethers.BrowserProvider((window as any).ethereum);
    const provider = await new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
    // await provider.send("eth_requestAccounts", []);
    const signers = await provider.getSigner();
    console.log(signers,"   :   ",await provider.getBalance(signers.address));
    
    const contractInstance = new ethers.Contract(
      // "0x2E7b67D251bBB2BB56FA3cEeF2070b6A5277efa0",
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      contractAbi,
      signers
    );
    const wethContract = new ethers.Contract(
      WETH9,
      [
        "function deposit() external payable",
        "function approve(address spender, uint256 amount) external returns (bool)",
      ],
      signers
    );
    const daiContract = new ethers.Contract(
      USDC,
      [
        "function approve(address spender, uint256 amount) external returns (bool)",
      ],
      signers
    );
    const amountIn = ethers.parseEther("1"); // Example: depositing 1 Ether

    // Deposit Ether into WETH
    const depositTx = await wethContract.deposit({ value: amountIn });
    await depositTx.wait();

    console.log("Ether deposited into WETH");

    const approveTx = await wethContract.approve(
      "0x2E7b67D251bBB2BB56FA3cEeF2070b6A5277efa0",
      amountIn
    );
    await approveTx.wait();

    console.log("Approved WETH contract to spend tokens");

    const swapTx = await contractInstance.swapExactInputSingle(
      amountIn,
      WETH9,
      USDC,
    );
    await swapTx.wait();
    console.log("success");
  } catch (error) {
    console.log(error);
  }
}

export { exicute };
