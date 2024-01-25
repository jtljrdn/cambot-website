import React from "react";

const ModerationCommands = () => {
  return (
    <div>
      <div className="text-center text-4xl font-semibold py-2">Moderation</div>

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
                  /role create [name] (color) (mentionable) (hoist)
                </span>
              </td>
              <td>
                <span className="font-bold">Manage Roles</span> Creates a role
                with the options included.
              </td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /role add [user] [role]
                </span>
              </td>
              <td>
                <span className="font-bold">Manage Roles</span> Adds a role to
                user.
              </td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /role remove [user] [role]
                </span>
              </td>
              <td>
                <span className="font-bold">Manage Roles</span> Removes a role
                from a user.
              </td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /role color [role] [color]
                </span>
              </td>
              <td>
                <span className="font-bold">Manage Roles</span> Changes a role's
                color. Must use hex color code (i.e. #0f0f0f)
              </td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /role list [role]
                </span>
              </td>
              <td>
                DISABLED: <span className="font-bold">Manage Roles</span> List
                all users with role.
              </td>
            </tr>
            <tr>
              <td>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /role info [role]
                </span>
              </td>
              <td>
                DISABLED: <span className="font-bold">Manage Roles</span> Shows
                information on a role.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModerationCommands;
