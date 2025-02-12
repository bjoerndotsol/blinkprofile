"use client";

import { Blink, useAction } from "@dialectlabs/blinks";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";
import "@dialectlabs/blinks/index.css";

export default function Home() {
  const actionApiUrl = `http://localhost:3000/api/actions/blinktree`;

  const { adapter } = useActionSolanaWalletAdapter(
    "https://api.mainnet-beta.solana.com"
  );

  const { action, isLoading } = useAction({ url: actionApiUrl });

  if (!action || isLoading) return null;

  return (
    <div className="w-full max-w-md">
      <Blink
        action={action}
        adapter={adapter}
        securityLevel={"non-malicious"}
        stylePreset="custom"
      />
    </div>
  );
}
