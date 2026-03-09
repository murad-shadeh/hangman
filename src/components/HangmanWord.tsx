type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};
export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {/* we need to render each character individually */}
      {wordToGuess.split("").map((letter, index) => (
        // for each letter we need to put a certain style underneath it
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            // show letter if it is guessed otherwise hide it
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal
                  ? "darkred"
                  : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
