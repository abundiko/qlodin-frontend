// TODO
// create type ChatType and export from @/types/chat (this type should have necessary fields from the design)
// create dummyChats and export from @types/chat
// create component: @components/chat/ChatListTile with prop {chat:ChatType}
// map the dummyChats and render ChatListTile

import ChatListTile from "@/components/chat/ChatListTile";
import { dummyChats } from "@/types/chat";

export default function MessageSidebar() {
  return (
    <div className="h-[50%] pb-2 flex-shrink-0 flex flex-col justify-stretch">
      <div className="flex-grow overflow-y-auto">
        {dummyChats.map((chat) => (
          <ChatListTile key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
}

