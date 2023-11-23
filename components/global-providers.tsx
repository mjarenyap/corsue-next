"use client";

import { PlasmicClientRootProvider } from "@/plasmic-init-client";

export default function GlobalProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PlasmicClientRootProvider>{children}</PlasmicClientRootProvider>;
}
