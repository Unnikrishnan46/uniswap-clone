"use client"

import { Button } from "@/components/ui/button";
import { checkMetaMaskConnection, connectMetamask } from "@/context/metamask";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
    const router = useRouter();

    const handleLaunchAppClick = ()=>{
        router.push("/swap");
    }
    
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Button onClick={handleLaunchAppClick}>Launch App</Button>
    </div>
  );
}
