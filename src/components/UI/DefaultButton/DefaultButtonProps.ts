import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface DefaultButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}
