"use client";
import axios from "axios";
import { useEffect, useState } from "react";


const StatusCard =  () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const { data: statusData } = await axios.get(
            "https://control.bot-hosting.net/api/client/servers/c76c94f1/resources",
            {
              headers: {
                Authorization: `Bearer ${process.env.PTERO_TOKEN}`,
              },
            }
          );
          console.log(statusData);
        } catch (error: any) {}
        setLoading(false);
      };
  
      fetchData();
    }, []);

  return (
    <div>
      <div className="rounded-box bg-base-200 mb-10 flex justify-center">
        {loading && (
          <div className="flex flex-col gap-4 w-52 my-5">
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        )} {!loading && (
          <div className="flex flex-col gap-4 w-52 my-5">
            <div>
                <h1 className="font-bold text-2xl ">CamBot Status</h1>
                <h2 className="text-sm">
                    {}
                </h2>
                </div>
             </div>
        )}
      </div>
    </div>
  );
};

export default StatusCard;
