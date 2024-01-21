import React from 'react'

const ValorantCommands = () => {
  return (
    <div>
      <div className="text-center text-4xl font-semibold py-2">Valorant</div>

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
                  /valorant match-info [match-id]
                </span>
              </td>
              <td>Get information on a Valorant match.</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ValorantCommands
