import { useEffect } from "react";
import { passwordGeneration } from "../../helpers/passwordGeneration";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { DefaultButton } from "../UI/DefaultButton/DefaultButton";
import {
  setPassword,
  checkCurrectGeneration,
} from "../../store/reducers/passwordGenerationSlice";
import { IoMdArrowRoundForward } from "react-icons/io";
import styles from "./ButtonGenerate.module.scss";

export const ButtonGenerate = () => {
  const dispatch = useAppDispatch();
  const { characterLength, includes: passwordIncludes } = useAppSelector(
    (state) => state.passwordSettings
  );
  const isCurrectGeneration = useAppSelector(
    (state) => state.passwordGeneration.isCurrectGeneration
  );
  const { passwordSettings } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(checkCurrectGeneration(passwordSettings));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    passwordSettings.includes.upperCaseLetters,
    passwordSettings.includes.lowerCaseLetters,
    passwordSettings.includes.numbers,
    passwordSettings.includes.symbols,
    passwordSettings.characterLength,
  ]);

  const handleGenerateClick = (): void => {
    const password = passwordGeneration(characterLength, passwordIncludes);
    dispatch(setPassword(password));
  };

  return (
    <DefaultButton
      onClick={handleGenerateClick}
      disabled={!isCurrectGeneration}
    >
      <div className={styles.container}>
        Generate
        <IoMdArrowRoundForward className={styles.arrow} />
      </div>
    </DefaultButton>
  );
};
