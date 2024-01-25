import React from "react";

const CountCommands = () => {
  return (
    <div>
      <div className="text-center text-4xl font-semibold py-2">
        Count
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
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /count help
                </span>
              </td>
              <td>
                Step-by-step instructions on creating, using, and displaying a
                count on your server
              </td>
            </tr>

            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /count create [name]
                </span>
              </td>
              <td>Create a count</td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /count list (user)
                </span>
              </td>
              <td>
                List counts of a user. Defaults to command user if no user is
                specified.
              </td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /count add [amount]
                </span>
              </td>
              <td>Adds amount to the current server count.</td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /count remove [amount]
                </span>
              </td>
              <td>Removes amount from the current server count.</td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /count set [ID]
                </span>
              </td>
              <td>
                <span className="font-bold">Administrator</span> Set the
                server's count
              </td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /count show
                </span>
              </td>
              <td>Shows the current count set to the server</td>
            </tr>

            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                /count display
                </span>
              </td>
              <td>
                <span className="font-bold">Manage Channels</span> Shows the
                current count in a voice channel. Updates every 5 minutes.
              </td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /count reset [ID]
                </span>
              </td>
              <td><span className="font-bold">Count Creator</span> Set a given count to 0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountCommands;
