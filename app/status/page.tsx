import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import StatusCard from "@/components/Status/StatusCard";

export const metadata: Metadata = {
  title: "Status",
};

const status = async () => {
  return (
    <div>
      <StatusCard />
      <div className="text-center py-5 bg-base-200 rounded-box justify-center mb-[8rem]">
        <p className="text-3xl font-bold mb-2">Have a problem?</p>
        <Link href="https://discord.gg/bDwKqSreue">
          <p className="btn btn-primary text-2xl font-bold">Let Us Know.</p>
        </Link>
      </div>
    </div>
  );
};

export default status;
