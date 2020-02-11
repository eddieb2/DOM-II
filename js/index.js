// Mouseover
const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('mouseover', () => {
  funBus.style.color = 'red';
  funBus.style.transform = 'rotate(360deg)';
  funBus.style.transition = 'transform 2s';
});

// Keydown
const funBusWelcome = document.querySelector('.intro h2')
document.addEventListener('keydown', () => {
  funBusWelcome.style.color = 'blue';
  funBusWelcome.style.fontWeight = 'bold';
  funBusWelcome.style.transform = 'rotate(180deg)';
  funBusWelcome.style.transition = 'transform 2s';
  funBusWelcome.style.transition = '2s';
});
document.addEventListener('keyup', () => {
  funBusWelcome.style.color = 'red';
  funBusWelcome.style.fontWeight = 'bold';
  funBusWelcome.style.transform = 'rotate(360deg)';
  funBusWelcome.style.transition = '2s';
});

// Wheel
document.querySelectorAll('.text-content h2').forEach(el => {
  el.addEventListener('wheel', (event) => {
    event.preventDefault();
    el.style.color = 'red';
    el.style.textAlign = 'center';
    el.style.transform = 'scale(1.5)';
  })
})

// Drag / drop

// Load
const funBusBody = document.querySelector('body');
window.addEventListener('load', (event) => {
  // Makes the screen go blank //
  funBusBody.style.display = 'none';

  // Create the new element & text we want to display //
  let loadingMessage = document.createElement('h1');
  let htmlText = document.querySelector('html');
  loadingMessage.innerText = 'Page is loading..';
  htmlText.prepend(loadingMessage);

  // console.log(loadingMessage)

  setTimeout(() => {
    funBusBody.style.display = '';
    loadingMessage.style.display = 'none';
  },1000);
});

// Focus

// Resize
// Scroll
// Select
// Dblclick