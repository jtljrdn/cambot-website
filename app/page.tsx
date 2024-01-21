import ScrollingHero from "@/components/ScrollingHero";
import Image from "next/image";
import Link from "next/link";

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
            <h1 className="md:text-5xl font-bold text-3xl">
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
      <div className=" bg-base-200 rounded-box w-full">
        <div>Feature 1</div>
        <div>Feature 2</div>
        <div>Feature 3</div>
      </div>
    </div>
  );
}
