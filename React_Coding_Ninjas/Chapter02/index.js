// const jsx = (
//   <>
//     <h1>Hello React</h1>
//     <div>We are learning React by Coding Ninjas</div>
//   </>
// );

// const el = document.getElementById("root");
// const root = ReactDOM.createRoot(el);
// root.render(jsx);

const jsxReact = (
  <>
    <h1>About React</h1>
    <h3>React is the javaScript library.</h3>
    <ul>
      <li>React is mainly used to make Single Page Applications.</li>
      <li>React is Composable in Nature.</li>
      <li>React is Declartive in Nature.</li>
      <li>React uses the virtual DOM</li>
    </ul>
  </>
);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(jsxReact);
