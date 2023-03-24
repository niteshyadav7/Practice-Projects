"use strict";

const click = document.getElementById("container");
// "https://restcountries.com/v3.1/name/pakistan"

////////////////////////////////////////////////////////////////////////////
const rendered = function (first) {
  const html = `
<div><img src="${first.flags.png}"/></div>
`;
  click.insertAdjacentHTML("beforeend", html);
};

// const apiCall = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [first] = JSON.parse(this.responseText);
//     console.log(first);
//     rendered(first);
//     const [nei] = first.borders[0];
//     // rendered(nei)
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/name/${nei}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       rendered(data2);
//     });
//   });
// };
// apiCall("china");

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response1) {
//       return response1.json();
//     })
//     .then(function (response2) {
//       console.log(response2[0].flags.svg);
//       // console.log(response2[0].flags.png);
//       rendered(response2[0]);
//     });
// };
// getCountryData("pakistan");



const whereAmI =async function(country){
 const res=await fetch (`https://restcountries.com/v3.1/name/${country}`)
 const data=await res.json();
 console.log(data);
}
whereAmI('finland')