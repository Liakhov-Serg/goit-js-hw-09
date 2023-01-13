import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
let selectedTime = null;

const refs = {
  inputDate: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  // fieldEl: document.querySelectorAll('.field'),
};
// Start
refs.startBtn.disabled = true;
// Слухач на форму
function pad(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}
console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
      selectedDates[0] = new Date();
    } else {
      refs.startBtn.disabled = false;
      selectedTime = selectedDates[0];
      console.log(selectedTime);
    }
    console.log(selectedDates[0]);
  },
};
// Підключ календар
flatpickr(refs.inputDate, options);
// Слухач на кнопку Start
refs.startBtn.addEventListener('click', () => {
  startTimer();
});
// Запуск таймер
function startTimer() {
  setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = selectedTime - currentTime;
    const time = convertMs(deltaTime);
    updateClockFace(time);
  }, 1000);
  refs.startBtn.disabled = true;
  return;
}

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}
// Стиль годинник

function startTimer() {
  let timeinterval = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = selectedTime - currentTime;
        const time = convertMs(deltaTime);
        updateClockFace(time);
        if (deltaTime <= 1000) {
          clearInterval(timeinterval);
        }
      }, 1000);
      refs.startBtn.disabled = true;
    }