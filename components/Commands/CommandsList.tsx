import React from "react";

interface CommandsListProps {
  commands: any;
}

const CommandsList = ({ commands }: CommandsListProps) => {
  console.log(commands);
  return (
    <div className="overflow-x-auto mx-10 pb-5">
      <table className="table table-fixed bg-base-300">
        {/* head */}
        <thead>
          <tr>
            <th>
              <span className=" font-semibold text-lg">Command</span> [Required]
              (optional)
            </th>
            <th>
              <span className=" font-semibold text-lg">Description</span>{" "}
              Permissions Required
            </th>
          </tr>
        </thead>
        <tbody>
          {
            /* Map over the commands and then if the command has subcommands, map over those subcommands in a row below the main command */
            commands.map((command: any) => {
              if (command.subcommands.length > 0) {
                return (
                  <>
                    {command.subcommands.map((subcommand: any) => {
                      return (
                        <tr>
                          <td>
                            <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                              /{command.name} {subcommand.command}
                            </span>
                          </td>
                          <td>{subcommand.description}</td>
                        </tr>
                      );
                    })}
                  </>
                );
              } else {
                return (
                  <tr>
                    <td>
                      <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                        /{command.name}
                      </span>
                    </td>
                    <td>{command.description}</td>
                  </tr>
                );
              }
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default CommandsList;
