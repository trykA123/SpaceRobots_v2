import { useEffect, useState } from "react";
import titleLogo from "/assets/images/logo.webp";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-accent-color bg-background-color-2 ">
      <div className="max-w-[1200px container mx-auto grid h-96 grid-cols-2 place-content-center justify-items-center py-12 lg:grid-cols-3">
        <div className="col-span-2 flex flex-col gap-2 p-4 lg:col-span-1 lg:gap-4 lg:p-0">
          <a href="#hero" className="cursor-pointer">
            <img src={titleLogo} alt="SpaceRobots Logo" className="w-96" />
          </a>
          <div className="col-span-1 self-center text-accent-color lg:self-auto">
            <p>&copy; {year} SpaceRobots</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <ul className="flex flex-col space-y-2">
            <li className="group flex flex-col">
              <a href="#hero">Home</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16" />
            </li>
            <li className="group flex flex-col">
              <a href="#about">About</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16" />
            </li>
            <li className="group flex flex-col">
              <a href="#collections">Collections</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16" />
            </li>
            {/* <li className="group flex flex-col">
              <a href="#">Market</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16"/>
            </li> */}
            <li className="group flex flex-col">
              <a href="#stories">Stories</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16" />
            </li>
            <li className="group flex flex-col">
              <a href="#roadmap">Roadmap</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16" />
            </li>
            <li className="group flex flex-col">
              <a href="#team">Team</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <ul className="flex flex-col space-y-2">
            <li className="group flex flex-col">
              <a href="https://t.me/SpaceRobots">Telegram</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16" />
            </li>
            <li className="group flex flex-col">
              <a href="https://twitter.com/SpaceRobots">X (Twitter)</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16" />
            </li>
            <li className="group flex flex-col">
              <a href="https://discord.gg/SpaceRobots">Discord</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16" />
            </li>
            <li className="group flex flex-col">
              <a href="#blog">Blog</a>
              <span className="h-[1px] w-0 bg-accent-color duration-700 group-hover:w-16" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
