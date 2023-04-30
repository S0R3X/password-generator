import { ProgressBar } from "../UI/ProgressBar/ProgressBar";

export const ChangeCharacterLength = (): JSX.Element => {
  return (
    <div>
      <ProgressBar min={0} max={20} step={1} />
    </div>
  );
};
