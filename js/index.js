// Mouseover
const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('mouseover', () => {
  funBus.style.color = 'red';
  funBus.style.transform = 'rotate(360deg)';
  funBus.style.transition = 'transform 2s';
});

// Keydown
const funBusBody = document.querySelector('body');
const funBusWelcome = document.querySelector('.intro h2')
document.addEventListener('keydown', () => {
  funBusWelcome.style.color = 'blue';
  funBusWelcome.style.fontWeight = 'bold';
  funBusWelcome.style.transform = 'rotate(180deg)'
  funBusWelcome.style.transition = 'transform 2s'
  funBusWelcome.style.transition = '2s'
});
document.addEventListener('keyup', () => {
  funBusWelcome.style.color = 'red';
  funBusWelcome.style.fontWeight = 'bold';
  funBusWelcome.style.transform = 'rotate(360deg)';
  funBusWelcome.style.transition = '2s'
});

// document.addEventListener('keydown', () => {
//   funBus.style.transition = 'margin-right 4s';
// });

// Wheel
// Drag / drop
// Load
// Focus
// Resize
// Scroll
// Select
// Dblclick