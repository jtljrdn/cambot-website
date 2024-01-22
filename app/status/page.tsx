import React from "react";
import { Metadata } from "next";
import StatusCard from "@/components/Status/StatusCard";
import axios from "axios";

export const metadata: Metadata = {
  title: "Status",
};


const status = async () => {

  return (
    <div>
      <div className="text-6xl text-center font-bold my-[4rem]">Commands</div>
      <StatusCard />
    </div>
  );
};

export default status;
