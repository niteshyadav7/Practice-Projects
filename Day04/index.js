'use strict';


// JavaScript is the High-level,prototype based object-oriented,Multi-paradigmn,Just in time compiled,dynamic,single-threaded,garbage-collected programming languages with first class function and non blocking event loop of cunncurrency modal.

// const names='jonas'
// const first=()=>{
//     let a=1
//     const b=second(7,9);
//     a+=b;
//     return a;
// }
// function second(x,y){
//     var c=2;
//     return c;
// }
// const x =first();
// console.log(x);


// console.log(this);

// function App(){
//    var x=23;
//    console.log(this);
//     function y(){
//        var y=43; 
//     //    console.log(y);
//     console.log(this);
//     }
// }
// App();


function app(){
    console.log(this);
}
app();
const appp=()=>console.log(this);
appp()