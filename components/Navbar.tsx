import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="min-w-full">
      <div className="navbar content-between rounded-box shadow-md bg-base-300">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="https://discord.gg/bDwKqSreue" target="blank">
                <p className="">Support Discord</p>
              </Link>
            </li>
            <li>
              <Link href="/commands">
                <p className="">Commands</p>
              </Link>
            </li>
            <li>
              <Link href="/status">
                <p className="">Status</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Link href="/">
            <p className="btn btn-ghost text-xl">
              <Image
                src={"/Cambot-PFP.png"}
                width={40}
                height={40}
                alt="Cambot icon"
                className="lg:block hidden"
              />
              CamBot.xyz
            </p>
          </Link>
          <Link href="https://discord.gg/bDwKqSreue" target="blank">
            <p className="hidden lg:flex btn btn-ghost">Support Discord</p>
          </Link>
          <div className="hidden lg:flex indicator">
            <Link href="/commands">
              <span className="hidden lg:flex indicator-item badge badge-accent">
                new
              </span>
              <p className="hidden lg:flex btn btn-ghost">Commands</p>
            </Link>
          </div>
          <Link href="/status">
            <p className="hidden lg:flex btn btn-ghost">Status</p>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <Link
            href="https://github.com/jtljrdn/Cam-Counter-Public?tab=readme-ov-file#contributions"
            target="blank"
          >
            <p className="hidden lg:flex btn btn-ghost">Contribute</p>
          </Link>
          <Link
            href="https://discord.com/api/oauth2/authorize?client_id=1186507379173503137&permissions=18992663587958&scope=bot+applications.commands"
            target="blank"
          >
            <p className="btn btn-secondary">Add To Your Server</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
