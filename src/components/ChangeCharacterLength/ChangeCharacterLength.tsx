import { ProgressBar } from "../UI/ProgressBar/ProgressBar";
import { changeCharacterLength } from "../../store/reducers/passwordSettingsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export const ChangeCharacterLength = (): JSX.Element => {
  const characterLength = useAppSelector(
    (state) => state.passwordSettings.characterLength
  );
  const dispatch = useAppDispatch();

  const handleChangeProgressBar = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(changeCharacterLength(Number(e.target.value)));
  };

  return (
    <ProgressBar
      min={0}
      max={20}
      step={1}
      value={characterLength}
      onChange={handleChangeProgressBar}
    />
  );
};
