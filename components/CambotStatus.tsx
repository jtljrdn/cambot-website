'use client'
import getStatus from "@/utils/getStatus";
import prettyMilliseconds from "pretty-ms";
import React from "react";

const CambotStatus = async () => {
    const botStatus = await getStatus();
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl">
        Bot Status:{" "}
        {botStatus.status === "running" ? (
          <span className=" text-success">Running</span>
        ) : (
          <span className=" text-error">Offline</span>
        )}{" "}
      </h2>
      <h2 className="text-xl">
        Bot Uptime:{" "}
        {botStatus.status === "running" ? (
          prettyMilliseconds(botStatus.upTime, { compact: true })
        ) : (
          <span className="text-error">Offline</span>
        )}{" "}
      </h2>
    </div>
  );
};

export default CambotStatus;
