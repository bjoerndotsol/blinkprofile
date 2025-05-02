import {
  ActionGetResponse,
  ACTIONS_CORS_HEADERS,
  BLOCKCHAIN_IDS,
} from "@solana/actions";

const blockchain = BLOCKCHAIN_IDS.mainnet;

// Set standardized headers for Blink Providers
const headers = {
  ...ACTIONS_CORS_HEADERS,
  "x-blockchain-ids": blockchain,
  "x-action-version": "2.4",
};

// OPTIONS endpoint is required for CORS preflight requests
// Your Blink won't render if you don't add this
export const OPTIONS = async () => {
  return new Response(null, {
    headers,
    status: 204,
  });
};

export const GET = async (req: Request) => {
  const baseUrl = new URL(req.url).origin;

  const payload: ActionGetResponse = {
    type: "action",
    icon: `${baseUrl}/banner.jpg`,
    title: "Let's catch up!",
    label: "External link",
    description: "",
    links: {
      actions: [
        {
          // @ts-expect-error - Client supports "inline-link" but SDK hasn't been updated yet
          type: "inline-link",
          label: "GitHub",
          href: "https://github.com/bjoerndotsol",
        },
        {
          // @ts-expect-error - Client supports "inline-link" but SDK hasn't been updated yet
          type: "inline-link",
          label: "X / Twitter",
          href: "https://x.com/intent/follow?screen_name=bjoerndotsol",
        },
        {
          // @ts-expect-error - Client supports "inline-link" but SDK hasn't been updated yet
          type: "inline-link",
          label: "Telegram",
          href: "https://t.me/bjoerndotsol",
        },
      ],
    },
  };

  return Response.json(payload, {
    headers,
  });
}; 