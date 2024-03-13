import { ButtonHTMLAttributes } from "react";
import "./button.scss";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className={["button", props.className].join(" ")} />
);
