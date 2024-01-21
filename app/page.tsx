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
          <div className="text-right min-w-0">
            <h1 className="text-6xl font-bold">I wish I had a bot</h1>
            <ScrollingHero />
          </div>
        </div>

      </div>
      <div className="text-center my-[4rem]">
        <h1 className="text-6xl font-bold">CamBot does that.</h1>
        <Link href="https://discord.com/api/oauth2/authorize?client_id=1186507379173503137&permissions=18992663587958&scope=bot+applications.commands" target="blank">
        <h1 className="text-2xl btn btn-primary mt-5">Invite CamBot</h1>
        </Link>
      </div>
    </div>
  );
}
