export interface ChatType {
    id: string;
    name: string;
    message: string;
    imageUrl: string;
    time: string; // Time of the last message
    messageCount: number; // Total number of messages
  }

  export const chatData = [
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