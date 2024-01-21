import React from "react";

const UtilityCommands = () => {
  return (
    <div>
      <div className="text-center text-4xl font-semibold py-2">Utility</div>

      <div className="overflow-x-auto mx-10 pb-5">
        <table className="table bg-base-300">
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
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /server
                </span>
              </td>
              <td>Get information about the server you are currently in.</td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /user [user]
                </span>
              </td>
              <td>Get information about a user.</td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /avatar (user)
                </span>
              </td>
              <td>
                Get a users avatar. Defaults to command user if no user is
                specified.
              </td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /vote
                </span>
              </td>
              <td>Find ways to support CamBot!</td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /poll create [question] (options)
                </span>
              </td>
              <td>Create a reaction poll.</td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /bug report [description]
                </span>
              </td>
              <td>Report a bug to the developer. You can also contact @.bung on Discord.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UtilityCommands;
