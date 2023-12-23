import { FC } from "react";
import { IconContext } from "react-icons";
import { VscGithubAlt, VscChromeClose, VscMenu } from "react-icons/vsc";
import { FaInstagram, FaRegFolder, FaRegStar } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { HiExternalLink } from "react-icons/hi";
import { PiGitForkFill } from "react-icons/pi";
import { FaCaretRight } from "react-icons/fa";

export const iconNames = [
  "github",
  "instagram",
  "twitterx",
  "linkedin",
  "link",
  "folder",
  "star",
  "gitFork",
  "caretRight",
  "close",
  "menu",
] as const;

export type IconName = (typeof iconNames)[number];

export const iconSizes = ["large", "small"] as const;

export type IconSize = (typeof iconSizes)[number];

export type IconPropTypes = {
  name: IconName | string;
  color?: string;
  size?: IconSize;
  onClick?: any;
  pointer?: boolean;
};

const selectIcon = (
  iconName: IconPropTypes["name"],
  size: IconSize | string
): JSX.Element => {
  switch (iconName) {
    case "github":
      return <VscGithubAlt />;
    case "instagram":
      return <FaInstagram />;
    case "twitter":
      return <BsTwitterX />;
    case "linkedin":
      return <FiLinkedin />;
    case "link":
      return <HiExternalLink />;
    case "folder":
      return <FaRegFolder />;
    case "star":
      return <FaRegStar />;
    case "gitFork":
      return <PiGitForkFill />;
    case "caretRight":
      return <FaCaretRight />;
    case "close":
      return <VscChromeClose />;
    case "menu":
      return <VscMenu />;
    default:
      return <></>;
  }
};

const selectIconSize = (iconSize?: string) => {
  switch (iconSize) {
    case "small":
      return "12px";
    case "large":
      return "50px";
    default:
      return "20px";
  }
};

const IconWrapper = (props: any) => (
  <span style={props.pointer ? { cursor: "pointer" } : {}} {...props} />
);

const Icon: FC<IconPropTypes> = ({ name, color, size, onClick, pointer }) => (
  <IconContext.Provider
    value={{ color: color || "#adcdf4", size: selectIconSize(size) }}
  >
    <IconWrapper pointer={pointer} onClick={onClick}>
      {selectIcon(name, selectIconSize(size))}
    </IconWrapper>
  </IconContext.Provider>
);

export default Icon;
