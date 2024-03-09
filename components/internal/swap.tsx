import { ArrowDown, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setPayTokenDialog, setRecieveTokenDialog } from "@/lib/redux/dialogState";
import { exicute } from "@/context/context";

const SwapPage = () => {
  const dispatch = useDispatch();
  const swapState = useSelector((state:any)=>state.swapState)

  const handleOpenPaytoken = ()=>{
    dispatch(setPayTokenDialog(true));
  }

  const handleOpenRecieveToken = ()=>{
    dispatch(setRecieveTokenDialog(true));
  }

  return (
    <div className="flex flex-col gap-1 relative">
      <div className="w-full bg-muted rounded-2xl h-32 pt-4 pl-3 flex justify-between pr-3">
        <div className="flex flex-col">
          <label className="text-gray-500 text-sm" htmlFor="inputPrice">
            You pay
          </label>
          <input
            id="inputPrice"
            type="text"
            placeholder="0"
            className="placeholder:text-gray-400 placeholder:text-3xl focus:outline-none text-3xl placeholder:font-semibold font-semibold bg-muted w-full"
          />
        </div>
        <div className="flex flex-col gap-2 items-end">
          <Button onClick={handleOpenPaytoken} variant="outline" className="rounded-full">
            <div className="text-xl text-black font-semibold flex items-center gap-2 w-full h-full justify-center px-2">
              <img className="h-6 w-6" src={swapState?.selectedPayTokenData?.icon} alt="image" />
              <p>{swapState?.selectedPayTokenData?.symbol}</p>
              <img className="h-5 w-5" src="/images/angleDown.svg" alt="" />
            </div>
          </Button>
          <p className="text-gray-400 text-sm">Balance: 0</p>
        </div>
      </div>

      <div className="w-full bg-muted rounded-2xl h-32 pt-4 pl-3 flex justify-between pr-3">
        <div className="flex flex-col">
          <label className="text-gray-500 text-sm" htmlFor="inputPrice">
            You recieve
          </label>
          <input
            id="inputPrice"
            type="text"
            placeholder="0"
            className="placeholder:text-gray-400 placeholder:text-3xl focus:outline-none text-3xl placeholder:font-semibold font-semibold bg-muted w-full"
          />
        </div>
        <div className="flex flex-col gap-2 items-end justify-center">
        {swapState?.selectedRecieveTokenData && (
          <Button onClick={handleOpenRecieveToken} variant="outline" className="rounded-full">
            <div className="text-xl text-black font-semibold flex items-center gap-2 w-full h-full justify-center px-2">
              <img className="h-6 w-6" src={swapState?.selectedRecieveTokenData?.icon} alt="image" />
              <p>{swapState?.selectedRecieveTokenData?.symbol}</p>
              <img className="h-5 w-5" src="/images/angleDown.svg" alt="" />
            </div>
          </Button> )}
          {!swapState?.selectedRecieveTokenData && (
          <Button onClick={handleOpenRecieveToken} className="flex items-center bg-[#fc72ff] text-white rounded-full text-base">
            Select a token
            <ChevronDown/>
          </Button> )}
          {/* <p className="text-gray-400 text-sm">Balance: 0</p> */}
        </div>
      </div>
      <Button onClick={exicute} variant="secondary" className="rounded-xl">Enter an amount</Button>
      <div className="flex justify-center items-center h-9 w-9 bg-muted rounded-lg border-[4px] border-white absolute top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ArrowDown size={"20"} />
      </div>
    </div>
  );
};

export default SwapPage;
