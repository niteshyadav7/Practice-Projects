let score = 0;
let wicket = 0;
let scoreWise = [];

const scoreAdd = (num) => {
  if (wicket < 10) {
    scoreWise.push(num);
    score += num;
    root.render(<App />);
  }
};

const wicketAdd = () => {
  if (wicket < 10) {
    scoreWise.push("w");
    wicket++;
    root.render(<App />);
  }
};

const Button = () => {
  return (
    <div>
      <button onClick={() => scoreAdd(0)}>0</button>
      <button onClick={() => scoreAdd(1)}>1</button>
      <button onClick={() => scoreAdd(2)}>2</button>
      <button onClick={() => scoreAdd(3)}>3</button>
      <button onClick={() => scoreAdd(4)}>4</button>
      <button onClick={() => scoreAdd(5)}>5</button>
      <button onClick={() => scoreAdd(6)}>6</button>
      <button onClick={wicketAdd}>wicket</button>
    </div>
  );
};

const BallWiseRes = () => (
  <div>
    <hr />
    {scoreWise.map((res, i) => (
      <>
        {i % 6 === 0 ? <br /> : null}
        <span key={i}>
          {res === 0 ? (
            <strong>.</strong>
          ) : res === "W" ? (
            <span style={{ color: "#f00" }}>{res}</span>
          ) : (
            <span style={{ color: "#00ff" }}>{res}</span>
          )}
        </span>
      </>
    ))}
  </div>
);

const handleSubmit =(event)=>{
  event.preventDefault();
}

const Form =()=>{
  return(
  <form onSubmit={handleSubmit}>
    <input />
    <input />
    <button>Submit</button>
  </form>
  )
}
function App() {
  return (
    <>
      <h1>Score Kepper</h1>
      <h3>
        Score:{score}/{wicket}
      </h3>
      <Button />
      <BallWiseRes />
      <Form />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
