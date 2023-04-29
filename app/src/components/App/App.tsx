import { Password } from "../Password/Password";
import { SettingsForm } from "../SettingsForm/SettingsForm";
import { Title } from "../Title/Title";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Title />
      <Password />
      <SettingsForm />
    </div>
  );
}

export default App;
