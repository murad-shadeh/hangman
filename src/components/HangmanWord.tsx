export default function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t", "a", "n"];
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
      {word.split("").map((letter, index) => (
        // for each letter we need to put a certain style underneath it
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            // show letter if it is guessed otherwise hide it
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
