import { ProgressBarProps } from "./ProgressBarProps";
import styles from "./ProgressBar.module.scss";

export const ProgressBar = ({ ...props }: ProgressBarProps): JSX.Element => {
  return (
    <div className={styles["container-progress-bar"]}>
      <input type="range" className={styles["progress-bar"]} {...props} />
    </div>
  );
};
