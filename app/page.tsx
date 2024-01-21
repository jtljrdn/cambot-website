import FeatureCard from "@/components/Home/FeatureCard";
import ScrollingHero from "@/components/ScrollingHero";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home | CamBot.xyz',
}

export default function Home() {
  return (
    <div className="w-full">
      <div className=" px-2 bg-base-200 rounded-box">
        <div className="hero-content my-[4rem] flex-col lg:flex-row justify-between opacity-100">
          <Image
            src={"/Cambot-PFP.png"}
            width={300}
            height={300}
            alt="Cambot Image"
            className="max-w-sm rounded-lg shadow-2xl left-0"
          />
          <div className="lg:text-right text-center min-w-0">
            <h1 className="md:text-5xl font-bold text-3xl mb-1">
              I wish I had a bot
            </h1>
            <ScrollingHero />
          </div>
        </div>
      </div>
      <div className="text-center my-[4rem]">
        <div className="md:text-6xl font-bold text-xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            CamBot does that.
          </span>
        </div>
        <div className="flex-row justify-between">
          <Link
            href="https://discord.com/api/oauth2/authorize?client_id=1186507379173503137&permissions=18992663587958&scope=bot+applications.commands"
            target="blank"
          >
            <h1 className="md:text-2xl btn btn-secondary mt-5 text-md">
              Invite CamBot
            </h1>
          </Link>
          <Link href="/commands">
            <h1 className="ml-5 md:text-2xl btn btn-outline btn-accent mt-5 text-md">
              Commands
            </h1>
          </Link>
        </div>
      </div>
      <div className=" bg-base-200 rounded-box w-full flex flex-col items-center justify-stretch mb-10 py-4 gap-4">
        <FeatureCard img="/fn-stats-screenshot.png">
          <div>
            <h1 className="text-3xl font-bold">Fortnite Commands</h1>
            <h2 className="font-semibold text-xl mt-2">
              Look up today's item shop, search for shop items and jamtracks, and get player stats for Xbox, PlayStation, and PC!
            </h2>
            <ul className="list-disc list-inside m-2 space-y-4">
              
              <li>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /fn stats [user] [platform]
                </span>
              </li>
              <li>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /fn itemshop
                </span>
              </li>
              <li>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /fn search [item]
                </span>
              </li>
              <li>
                <span className=" bg-gray-800 rounded-box w-fit p-2 font-mono">
                  /fn jamtrack [track]
                </span>
              </li>
            </ul>
          </div>
        </FeatureCard>
        <FeatureCard img="/poll-screenshot.png" imgSize={300}>
          <div>
          <h1 className="text-3xl font-bold">Polls</h1>
          <h2 className="font-semibold text-xl mt-2">Easily create polls to get member feedback, ask a question, or involve your community! </h2>
          </div>
        </FeatureCard>
        <FeatureCard img="/roles-screenshot.png">
          <div>
          <h1 className="text-3xl font-bold">Moderation Commands</h1>
          <h2 className="font-semibold text-xl mt-2">Manage roles, access users/server information, and more!</h2>
          </div>
          </FeatureCard>
      </div>

    </div>
  );
}
