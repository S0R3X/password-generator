import styles from "./DefaultButton.module.scss";

export const DefaultButton = (): JSX.Element => {
  return <button className={styles.btn}>Generate</button>;
};
