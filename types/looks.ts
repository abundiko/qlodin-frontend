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
    image: "/images/look-img.jpeg",
    media: ["/images/look-img.jpeg"],
    likesCount: 10,
    commentsCount: 2,
    wardrobeCount: 3,
  },
  {
    _id: "2",
    image: "/images/look-img.jpeg",
    media: ["/images/look-img.jpeg"],
    likesCount: 10,
    commentsCount: 2,
    wardrobeCount: 3,
  },
  {
    _id: "3",
    image: "/images/look-img.jpeg",
    media: ["/images/look-img.jpeg"],
    likesCount: 10,
    commentsCount: 2,
    wardrobeCount: 3,
  },
];
