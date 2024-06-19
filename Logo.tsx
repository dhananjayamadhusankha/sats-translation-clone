import LogoImage from "@logo/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";

function Logo() {
  return (
    <Link prefetch={false} href={"/"} className=" overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex justify-center items-center"
        >
          <Image
            property=""
            src={LogoImage}
            alt="Logo"
            className="dark:invert dark:filter"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
