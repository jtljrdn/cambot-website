"use client";
import axios from "axios";
import prettyMilliseconds from "pretty-ms";
import { useEffect, useState } from "react";

const StatusCard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const fetchData = async () => {
    setLoading(true);
    const { data } = await axios.get("api/cambot-status");
    console.log(data);
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading)
    return (
      <div>
        <div className="text-6xl text-center font-bold my-[4rem]">Status</div>
        <div className="rounded-box bg-base-200 mb-10 flex justify-center">
          <div className="flex flex-col gap-4 max-w-[56rem] my-5 items-center px-10">
            <h1 className="font-bold text-3xl">CamBot Stats and Status</h1>
            <div className="skeleton w-48 h-[28px]"></div>
            <div className="skeleton w-48 h-[28px]"></div>
            <div className="skeleton w-48 h-[28px]"></div>
            <div className="skeleton w-48 h-[28px]"></div>
            <div className="skeleton w-[300px] h-[48px]"></div>
          </div>
        </div>
      </div>
    );
  return (
    <div>
      <div className="text-6xl text-center font-bold my-[4rem]">Status</div>
      <div className="rounded-box bg-base-200 mb-10 flex flex-col justify-center">
        <div className="flex flex-col gap-4 max-w-[56rem] my-5 text-center px-10">
          <h1 className="font-bold text-3xl">CamBot Stats and Status</h1>
          <h2 className="text-xl">
            Bot Status:{" "}
            {data.status === "running" ? (
              <span className=" text-success">Running</span>
            ) : (
              <span className=" text-error">Offline</span>
            )}{" "}
          </h2>
          <h2 className="text-xl">
            Bot Uptime:{" "}
            {data.status === "running" ? (
              prettyMilliseconds(data.upTime)
            ) : (
              <span className="text-error">Offline</span>
            )}{" "}
          </h2>
          <h2 className="text-xl">Total Guilds: {data.guildCount} </h2>
          <h2 className="text-xl">Total Users: {data.userCount} </h2>
          <button className="btn btn-accent text-2xl" onClick={fetchData}>
            Refresh
          </button>
        </div>
      </div>
      {!data ? (
        <div className="toast z-10">
          <div className="alert alert-error ">
            <span>If you're seeing this, something went wrong.</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default StatusCard;
