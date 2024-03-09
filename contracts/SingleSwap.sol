// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.7.6;
pragma abicoder v2;

import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

contract SwapExamples {
    ISwapRouter public constant swapRouter = ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);
    uint24 public constant poolFee = 3000;

    function swapExactInputSingle(uint256 amountIn,address _tokenIn,address _tokenOut) external returns (uint256 amountOut) {
        TransferHelper.safeTransferFrom(_tokenIn, msg.sender, address(this), amountIn);
        TransferHelper.safeApprove(_tokenIn, address(swapRouter), amountIn);

        ISwapRouter.ExactInputSingleParams memory params =
            ISwapRouter.ExactInputSingleParams({
                tokenIn: _tokenIn,
                tokenOut: _tokenOut,
                fee: poolFee,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: amountIn,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });
        amountOut = swapRouter.exactInputSingle(params);
    }

    // function swapExactOutputSingle(uint256 amountOut, uint256 amountInMaximum) external returns (uint256 amountIn) {
    //     TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountInMaximum);
    //     TransferHelper.safeApprove(DAI, address(swapRouter), amountInMaximum);
    //     ISwapRouter.ExactOutputSingleParams memory params =
    //         ISwapRouter.ExactOutputSingleParams({
    //             tokenIn: DAI,
    //             tokenOut: WETH9,
    //             fee: poolFee,
    //             recipient: msg.sender,
    //             deadline: block.timestamp,
    //             amountOut: amountOut,
    //             amountInMaximum: amountInMaximum,
    //             sqrtPriceLimitX96: 0
    //         });
    //     amountIn = swapRouter.exactOutputSingle(params);
    //     if (amountIn < amountInMaximum) {
    //         TransferHelper.safeApprove(DAI, address(swapRouter), 0);
    //         TransferHelper.safeTransfer(DAI, msg.sender, amountInMaximum - amountIn);
    //     }
    // }
}