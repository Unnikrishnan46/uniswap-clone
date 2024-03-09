"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SwapPage from "./swap";
import { Settings } from "lucide-react";

const MainContent = () => {
  return (
    <div className="w-[30%]">
      <Tabs defaultValue="swap" className="">
        <div className="flex items-center justify-between">
          <TabsList className="flex gap-6">
            <TabsTrigger value="swap">Swap</TabsTrigger>
            <TabsTrigger value="limit">Limit</TabsTrigger>
            <TabsTrigger value="send">Send</TabsTrigger>
            <TabsTrigger value="buy">Buy</TabsTrigger>
          </TabsList>
          <Settings color="gray"/>
        </div>
        <TabsContent value="swap">
          <SwapPage />
        </TabsContent>
        <TabsContent value="limit">Change your password here.</TabsContent>
        <TabsContent value="send">Change your password here.</TabsContent>
        <TabsContent value="buy">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default MainContent;
