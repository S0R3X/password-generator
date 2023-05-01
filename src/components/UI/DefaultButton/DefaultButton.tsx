import styles from "./DefaultButton.module.scss";
import { DefaultButtonProps } from "./DefaultButtonProps";

export const DefaultButton = ({
  children,
  ...props
}: DefaultButtonProps): JSX.Element => {
  return (
    <button {...props} className={styles.btn}>
      {children}
    </button>
  );
};
