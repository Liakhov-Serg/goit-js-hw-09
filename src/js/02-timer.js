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
}
console.log(refs);