let score = 0;
const wicket = 0;
const addOne = () => {
  score++;
  rootElement.render(<App />);
  console.log(score);
};
const App = () => {
  return (
    <>
      <h1>Score Kepper</h1>
      <h3>
        Score:{score}/{wicket}
      </h3>
      <div>
        <button onClick={addOne}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>wicket</button>
      </div>
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
