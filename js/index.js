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
  loadingMessage.innerText = 'Page is loading...';
  htmlText.prepend(loadingMessage);

  // console.log(loadingMessage)

  setTimeout(() => {
    funBusBody.style.display = '';
    loadingMessage.style.display = 'none';
  },0);
});

// Focus
document.querySelectorAll('.nav-link').forEach(el => {
  el.addEventListener('focus', () => {
    el.style.color = 'red';
    el.style.fontWeight = 'bold';
    el.style.fontSize = '1.9rem';
    setTimeout(() => {
      el.style.fontWeight = 'normal';
      el.style.fontSize = '1.6rem';
      el.style.color = 'black';
    },2000);
  });
});

        // This was used to test a single link //
// const navLinks = document.querySelectorAll('.nav-link');
// navLinks.addEventListener('focus', () => {
//   navLinks.style.fontWeight = 'bold';
//   navLinks.style.fontSize = '1.9rem';

//   setTimeout(() => {
//     navLinks.style.fontWeight = 'normal';
//     navLinks.style.fontSize = '1.6rem';
//   },2000);
// });

// Resize
const newImg = document.querySelector('.intro img');
window.addEventListener('resize', () => {
  if(window.screenX > 1000){
    newImg.src = 'https://images.unsplash.com/photo-1525962898597-a4ae6402826e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  } else {
    newImg.src = 'img/fun-bus.jpg'
  }
});


// Scroll
// QUESTION //
//******* Need some explaination on total scroll calculation *****//
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY; 
  const totalScroll = document.documentElement.scrollHeight - window.innerHeight;

  if(scrolled === totalScroll){
    window.alert('Thanks for checking out my work!');
  }
});

// Select


// Dblclick