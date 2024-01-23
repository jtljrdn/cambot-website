import { connectToDatabase } from "@/utils/database/connectToDb";
import Stats from "@/utils/database/models/stats.model";
import axios from "axios";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET() {
  const { data: res } = await axios.get(
    "https://control.bot-hosting.net/api/client/servers/c76c94f1/resources",
    {
      headers: {
        Authorization: `Bearer ${process.env.PTERO_TOKEN}`,
      },
    }
  );

  await connectToDatabase();
  const { guildCount, userCount } = await Stats.findById(
    "65ade1c76f113987582b9c29"
  );

  const data = {
    status: res.attributes.current_state,
    upTime: res.attributes.resources.uptime,
    guildCount: guildCount,
    userCount: userCount,
  };
  return NextResponse.json(data);
}
