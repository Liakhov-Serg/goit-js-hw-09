// Import library
// import getRandomHexColor from './randomHexColor';

// Get button start/stop element

const refs = {
  startBtn:document.querySelector(`button[data-start]`),
  stopBtn:document.querySelector(`button[data-stop]`),
};
let timerId;
console.log(refs);

refs.startBtn.addEventListener('click', () => {
  refs.stopBtn.disabled = false;
  refs.startBtn.disabled = true;
  timerId = setInterval(() => {
    let color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);
});
refs.stopBtn.disabled = true;
refs.stopBtn.addEventListener('click', () => {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(timerId);
});

// const dataStartRef = document.querySelector('[data-start]');
// const dataStopRef = document.querySelector('[data-stop]');
// const bodyRef = document.querySelector('body');
// // values
// let timerId = null;

// // Add event listener start/stop on btn start/stop
// dataStartRef.addEventListener('click', onStart);
// dataStopRef.addEventListener('click', onStop);

// // Function start event listener
// function onStart() {
//   timerId = setInterval(getBgColor, 1000);

//   dataStartRef.toggleAttribute('disabled');
// }

// // Function stop event listener
// function onStop() {
//   clearInterval(timerId);

//   dataStartRef.removeAttribute('disabled');
// }

// // Function set random bg color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// function getBgColor() {
//   bodyRef.style.backgroundColor = getRandomHexColor();
// }



