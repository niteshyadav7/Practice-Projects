const jsx = (
  <>
    <h1>Hello React</h1>
    <div>We are learning React by Coding Ninjas</div>
  </>
);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(jsx);
