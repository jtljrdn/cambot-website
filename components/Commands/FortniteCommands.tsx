import React from "react";

const FortniteCommands = () => {
  return (
    <div>
      <div className="text-center text-4xl font-semibold py-2">
        Fortnite
      </div>

      <div className="overflow-x-auto mx-10 pb-5">
      <table className="table table-fixed bg-base-300">
          {/* head */}
          <thead>
            <tr>
              <th>
                <span className=" font-semibold text-lg">Command</span>{" "}
                [Required] (optional)
              </th>
              <th>
                <span className=" font-semibold text-lg">Description</span>{" "}
                Permissions Required
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="">
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /fn stats [user] [platform]
                </span>
              </td>
              <td className="">Get Fortnite stats for a player</td>
            </tr>

            <tr>
              <td className="">
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /fn itemshop
                </span>
              </td>
              <td className="">Shows the details of any Fortnite cosmetic</td>
            </tr>
            <tr>
              <td className="">
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /fn search [name] [platform]
                </span>
              </td>
              <td className="">
                Shows individual player stats including wins and kills.
              </td>
            </tr>
            <tr>
              <td className="">
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /fn map
                </span>
              </td>
              <td className="">Shows the current up-to-date Fortnite Map.</td>
            </tr>
            <tr>
              <td className="">
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /fn jamtrack [track]
                </span>
              </td>
              <td className="">
                Shows information on Fortnite Festival jamtracks.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FortniteCommands;
