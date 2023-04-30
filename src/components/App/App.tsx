import { Password } from "../Password/Password";
import { SettingsForm } from "../SettingsForm/SettingsForm";
import { Title } from "../Title/Title";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Password />
      <SettingsForm />
    </div>
  );
}

export default App;
