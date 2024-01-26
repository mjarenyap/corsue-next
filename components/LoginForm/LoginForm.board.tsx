import React from "react";
import { createBoard } from "@wixc3/react-board";
import { LoginForm } from "./LoginForm";

export default createBoard({
  name: "LoginForm",
  Board: () => <LoginForm />,
  isSnippet: true,
  environmentProps: {
    canvasWidth: 394,
    windowBackgroundColor: '#ededed'
  },
});
