import { connectToDatabase } from "@/utils/database/connectToDb";
import Commands from "@/utils/database/models/commands.model";
import axios from "axios";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
  const body = await request.json();
  const auth = await request.headers.get("authorization");
  let count = 0;
  if (auth !== process.env.API_AUTH_TOKEN) {
    return NextResponse.json({ message: "Unauthorized", status: 401 });
  }
  await connectToDatabase();
  for (const command of body) {
    let commandToUpdate = await Commands.findOne({
      name: command.name,
    });
    if (!commandToUpdate) {
      let newCommand = await Commands.create({
        name: command.name,
        description: command.description,
      });
      console.log(`Created Command: ${newCommand.name}`);
    }
    if (!commandToUpdate.description) {
      await commandToUpdate.updateOne({
        description: command.description,
      });
      console.log(`Updated Description: ${commandToUpdate.name}`);
    }
    console.log(`Parent Commands: ${command.name}`);
    if (command.options.length > 0) {
      for (const option of command.options) {
        if (option.type === 1) {
          const subcommand = {
            command: option.name,
            description: option.description,
          };
          await commandToUpdate.updateOne({
            $addToSet: {
              subcommands: subcommand,
            },
          });
          console.log(`Subcommand: ${subcommand.command}`);
        }
      }
    }

    count++;
  }

  return NextResponse.json({
    message: `${count}/${body.length} Commands posted.`,
    status: 200,
  });
}

export async function GET(request: any, { params }: any) {
  // const auth = await request.headers.get("authorization");
  // if (auth !== process.env.API_AUTH_TOKEN) {
  //   return NextResponse.json({ message: "Unauthorized", status: 401 });
  // }
  await connectToDatabase();
  const commands = await Commands.find({});
  return NextResponse.json(commands);
}
