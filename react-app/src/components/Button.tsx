import { Children, ReactNode, useState } from "react";
import Alert from "./Alert";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "danger" | "secndary";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
