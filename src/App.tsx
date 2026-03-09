import { useCallback, useEffect, useState } from "react";
import words from "./data/wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
function App() {
  const getWord = () => {
    // get random word from the list of words no matter the number
    return words[Math.floor(Math.random() * words.length)];
  };
  const [wordToGuess, setWordToGuess] = useState<string>(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  );
  // we need to control the use and win state
  // we lose if we have 6 incorrect guesses because only 6 body parts can be shown
  const isLose = incorrectLetters.length >= 6;
  // we win if every letter clikced is included in the guessed letters
  // every function returns true if all iteration were true and false if at least one was false
  const isWin = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  // for the event handler we only want it to rerun when we what inside it changes that's why we need useCallback
  const addGuessedLetter = useCallback(
    (letter: string) => {
      // if the letter is already a guesses letter then do nothing or if we win or lose do nothing so the actual keyboard doesn't react
      if (guessedLetters.includes(letter) || isWin || isLose) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWin, isLose],
  );
  // finally we want to have new word to refresh ever time we click enter
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      // if it is, then get a new word
      e.preventDefault();
      // clear the array every time we're done
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [setWordToGuess]);
  // we can use useEffect for an event listener for keys on the actual keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      // completely ignore the key if not a letter a-z
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    // call the handler function whenever we press a key
    document.addEventListener("keypress", handler);
    // once we're done with the event listener we need to clean it up (memory leak prevention stuff)
    return () => {
      document.removeEventListener("keypress", handler);
    };
    // we added the guessed letter because we need useEffect if no dependancy will be callled once on the first render
    // that's why we added guessedLetters that on every change we have the nee version of useEffect rendered
  }, [addGuessedLetter]);
  console.log(wordToGuess);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWin && "You Win 🤩, refresh to play again"}
        {isLose && "You Lost 🙁, refresh to play again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      {/* we need to also to reveal the answer if we lost */}
      <HangmanWord
        reveal={isLose}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      {/* need the keyboard to take the grid style not fles display */}
      <div style={{ alignSelf: "stretch" }}>
        {" "}
        {/* we need to pass the letter that are active that we clicked along with the ones we didn't */}
        {/* we need to disable the keyboard is we lost or won */}
        <Keyboard
          disabled={isWin || isLose}
          activeLetter={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter),
          )}
          addGuessedLetter={addGuessedLetter}
          inactiveLetter={incorrectLetters}
        />
      </div>
    </div>
  );
}

export default App;
