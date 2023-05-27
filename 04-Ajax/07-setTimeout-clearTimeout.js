
// setTimeout(function () {
//   console.log('Hello from callback');
// }, 2000);

// console.log('Hello from the top-level code');

// setTimeout(() => {
//   document.querySelector('h1').textContent = 'Hello from callback';
// }, 3000);

function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback';
}

// setTimeout(changeText, 3000);
const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  clearTimeout(timerId);
  console.log('Timer Cancelled');
});