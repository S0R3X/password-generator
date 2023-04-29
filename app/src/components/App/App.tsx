import { Password } from "../Password/Password";
import { SettingsForm } from "../SettingsForm/SettingsForm";
import { Tittle } from "../Title/Tittle";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Tittle />
      <Password />
      <SettingsForm />
    </div>
  );
}

export default App;
