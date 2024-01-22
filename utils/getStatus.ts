import axios from "axios";

const getStatus = async () => {
  const { data: statusData } = await axios.get(
    "https://control.bot-hosting.net/api/client/servers/c76c94f1/resources",
    {
      headers: {
        Authorization: `Bearer ${process.env.PTERO_TOKEN}`,
      },
    }
  );
  return {
    status: statusData.attributes.current_state,
    upTime: statusData.attributes.resources.uptime,
  };
};

export default getStatus;
