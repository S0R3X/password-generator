import { useAppSelector } from "../../hooks/redux";
import styles from "./PasswordStrength.module.scss";

export const PasswordStrength = (): JSX.Element => {
  const strengthIndicators = useAppSelector(
    (state) => state.passwordStrength.strengthIndicators
  );

  return (
    <div className={styles["password-strength"]}>
      Strength
      <div className={styles.container}>
        <span className={styles.value}>Medium</span>
        <div className={styles["indicators-container"]}>
          {strengthIndicators.map((indicator) => (
            <div
              className={[
                styles.indicator,
                `${indicator && styles.active}`,
              ].join(" ")}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
