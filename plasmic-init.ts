import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "nXziecjAa8pPKkMebXKBLT", // ID of a project you are using
      token:
        "rhcMZMuZLHQkEQZn1VNQssNNLzum5dJDiHO17F8gCbUjaYMkmFDGCFlq2INax4VpDKCUx3y9bOAuzehSIgg", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: false,
});
