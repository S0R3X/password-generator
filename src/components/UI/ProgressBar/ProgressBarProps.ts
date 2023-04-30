import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface ProgressBarProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: number;
  max?: number;
  min?: number;
}
