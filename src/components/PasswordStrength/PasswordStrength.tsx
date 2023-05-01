import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import styles from "./PasswordStrength.module.scss";
import { setPasswordStrength } from "../../helpers/setPasswordStrength";
import { changeStrengValue } from "../../store/reducers/passwordStrengthSlice";

export const PasswordStrength = (): JSX.Element => {
  const { strengthIndicators, strengthValue } = useAppSelector(
    (state) => state.passwordStrength
  );

  const { characterLength, includes: passwordIncludes } = useAppSelector(
    (state) => state.passwordSettings
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const passwordStrength = setPasswordStrength(
      characterLength,
      passwordIncludes
    );
    dispatch(changeStrengValue(passwordStrength));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    passwordIncludes.upperCaseLetters,
    passwordIncludes.lowerCaseLetters,
    passwordIncludes.numbers,
    passwordIncludes.symbols,
    characterLength,
  ]);

  return (
    <div className={styles["password-strength"]}>
      <span className={styles.text}>Strength</span>
      <div className={styles.container}>
        <span className={styles.value}>{strengthValue && strengthValue}</span>
        <div className={styles["indicators-container"]}>
          {strengthIndicators.map((indicator, i) => (
            <div
              key={i}
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
