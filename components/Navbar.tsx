import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" min-w-full">
      <div className="navbar content-between rounded-box shadow-md bg-base-300">
        <div className="flex-1">
          <Link href="/">
            <p className="btn btn-ghost text-xl">CamBot.xyz</p>
          </Link>
          <Link href="https://discord.gg/bDwKqSreue" target="blank">
            <p className="btn btn-ghost">Support Discord</p>
          </Link>
          <Link href="/commands">
            <p className="btn btn-ghost">Commands</p>
          </Link>
          <Link href="/status">
            <p className="btn btn-ghost">Status</p>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <p className="btn btn-primary">Add To Your Server</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
