import { cn } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Props = {
  name?: string | null;
  image?: string | null;
  className?: string;
};

function UserAvatar({ name, image, className }: Props) {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {image && (
        <Image
          src={image}
          alt={name || "user name"}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      <AvatarFallback
        delayMs={1000}
        className="dark:bg-white dark:text-black text-lg"
      >
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
