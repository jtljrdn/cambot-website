import React, { Suspense } from "react";
import { Metadata } from "next";
import axios from "axios";
import Loading from "./loading";
import Stats from "@/utils/database/models/stats.model";
import { connectToDatabase } from "@/utils/database/connectToDb";

export const metadata: Metadata = {
  title: "Status",
};

const status = async () => {
  await connectToDatabase();
  const { guildCount, userCount } = await Stats.findById(
    "65ade1c76f113987582b9c29"
  );
  return (
    <div className=" min-h-dvh">
      <Suspense fallback={<Loading />}>
        <div className="text-6xl text-center font-bold my-[4rem]">Status</div>
        <div className="rounded-box bg-base-200 mb-10 flex justify-center">
          <div className="flex flex-col gap-4 max-w-[56rem] my-5 text-center px-10">
            <h1 className="font-bold text-3xl">CamBot Stats and Status</h1>
            <h2 className="text-xl">Total Guilds: {guildCount} </h2>
            <h2 className="text-xl">Total Users: {userCount} </h2>
            <h2 className="text-xl">Bot Status: unknown </h2>
            <h2 className="text-xl">Bot Uptime: unknown </h2>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default status;
