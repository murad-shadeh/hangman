import { useState } from "react";
import words from "./data/wordList.json";
function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    // get random word from the list of words no matter the number
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  console.log(wordToGuess);
  return <h1>Hello, Hangman!</h1>;
}

export default App;
