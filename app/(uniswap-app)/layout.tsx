import Navbar from "@/components/internal/navbar";
import PayTokenDialog from "@/components/internal/payTokenDialog";
import RecieveTokenDialog from "@/components/internal/recieveTokenDialog";

const UniswapLayout = ({
    children
}:{
    children:React.ReactNode;
}) =>{
    return(
        <div className="h-screen">
            <Navbar/>
            {children}
            <PayTokenDialog/>
            <RecieveTokenDialog/>
        </div>
    )
}

export default UniswapLayout;