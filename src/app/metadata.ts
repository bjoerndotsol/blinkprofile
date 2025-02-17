import type { Metadata } from "next";

const sharedMetadata = {
  title: "@bjoerndotsol",
  description: "DevRel Engineer at Dialect Labs",
  url: "https://bjoern.fun",
  image: {
    url: "/banner.jpg",
    width: 1920,
    height: 1080,
    alt: "Banner image from @bjoerndotsol",
  },
};

export const siteMetadata: Metadata = {
  ...sharedMetadata,
  openGraph: {
    ...sharedMetadata,
    type: "profile",
    locale: "en_US",
    images: [sharedMetadata.image],
  },
  twitter: {
    ...sharedMetadata,
    card: "summary_large_image",
    creator: "@bjoerndotsol",
    site: "@bjoerndotsol",
    images: [sharedMetadata.image],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
