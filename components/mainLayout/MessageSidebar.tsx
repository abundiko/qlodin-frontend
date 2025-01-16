// TODO
// create type ChatType and export from @/types/chat (this type should have necessary fields from the design)
// create dummyChats and export from @types/chat
// create component: @components/chat/ChatListTile with prop {chat:ChatType}
// map the dummyChats and render ChatListTile

import ChatListTile from "@/components/chat/ChatListTile";




const chatData = [
  {
    id: "1",
    name: "Direct Message ",
    message: "Message Preview ",
    imageUrl: "/images/look-img.jpeg",
    time: "12:33",
    messageCount: 1,
  },
  {
    id: "2",
    name: "Direct Message ",
    message: "Message Preview ",
    imageUrl: "/images/look-img.jpeg",
    time: "12:45",
    messageCount: 3,
  },
  {
    id: "3",
    name: "Direct Message ",
    message: "Message Preview ",
    imageUrl: "/images/look-img.jpeg",
    time: "1:00",
    messageCount: 5,
  },
];

export default function MessageSidebar() {
  return (
    <div className="overflow-y-auto flex-shrink-0 h-[50%] pb-4">
      <div className="h-[500px]">
        {chatData.map((chat) => (
          <ChatListTile key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
}

