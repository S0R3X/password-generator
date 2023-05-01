import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import styles from "./PasswordStrength.module.scss";
import { setPasswordStrength } from "../../helpers/setPasswordStrength";
import { changeStrengValue } from "../../store/reducers/passwordStrengthSlice";

export const PasswordStrength = (): JSX.Element => {
  const strengthIndicators = useAppSelector(
    (state) => state.passwordStrength.strengthIndicators
  );
  const strengthValue = useAppSelector(
    (state) => state.passwordStrength.stregthValue
  );

  const upperCaseLetters = useAppSelector(
    (state) => state.passwordSettings.upperCaseLetters
  );
  const lowerCaseLetters = useAppSelector(
    (state) => state.passwordSettings.lowerCaseLetters
  );
  const numbers = useAppSelector((state) => state.passwordSettings.numbers);
  const symbols = useAppSelector((state) => state.passwordSettings.symbols);
  const characterLength = useAppSelector(
    (state) => state.passwordSettings.characterLength
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const passwordStrength = setPasswordStrength(characterLength, [
      upperCaseLetters,
      lowerCaseLetters,
      numbers,
      symbols,
    ]);
    dispatch(changeStrengValue(passwordStrength));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upperCaseLetters, lowerCaseLetters, numbers, symbols, characterLength]);

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
