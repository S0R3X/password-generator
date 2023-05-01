import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import styles from "./Password.module.scss";
import { FaRegCopy } from "react-icons/fa";

export const Password = (): JSX.Element => {
  const password = useAppSelector((state) => state.passwordGeneration.password);
  const [isCopy, setIsCopy] = useState<boolean>(false);
  useEffect(() => {
    setIsCopy(false);
  }, [password]);

  const handleCopyClick = (): void => {
    if (password !== undefined) {
      navigator.clipboard.writeText(password);
      setIsCopy(true);
    }
  };
  return (
    <section className={styles["generated-password"]}>
      <div className={styles.container}>
        <span className={`${password && styles["password-active"]}`}>
          {password ? password : "Password"}
        </span>
        <FaRegCopy
          onClick={handleCopyClick}
          className={[
            styles.icon,
            `${password && styles["icon-active"]}`,
            `${isCopy && styles["icon-copy"]}`,
          ].join(" ")}
        />
      </div>
      {isCopy && <div className={styles["text-copy"]}>Copy</div>}
    </section>
  );
};
