import {
  ActionGetResponse,
  ActionPostResponse,
  createActionHeaders,
} from "@solana/actions";

const headers = createActionHeaders();

const encodeUrl = (url: string) => {
  return encodeURIComponent(url);
};

export const GET = async (req: Request) => {
  const payload: ActionGetResponse = {
    type: "action",
    icon: new URL(req.url).origin + "/banner.jpg",
    title: "",
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

  return new Response(JSON.stringify(payload), {
    headers,
  });
};

export const OPTIONS = GET;

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

  return new Response(JSON.stringify(payload), {
    headers,
  });
};
