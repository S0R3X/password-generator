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
  const passwordIncludes = useAppSelector(
    (state) => state.passwordSettings.includes
  );

  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <SelectButton
        checked={passwordIncludes.lowerCaseLetters}
        setChecked={() =>
          dispatch(includeLowerCaseLetters(!passwordIncludes.lowerCaseLetters))
        }
      >
        Include Lowercase Letters
      </SelectButton>

      <SelectButton
        checked={passwordIncludes.upperCaseLetters}
        setChecked={() =>
          dispatch(includeUpperCaseLetters(!passwordIncludes.upperCaseLetters))
        }
      >
        Include Uppercase Letters
      </SelectButton>

      <SelectButton
        checked={passwordIncludes.numbers}
        setChecked={() => dispatch(includeNumbers(!passwordIncludes.numbers))}
      >
        Include Numbers
      </SelectButton>

      <SelectButton
        checked={passwordIncludes.symbols}
        setChecked={() => dispatch(includeSymbols(!passwordIncludes.symbols))}
      >
        Include Symbols
      </SelectButton>
    </div>
  );
};
