import { Metadata } from "next";

const HOST = process.env.HOST || "http://localhost:3000";

export type MetadataProps = {
  title: string;
  description: string;
  img?: string;
  path?: string;
};

/**
 * Generates static metadata for a given set of properties.
 *
 * @param {MetadataProps} props - The properties for generating the metadata.
 * @param {string} props.title - The title of the metadata.
 * @param {string} props.description - The description of the metadata.
 * @param {string} [props.img] - The image URL of the metadata.
 * @return {Metadata} The generated metadata.
 */
export function createMetadata({
  title,
  description,
  img = "/images/banner.jpg",
}: MetadataProps): Metadata {
  const keywords = [
    "qlodin",
    ...processString(title),
    ...processString(description),
  ];
  const buildImg = (img: string) =>
    img ? (img.startsWith("/") ? HOST + img : img) : "/images/banner.jpg";

  return {
    title,
    description,
    metadataBase: new URL(HOST),
    icons: [
      buildImg("/images/favicon.ico"),
      buildImg("/images/favicon.png"),
      buildImg("/images/icon.png"),
      { rel: "apple-touch-icon", url: buildImg("/images/favicon.png") },
    ],
    applicationName: "Qlodin",
    keywords: keywords,
    twitter: { title, description, images: [buildImg(img)] },
    openGraph: {
      title,
      description,
      images: [buildImg(img)],
      tags: keywords,
    },
  };
}

function processString(input: string): string[] {
  // Step 1: Replace multiple spaces with a single space
  const cleanedString = input.replace(/\s+/g, " ").trim();

  // Step 2: Split the string into words
  const words = cleanedString.split(" ");

  // Step 3: Group the words into sentences of 3 words max
  const sentences: string[] = [];
  for (let i = 0; i < words.length; i += 3) {
    sentences.push(words.slice(i, i + 3).join(" "));
  }

  return sentences;
}
