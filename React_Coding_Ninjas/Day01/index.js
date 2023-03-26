/** 
let show = false;
function setShow() {
  show = !show;
  rootElement.render(<App />);
}

const App = () => {
  return (
    <>
      <h1>Hello Ninjas!</h1>
      <button onClick={setShow}>
        {show ? "Hide Content" : "Show Content"}
      </button>
      {show && <p>You are rock!</p>}
    </>
  );
};
*/

let score = 0;
let wicket = 0;
let ballWiseRes = [];

function addScore(num) {
  if (wicket < 10) {
    ballWiseRes.push(num);
    score = score + num;
    rootElement.render(<App />);
    console.log(ballWiseRes);
  }
}

function addWicket() {
  if (wicket < 10) {
    ballWiseRes.push("W");
    wicket++;
    rootElement.render(<App />);
    console.log(ballWiseRes);
  }
}

const App = () => {
  return (
    <>
      <h1>Score Kepper</h1>
      <h3>
        Score:{score}/{wicket}
      </h3>
      <button onClick={() => addScore(1)}>1</button>
      <button onClick={() => addScore(2)}>2</button>
      <button onClick={() => addScore(3)}>3</button>
      <button onClick={() => addScore(4)}>4</button>
      <button onClick={() => addScore(5)}>5</button>
      <button onClick={() => addScore(6)}>6</button>
      <button onClick={addWicket}>wicket</button>
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
