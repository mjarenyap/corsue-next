import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <>
      <PlasmicComponent component="List" />
      <Button>Login</Button>
    </>
  );
}
