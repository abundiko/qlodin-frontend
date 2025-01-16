// TODO
// create type ChatType and export from @/types/chat (this type should have necessary fields from the design)
// create dummyChats and export from @types/chat
// create component: @components/chat/ChatListTile with prop {chat:ChatType}
// map the dummyChats and render ChatListTile

import ChatListTile from "@/components/chat/ChatListTile";
import { chatData } from "@/types/chat";






export default function MessageSidebar() {
  return (
    <div className="">
      <div className="">
        {chatData.map((chat) => (
          <ChatListTile key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
}

