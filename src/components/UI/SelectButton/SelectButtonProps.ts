import { ReactNode } from "react";

export interface SelecButtonProps {
  children?: ReactNode;
  checked: boolean;
  setChecked: () => void;
}
