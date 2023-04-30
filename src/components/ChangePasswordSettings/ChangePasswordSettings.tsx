import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { SelectButton } from "../UI/SelectButton/SelectButton";
import {
  includeLowerCaseLetters,
  includeNumbers,
  includeSymbols,
  includeUpperCaseLetters,
} from "../../store/reducers/passwordSettingsSlice";
import styles from "./ChangePasswordSettings.module.scss";

export const ChangePasswordSettings = (): JSX.Element => {
  const upperCaseLetters = useAppSelector(
    (state) => state.passwordSettings.upperCaseLetters
  );
  const lowerCaseLetters = useAppSelector(
    (state) => state.passwordSettings.lowerCaseLetters
  );

  const numbers = useAppSelector((state) => state.passwordSettings.numbers);
  const symbols = useAppSelector((state) => state.passwordSettings.symbols);

  const dispatch = useAppDispatch();

  return (
    <div className={styles["change-password-settings"]}>
      <SelectButton
        checked={upperCaseLetters}
        setChecked={() => dispatch(includeUpperCaseLetters(!upperCaseLetters))}
      >
        Include Uppercase Letters
      </SelectButton>
      <SelectButton
        checked={lowerCaseLetters}
        setChecked={() => dispatch(includeLowerCaseLetters(!lowerCaseLetters))}
      >
        Include Lowercase Letters
      </SelectButton>
      <SelectButton
        checked={numbers}
        setChecked={() => dispatch(includeNumbers(!numbers))}
      >
        Include Numbers
      </SelectButton>
      <SelectButton
        checked={symbols}
        setChecked={() => dispatch(includeSymbols(!symbols))}
      >
        Include Symbols
      </SelectButton>
    </div>
  );
};
