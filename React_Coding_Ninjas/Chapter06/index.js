// const App1 = function () {
//   const arr1 = [1, 2, 3];
//   const rend = arr1.map((value, key) => {
//     return <div>{value * 2}</div>;
//   });
//   return (<>
//   {rend}</>);
// };
// const App2 = function () {
//   const arr1 = [1, 2, 3];
//   const rend = arr1.map((value, key) => {
//     return <div>{value * 3}</div>;
//   });
//   return (<>
//   {rend}</>);
// };
// const App=function(){
//     let showCase=false;
//     if(showCase){
//         return App1
//     }
//     return (
//         <>
//         {/* <App1 /> */}
//         <App2 />
//         </>
//     )
// }

function App() {
  const loggedIn=true;
//   const loggedIn = prompt();
  const firstName = "Nitesh";
  const lastName = "Yadav";
  return (
    <>
      <h1>Hello {loggedIn ? firstName && lastName : "User"}!</h1>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
