import { PasswordIncludes } from "../interfaces/PasswordIncludes";
import { letters, symbols } from "./variablesPassword";

export const passwordGeneration = (
  characterLength: number,
  passwordIncludes: PasswordIncludes
): string => {
  const password = [];
  while (characterLength) {
    const randomIcnlude = generateRandomInclude();
    if (randomIcnlude === 0 && passwordIncludes.lowerCaseLetters) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      password.push(letters[randomIndex]);
      characterLength--;
    } else if (randomIcnlude === 1 && passwordIncludes.upperCaseLetters) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      password.push(letters[randomIndex].toUpperCase());
      characterLength--;
    } else if (randomIcnlude === 2 && passwordIncludes.numbers) {
      const randomNumber = Math.floor(Math.random() * 10);
      password.push(randomNumber);
      characterLength--;
    } else if (randomIcnlude === 3 && passwordIncludes.symbols) {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      password.push(symbols[randomIndex]);
      characterLength--;
    }
  }

  return password.join("");
};

const generateRandomInclude = (): number => Math.floor(Math.random() * 4);
