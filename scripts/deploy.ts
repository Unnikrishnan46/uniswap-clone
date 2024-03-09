import { ethers } from "hardhat";

async function main() {
  const SingleSwap = await ethers.deployContract("SwapExamples");
  await SingleSwap.waitForDeployment();

  console.log(
    `SingleSwap deployed to ${SingleSwap.target}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//0x31403b1e52051883f2Ce1B1b4C89f36034e1221D