"use client";

import { Blink, useAction } from "@dialectlabs/blinks";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";
import "@dialectlabs/blinks/index.css";

import { siteMetadata } from "./metadata";

export default function Home() {
  const actionApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/actions/link`;

  const { adapter } = useActionSolanaWalletAdapter(
    "https://api.mainnet-beta.solana.com"
  );

  const { action, isLoading } = useAction({ url: actionApiUrl });

  if (!action || isLoading) return null;

  return (
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold text-white mb-4 hidden">
        Bjoern Wagner | {siteMetadata.title as string} |
        {siteMetadata.description}
      </h1>
      <p className="hidden">
        This is a contact blink. Let us catch up by using one of the options
        below.
      </p>
      <Blink
        action={action}
        adapter={adapter}
        securityLevel={"non-malicious"}
        stylePreset="custom"
      />
    </div>
  );
}
