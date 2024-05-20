import {
  faDiscord,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="container grid h-60 grid-cols-4 border-t border-accent-color bg-background-color-2 ">
        <div>1</div>
        <div>1</div>
        <div>
          <div className="flex justify-center space-x-4">
            <a href="https://discord.gg/SpaceRobots" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
            <a href="https://t.me/SpaceRobots" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
            <a href="https://twitter.com/SpaceRobots" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>
        <div className="text-accent-color">
          <p>&copy; 2021 SpaceRobots</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
