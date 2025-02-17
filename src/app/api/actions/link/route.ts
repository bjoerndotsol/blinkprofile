import {
  ActionGetResponse,
  ActionPostResponse,
  BLOCKCHAIN_IDS,
} from "@solana/actions";

const blockchain = BLOCKCHAIN_IDS.mainnet;

// Set standardized headers for Blink Providers
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, x-blockchain-ids, x-action-version",
  "Content-Type": "application/json",
  "x-blockchain-ids": blockchain,
  "x-action-version": "2.4",
};

// OPTIONS endpoint is required for CORS preflight requests
// Your Blink won't render if you don't add this
export const OPTIONS = async () => {
  return new Response(null, { headers });
};

const encodeUrl = (url: string) => {
  return encodeURIComponent(url);
};

export const GET = async (req: Request) => {
  const baseUrl = new URL(req.url).origin;

  const payload: ActionGetResponse = {
    type: "action",
    icon: `${baseUrl}/banner.jpg`,
    title: "@bjoerndotsol",
    label: "External link",
    description: "",
    links: {
      actions: [
        {
          type: "external-link",
          label: "GitHub",
          href: `/api/actions/link?url=${encodeUrl(
            "https://github.com/bjoerndotsol"
          )}`,
        },
        {
          type: "external-link",
          label: "X / Twitter",
          href: `/api/actions/link?url=${encodeUrl(
            "https://x.com/intent/follow?screen_name=bjoerndotsol"
          )}`,
        },
        {
          type: "external-link",
          label: "Telegram",
          href: `/api/actions/link?url=${encodeUrl(
            "https://t.me/bjoerndotsol"
          )}`,
        },
      ],
    },
  };

  return Response.json(payload, {
    headers,
  });
};

export const POST = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    console.error("URL parameter is missing");
    return new Response("URL parameter is required", { status: 400 });
  }

  const decodedUrl = decodeURIComponent(url);

  const payload: ActionPostResponse = {
    type: "external-link",
    externalLink: decodedUrl,
  };

  return Response.json(payload, {
    headers,
  });
};
