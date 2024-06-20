import React from "react";
import Logo from "./Logo";
import { ThemeToggler } from "./ThemeToggler";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Link from "next/link";
import { MessagesSquare } from "lucide-react";
import CreateChatButton from "./CreateChatButton";

async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className="flex flex-1 items-center space-x-4 justify-end">
          {/* LanguageSelect */}
          
          <>
            {/* Session */}
            {session ? (
              <Link href={"/chat"} prefetch={false}>
                <MessagesSquare />
              </Link>
            ) : (
              <Link href={"/pricing"}>Price</Link>
            )}

            <CreateChatButton />
          </>
          {/* DarkModeToggle */}
          <ThemeToggler />

          {/* UserButton */}
          <UserButton session={session} />
        </div>
      </nav>
      {/* Upgade Banner */}
    </header>
  );
}

export default Header;
