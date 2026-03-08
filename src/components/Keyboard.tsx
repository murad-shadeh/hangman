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

export default function Keyboard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: "0.5rem",
      }}
    >
      {/* to do the styles on the buttons we used style so we will use class names using css modules
      since we can't hover affects and stuff */}
      {KEYS.map((key) => {
        return (
          <button className={`${styles.btn}`} key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
}
