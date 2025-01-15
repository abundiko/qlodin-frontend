export type LooksType = {
  _id: string;
  image: string;
  media: string[];
};

export type LooksTypePopulated = LooksType & {
  likesCount: number;
  commentsCount: number;
  wardrobeCount: number;
};

export const dummyLooks: LooksTypePopulated[] = [
  {
    _id: "1",
    image: "/images/looks/1.jpg",
    media: ["/images/looks/1.jpg"],
    likesCount: 10,
    commentsCount: 2,
    wardrobeCount: 3,
  },
  {
    _id: "2",
    image: "/images/looks/2.jpg",
    media: ["/images/looks/2.jpg"],
    likesCount: 10,
    commentsCount: 2,
    wardrobeCount: 3,
  },
  {
    _id: "3",
    image: "/images/looks/3.jpg",
    media: ["/images/looks/3.jpg"],
    likesCount: 10,
    commentsCount: 2,
    wardrobeCount: 3,
  },
];
