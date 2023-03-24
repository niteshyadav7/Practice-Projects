// const App=()=>{
//     const arr=[0,1,2,3,4,5,6,7,8]
//    return (
//     <>
//     {arr.filter((n)=>n%2===0).map((n)=><h3>{n}</h3>)}
//     </>
//    )
// }

// const element = document.getElementById("root");
// const root = ReactDOM.createRoot(element);
// root.render(<App />);

// const arr1 = [2, 3, 4, 5, 6];

// const resMap = (num, index) => {
//   return num * 2;
// };
// const resFilter=(num)=>{
//     return num%2===0
// }

// const newArr1 = arr1.map(resMap);
// const newArr2=arr1.filter(resFilter)

// console.log(arr1);
// console.log(newArr1);
// console.log(newArr2);

// const App = () => {
//   const arr = [1, 2, 3, 4, 5, 6, 7];
//   //   const rendered = arr.map((num, index) => <h3>{num * 2}</h3>);
//   const rendered = arr
//     .filter((num) => num % 2 == 0)
//     .map((num) => <h3>{num}</h3>);
//   return (
//     <>
//       {/* {arr.map((num,index) => (
//         <h3 key={index}>{num * 2}</h3>
//       ))} */}
//       {rendered}
//     </>
//   );
// };
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

