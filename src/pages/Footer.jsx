import { useEffect, useState } from "react";
import titleLogo from "/assets/images/logo.webp";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-accent-color bg-background-color-2 ">
      <div className="mx-auto grid h-96 max-w-[1200px] grid-cols-3 place-content-center justify-items-center py-12">
        <div className="flex flex-col gap-4">
          <a href="#hero" className="cursor-pointer">
            <img src={titleLogo} alt="SpaceRobots Logo" className="w-96" />
          </a>
          <div className="col-span-1 text-accent-color">
            <p>&copy; {year} SpaceRobots</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <ul className="flex flex-col space-y-2">
            <li className="group flex flex-col">
              <a href="">Home</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16"></span>
            </li>
            <li className="group flex flex-col">
              <a href="">About</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16"></span>
            </li>
            <li className="group flex flex-col">
              <a href="">Collections</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16"></span>
            </li>
            <li className="group flex flex-col">
              <a href="">Market</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16"></span>
            </li>
            <li className="group flex flex-col">
              <a href="">Stories</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16"></span>
            </li>
            <li className="group flex flex-col">
              <a href="">Roadmap</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16"></span>
            </li>
            <li className="group flex flex-col">
              <a href="">Team</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16"></span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <ul className="flex flex-col space-y-2">
            <li className="group flex flex-col">
              <a href="">Telegram</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16"></span>
            </li>
            <li className="group flex flex-col">
              <a href="">X (Twitter)</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16"></span>
            </li>
            <li className="group flex flex-col">
              <a href="">Discord</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16"></span>
            </li>
            <li className="group flex flex-col">
              <a href="">Blog</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16"></span>
            </li>
          </ul>
        </div>
        {/* <div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://discord.gg/SpaceRobots"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
            <a href="https://t.me/SpaceRobots" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
            <a
              href="https://twitter.com/SpaceRobots"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
