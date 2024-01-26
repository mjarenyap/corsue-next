import React from "react";
import { LoginForm } from "../LoginForm/LoginForm";

export interface SignUpPageProps {
  className?: string;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({ className = "" }) => (
  <div className={className}>
    SignUpPage
    <LoginForm />
  </div>
);
