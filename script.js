// const main = document.querySelector('.main');
// const but = document.querySelector('.but');
// const display = document.querySelector('.display');
// let String= "";
// let prime= document.querySelectorAll('.prime');
// Array.from(prime).forEach((prime) => {
//     prime.addEventListener('click', (e) => {

//         console.log(e.target)
//         String= String+ e.target.innerHTML;
//         document.querySelector('input').value=String;
//     })
    
// })
const main = document.querySelector('.main');
// const backspace = document.querySelector('.icon');
const display = document.querySelector('.display');

main.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('prime') && display.value.length < 10) {
    display.value += target.textContent;
  }else if (target.classList.contains('prime') && display.value.length >= 10) {
    alert("Maximum 10 digits allowed");
  }
});

// main.addEventListener("click", (e) => {
//     //console.log("click circle");
//   const target = e.target;
//   if (target.classList.contains('prime') && display.value.length < 10) {
//     display.value += target.textContent;
//   }else if (target.classList.contains('prime') && display.value.length >= 10) {
//     alert("Maximum 10 digits allowed");
//   }
// });


// but.addEventListener('click', () => {
//     if (display.value.length > 0) {
//       const text = display.value;
//       display.value = text.substring(0, text.length - 1);
//     } else {
//       alert("No digits left");
//     }
//   });
