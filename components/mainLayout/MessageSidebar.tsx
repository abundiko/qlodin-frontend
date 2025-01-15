// TODO
// create type ChatType and export from @/types/chat (this type should have necessary fields from the design)
// create dummyChats and export from @types/chat
// create component: @components/chat/ChatListTile with prop {chat:ChatType}
// map the dummyChats and render ChatListTile

export default function MessageSidebar() {
  return (
    <div className="overflow-y-auto flex-shrink-0 h-[50%] pb-4">
      <div className="h-[500px] bg-blue-300">@emma work on this</div>
    </div>
  );
}
