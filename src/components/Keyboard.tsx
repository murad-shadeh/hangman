import styles from "./Keyboard.module.css";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
type KeyboardProps = {
  activeLetter: string[];
  addGuessedLetter: (letter: string) => void;
  inactiveLetter: string[];
  disabled?: boolean;
};

export default function Keyboard({
  activeLetter,
  addGuessedLetter,
  inactiveLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(50px,1fr))",
        gap: "0.5rem",
      }}
    >
      {/* to do the styles on the buttons we used style so we will use class names using css modules
      since we can't hover affects and stuff */}
      {KEYS.map((key) => {
        // we wanna determine if the button is active or inactive
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetter.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : isInactive ? styles.inactive : ""}`}
            key={key}
            // if it's active disbale if it's inactive and if we win or lose disable the keyboard
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
