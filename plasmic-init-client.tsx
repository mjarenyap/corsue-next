"use client";

import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "./plasmic-init";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Label } from "./components/ui/label";

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
PLASMIC.registerComponent(Button, {
  name: "Button",
  props: {
    variant: {
      type: "choice",
      options: ["default", "outline", "ghost", "secondary"],
    },
    children: {
      type: "slot",
      defaultValue: "Button",
    },
  },
});

PLASMIC.registerComponent(Input, {
  name: "Input",
  props: {
    name: "string",
    placeholder: "string",
    id: "string",
    type: {
      type: "choice",
      options: ["text", "password"],
    },
  },
});

PLASMIC.registerComponent(Card, {
  name: "Card",
  props: {
    children: "slot",
  },
});

PLASMIC.registerComponent(CardHeader, {
  name: "CardHeader",
  props: {
    children: "slot",
  },
});

PLASMIC.registerComponent(CardHeader, {
  name: "CardContent",
  props: {
    children: "slot",
  },
});

PLASMIC.registerComponent(CardTitle, {
  name: "CardTitle",
  props: {
    children: "slot",
  },
});

PLASMIC.registerComponent(CardFooter, {
  name: "CardFooter",
  props: {
    children: {
      type: "slot",
      defaultValue: "Card title",
    },
  },
});

PLASMIC.registerComponent(Label, {
  name: "Label",
  props: {
    htmlFor: "string",
    children: {
      type: "slot",
      defaultValue: "Label",
    },
  },
});

PLASMIC.registerToken({
  name: "brand",
  displayName: "Brand",
  value: "#4B68FE",
  type: "color",
});

/**
 * PlasmicClientRootProvider is a Client Component that passes in the loader for you.
 *
 * Why? Props passed from Server to Client Components must be serializable.
 * https://beta.nextjs.org/docs/rendering/server-and-client-components#passing-props-from-server-to-client-components-serialization
 * However, PlasmicRootProvider requires a loader, but the loader is NOT serializable.
 */
export function PlasmicClientRootProvider(
  props: Omit<React.ComponentProps<typeof PlasmicRootProvider>, "loader">
) {
  return (
    <PlasmicRootProvider loader={PLASMIC} {...props}></PlasmicRootProvider>
  );
}
