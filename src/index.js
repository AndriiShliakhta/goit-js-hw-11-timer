import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stoptBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
let startInterval = null;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const newColor = () => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}

const startCallback = () => {
    startInterval = setInterval(newColor, 1000);
    startBtn.disabled = true;
}
const stopCallback = () => {
    clearInterval(startInterval);
    startBtn.disabled = false;
}


startBtn.addEventListener('click', startCallback);
stoptBtn.addEventListener('click', stopCallback);