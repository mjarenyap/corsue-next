import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

export default function LoginPage() {
  const handleLogin = async (formData: FormData) => {
    "use server";

    console.log("Logging in...", {
      username: formData.get("username"),
      password: formData.get("password"),
    });
  };

  return (
    <main className="p-8">
      <form action={handleLogin} className="mb-9">
        <Card className="max-w-sm mx-auto">
          <CardHeader>
            <CardTitle>Welcome back!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <Label htmlFor="username">Username</Label>
              <Input name="username" id="username" placeholder="Username" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">Login</Button>
          </CardFooter>
        </Card>
      </form>
      <form action={handleLogin}>
        <PlasmicComponent
          component="LoginForm"
          componentProps={{
            root: {
              props: {
                className: "mx-auto max-w-sm",
              },
            },
            title: {
              props: {
                children: "Welcome back!",
              },
            },
            usernameField: {
              props: {
                defaultValue: "asdfsa",
                disabled: true,
              },
            },
          }}
        />
      </form>
    </main>
  );
}
