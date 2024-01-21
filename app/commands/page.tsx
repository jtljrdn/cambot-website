import CountCommands from "@/components/Commands/CountCommands";
import FortniteCommands from "@/components/Commands/FortniteCommands";
import RoleCommands from "@/components/Commands/RoleCommands";
import UtilityCommands from "@/components/Commands/UtilityCommands";
import ValorantCommands from "@/components/Commands/ValorantCommands";
import React from "react";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Commands',
}

const commands = () => {
  return (
    <div>
      <div className="text-6xl text-center font-bold my-[4rem]">Commands</div>

      <div className="rounded-box bg-base-200 mb-10">
        <section id="utility">
          <UtilityCommands />
        </section>
        <section id="fortnite">
          <FortniteCommands />
        </section>
        <section id="valorant">
            <ValorantCommands />
        </section>
        <section id="roles">
          <RoleCommands />
        </section>

        <section id="counting">
          <CountCommands />
        </section>
      </div>
    </div>
  );
};

export default commands;
