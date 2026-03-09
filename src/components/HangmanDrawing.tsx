// we need to draw the hangman based on the typed letters
const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);
const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      backgroundColor: "black",
      position: "absolute",
      //   NEED IT BELOW THE HEAD 120PX
      top: "120px",
      right: "0",
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      //   make the rotation point the left end of the arm
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      //   need it at the bottom of the body 210px
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "210px",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);
type HangmanDrawingProps = {
  numberOfGuesses: number;
};
// they must be in the right order
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {/* // drawing the bottom lines */}
      {/* divs must stay in certain order */}
      {/* start at 0 and get all elements up to numberOfGuesses */}
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
          top: "0",
          right: "0",
          position: "absolute",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{ height: "10px", width: "250px", backgroundColor: "black" }}
      />
    </div>
  );
}
