import Link from "next/link";

const Navbar = () => {
  return (
    <div className="min-w-full">
      <div className="navbar content-between rounded-box shadow-md bg-base-300">
        <div className="flex-1">
          <Link href="/">
            <p className="btn btn-ghost text-xl">CamBot.xyz</p>
          </Link>
          <Link href="https://discord.gg/bDwKqSreue" target="blank">
            <p className="btn btn-ghost">Support Discord</p>
          </Link>
          <div className="indicator">
            <Link href="/commands">
              <span className="indicator-item badge badge-accent">new</span>
              <p className="btn btn-ghost">Commands</p>
            </Link>
          </div>
          <Link href="/status">
            <p className="btn btn-ghost">Status</p>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <Link href="https://github.com/jtljrdn/Cam-Counter-Public?tab=readme-ov-file#contributions" target="blank">
            <p className="btn btn-ghost">Contribute</p>
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
