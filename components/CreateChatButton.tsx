"use client";

import { MessageSquarePlus } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function CreateChatButton() {
  const route = useRouter();

  const createNewChat = async () => {
    // all logics here

    route.push("/chat/${id}");
  };
  return (
    <Button onClick={createNewChat} variant={"ghost"}>
      <MessageSquarePlus />
    </Button>
  );
}

export default CreateChatButton;
