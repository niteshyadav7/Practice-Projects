/*
const heading =React.createElement('img',{src:"./logo192.png"})
const el =document.getElementById('root')
const root=ReactDOM.createRoot(el)

root.render(heading )
*/

// const jsx = (
//   <>
//     <h1>Hello world!</h1>
//     <p>This is created by Me</p>
//   </>
// );

// const el = document.getElementById("root");
// const root = ReactDOM.createRoot(el);

// root.render(jsx);

const itemsSold = [
  { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
  { id: 2, name: "iPad Pro", price: 800, qty: 18 },
  { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
  { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
  { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 },
];
const newSum =itemsSold.reduce(function(acc,curr){
 return acc+curr.price; 
},0)
console.log(newSum);