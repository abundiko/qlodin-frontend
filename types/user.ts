export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  bio: string;
  link: string;
  profilePicture: string;
};

export const dummyUsers: UserType[] = [
  {
    _id: "1",
    firstName: "John",
    lastName: "Doe",
    userName: "johndoe",
    email: "johndoe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://www.example.com",
    profilePicture: "https://via.placeholder.com/150",
  },
  {
    _id: "2",
    firstName: "Jane",
    lastName: "Smith",
    userName: "janesmith",
    email: "janesmith@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://www.example.com",
    profilePicture: "https://via.placeholder.com/150",
  },
  {
    _id: "3",
    firstName: "Michael",
    lastName: "Johnson",
    userName: "mikej",
    email: "michael@example.com",
    bio: "Digital nomad and photography enthusiast exploring the world.",
    link: "https://www.michaelj.com",
    profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    _id: "4",
    firstName: "Sarah",
    lastName: "Williams",
    userName: "sarahw",
    email: "sarah.w@example.com",
    bio: "Tech enthusiast and coffee lover. Building the future one line of code at a time.",
    link: "https://www.sarahw.dev",
    profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    _id: "5",
    firstName: "David",
    lastName: "Chen",
    userName: "dchen",
    email: "david.chen@example.com",
    bio: "UX designer by day, musician by night. Creating beautiful experiences.",
    link: "https://www.davidchen.design",
    profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    _id: "6",
    firstName: "Emily",
    lastName: "Rodriguez",
    userName: "emrod",
    email: "emily.r@example.com",
    bio: "Environmental scientist passionate about sustainable living and nature photography.",
    link: "https://www.emilyrod.org",
    profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    _id: "7",
    firstName: "Alex",
    lastName: "Kumar",
    userName: "alexk",
    email: "alex.kumar@example.com",
    bio: "Startup founder and blockchain enthusiast. Always learning, always growing.",
    link: "https://www.alexkumar.io",
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
];
