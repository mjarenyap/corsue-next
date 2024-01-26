import type { FC } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const LoginForm: FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Welcome back!</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <Label className="text-xs">Username</Label>
          <Input id="username" placeholder="Username" type="text" />
        </div>
        <div className="mb-4">
          <Label className="text-xs">Password</Label>
          <Input id="username" placeholder="Password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="secondary">Forgot password</Button>
        <Button
          onClick={() => {
            console.log("hello");
          }}
        >Login</Button>
      </CardFooter>
    </Card>
  );
};
