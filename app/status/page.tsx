import React, { Suspense } from "react";
import { Metadata } from "next";
import Loading from "./loading";
import Stats from "@/utils/database/models/stats.model";
import { connectToDatabase } from "@/utils/database/connectToDb";
import getStatus from "@/utils/getStatus";
import prettyMilliseconds from "pretty-ms";
import Link from "next/link";
import CambotStatus from "@/components/CambotStatus";

export const metadata: Metadata = {
  title: "Status",
};

const status = async () => {
  await connectToDatabase();
  const { guildCount, userCount } = await Stats.findById(
    "65ade1c76f113987582b9c29"
  );

  // const guildCount = 0;
  // const userCount = 0;

  return (
    <div className=" min-h-dvh">
      <Suspense fallback={<Loading />}>
        <div className="text-6xl text-center font-bold my-[4rem]">Status</div>
        <div className="rounded-box bg-base-200 mb-10 flex flex-col justify-center">
          <div className="flex flex-col gap-4 max-w-[56rem] my-5 text-center px-10">
            <h1 className="font-bold text-3xl">CamBot Stats and Status</h1>
            <CambotStatus />
            <h2 className="text-xl">Total Guilds: {guildCount} </h2>
            <h2 className="text-xl">Total Users: {userCount} </h2>
          </div>
        </div>
      </Suspense>
      <div className="text-center py-5 bg-base-200 rounded-box justify-center">
        <p className="text-3xl font-bold mb-2">Have a problem?</p>
        <Link href="https://discord.gg/bDwKqSreue">
          <p className="btn btn-primary text-2xl font-bold">Let Us Know.</p>
        </Link>
      </div>
    </div>
  );
};

export default status;
