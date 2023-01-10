// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const refs = {
      days: document.querySelector(`[data-days]`),
      hours: document.querySelector(`[data-hours]`),
      minutes: document.querySelector(`[data-minutes]`),
      seconds: document.querySelector(`[data-seconds]`),
      btnStart: document.querySelector(`[data-start]`),
      input: document.querySelector(`[datetime-picker]`)
}
console.log(refs);

const options = {
      counterTime: true,
      counterOclock: true,
      defaultDate: new Date(),
      minuteInc: 1,
      onClose(selectDates) {
            console.log(selectDates[0]);
      }

};
let interval;


flatpickr(refs.input, options);

const countTime = (() => {
      const countdown = new Date(refs.input.value) - new Date();
       if(countdown <=0){
            alert(`Please`);
            refs.btnStart.setAttribute(disabled, true);
       } else {
            refs.btnStart.removeAttribute(`disabled`)
       }

})