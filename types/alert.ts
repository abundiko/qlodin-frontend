export interface AlertType {
    id: string;
    name: string;
    message: string;
    imageUrl: string;
    time: string; // Time of the last message 
    
  }

  
  export const dummyAlerts = [
    {
      id: "1",
      name: "Alert/discount deal ",
      message: "content preview",
      imageUrl: "/images/alert-img.png",
      time: "12:33",
     
    },
    {
      id: "2",
      name: "Alert/discount deal ",
      message: "content preview ",
      imageUrl: "/images/alert-img.png",
      time: "12:45",
     
    },
  ,
  ];