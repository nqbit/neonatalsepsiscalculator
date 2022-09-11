// reload.addEventListener('click', () => {
//   log.textContent ='';
//   setTimeout(() => {
//       window.location.reload(true);
//   }, 200);
// });


function submitLoginForm(event){
  event.preventDefault();

  console.log(event.target);
  console.log(event.target['name'].value);
  console.log(event.target['password'].value);
}

// window.addEventListener('load', (event) => {
//   const calculate = document.querySelector('#MainContent_InfectionProbabilityCalculations_btnCalc');
//   const clear = document.querySelector('#MainContent_InfectionProbabilityCalculations_btnClear');
//   const form = document.querySelector('#ctl01');

//   form.addEventListener('submit', (event) => {

//   });

//   // calculate.addEventListener('click', () => {
//   //   console.log("Calculate: " + form.getAttribute(""));
//   // });


//   clear.addEventListener('click', () => {
//     console.log("Clear");
//   });

//   console.log('load\n');
// });