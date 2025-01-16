export interface ChatType {
    id: string;
    name: string;
    message: string;
    imageUrl: string;
    time: string; // Time of the last message
    messageCount: number; // Total number of messages
  }