import { passwordGeneration } from "../../helpers/passwordGeneration";
import { useAppSelector } from "../../hooks/redux";
import { DefaultButton } from "../UI/DefaultButton/DefaultButton";
import styles from "./ButtonGenerate.module.scss";

export const ButtonGenerate = () => {
  const { characterLength, includes: passwordIncludes } = useAppSelector(
    (state) => state.passwordSettings
  );

  const handleGenerateClick = (): void => {
    const password = passwordGeneration(characterLength, passwordIncludes);
  };

  return (
    <DefaultButton onClick={handleGenerateClick}>
      <div className={styles.container}>
        Generate
        <span className={styles.arrow}>🡲</span>
      </div>
    </DefaultButton>
  );
};
