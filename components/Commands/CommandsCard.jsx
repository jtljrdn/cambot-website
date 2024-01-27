"use client";
import axios from "axios";
import prettyMilliseconds from "pretty-ms";
import { useEffect, useState } from "react";
import CommandsList from "./CommandsList";

const CommandsCard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const fetchData = async () => {
    setLoading(true);
    const { data } = await axios.get("api/commands");
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
        <div className="text-6xl text-center font-bold my-[4rem]">Commands</div>
        <div className="rounded-box bg-base-200 mb-10 flex justify-center">
          <div className="flex flex-col gap-4 max-w-[56rem] my-5 items-center px-10">
            <h1 className="font-bold text-3xl">Cambot Commands</h1>
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
      <CommandsList commands={data} />
      <button className="btn btn-accent text-2xl" onClick={fetchData}>
        Refresh
      </button>

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

export default CommandsCard;
