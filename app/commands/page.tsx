import CountCommands from "@/components/Commands/CountCommands";
import FortniteCommands from "@/components/Commands/FortniteCommands";
import UtilityCommands from "@/components/Commands/UtilityCommands";
import ValorantCommands from "@/components/Commands/ValorantCommands";
import React from "react";
import { Metadata } from "next";
import FunCommands from "@/components/Commands/FunCommands";
import ModerationCommands from "@/components/Commands/ModerationCommands";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commands",
};

const commands = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-6xl text-center font-bold my-[4rem]">Commands</div>

      <div className="rounded-box bg-base-200 mb-10">
        <section id="fortnite">
          <FortniteCommands />
        </section>
        <section id="fun">
          <FunCommands />
        </section>
        <section id="utility">
          <UtilityCommands />
        </section>
        <section id="valorant">
          <ValorantCommands />
        </section>
        <section id="roles">
          <ModerationCommands />
        </section>
        <section id="counting">
          <CountCommands />
        </section>
      </div>
      <div className="p-[4rem] text-center max-w-3xl py-5 bg-base-200 rounded-box justify-center mb-[8rem]">
        <p className="text-3xl font-bold mb-2">
          Have an idea? Want a new command?
        </p>
        <Link href="https://discord.gg/bDwKqSreue" target="blank">
          <p className="btn btn-primary text-2xl font-bold">Suggest One Now.</p>
        </Link>
      </div>
    </div>
  );
};

export default commands;
