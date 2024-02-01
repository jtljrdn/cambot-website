import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content relative left-0 bottom-0 rounded-box z-0">
      <aside>
        <p>Copyright © 2024 - All right reserved</p>
        <p>
          Made with 💙 by{" "}
          <Link
            href={"https://jtlee.dev"}
            target="blank"
            className=" text-primary"
          >
            Jordan Lee
          </Link>
        </p>
        <p>
          <Link href={"https://jtlee.dev/cambot/tos"} target="about">
            Terms
          </Link>{" "}
          -{" "}
          <Link href={"https://www.jtlee.dev/cambot/privacy"} target="about">
            Privacy
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
