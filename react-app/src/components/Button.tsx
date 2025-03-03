import { Children, ReactNode, useState } from "react";
import Alert from "./Alert";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "danger" | "secndary";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: ButtonProps) {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
