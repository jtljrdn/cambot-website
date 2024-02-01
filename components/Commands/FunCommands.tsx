import React from "react";

const FunCommands = () => {
  return (
    <div>
      <div className="text-center text-4xl font-semibold py-2">Fun</div>

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
                  /8ball [question]
                </span>
              </td>
              <td>Ask the magic 8ball a question.</td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /game-search [game]
                </span>
              </td>
              <td>Search for information on a videogame.</td>
            </tr>

            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /random [max]
                </span>
              </td>
              <td>Get a random number between 1 and max.</td>
            </tr>

            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /rps [choice]
                </span>
              </td>
              <td>
                Play Rock Paper Scissors with CamBot. Choices are rock, paper,
                or scissors.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FunCommands;
