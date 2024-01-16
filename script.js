document.addEventListener('DOMContentLoaded', function () {
  createStars();
  document.addEventListener('click', backgroundTransition);
  let hidden = true;
  let night = true;
  const clock = document.getElementById('clock');
  const arrow = document.getElementById('hand');

  clock.addEventListener('click', function (event) {
    event.stopPropagation();
    if (hidden) {
      clock.classList.toggle('hidden');
      hidden = false;
    } else if (night) {
      switchMorning();
      arrow.classList.toggle('morning');
      night = false;
      setTimeout(() => {
        clock.classList.toggle('hidden');
        hidden = true;
      }, 500);
    } else if (!night) {
      switchNight();
      arrow.classList.toggle('morning');
      night = true;
      setTimeout(() => {
        clock.classList.toggle('hidden');
        hidden = true;
      }, 500);
    }
  });

  document.addEventListener('click', function () {
    if (!hidden) {
      clock.classList.toggle('hidden');
      hidden = true;
    }
  });
});

function createStars() {
  const numberOfStars = 125;
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * document.documentElement.scrollHeight;
    const delay = Math.random() * 6;
    star.style.left = `${posX}px`;
    star.style.top = `${posY}px`;
    setTimeout(() => {
      star.style.animation = 'fadeIn 2s forwards, twinkling 2s infinite';
      document.body.appendChild(star);
    }, delay * 1000);
  }
}

function backgroundTransition() {
  document.body.classList.add('fade-background');
  document.getElementById('containersId').classList.add('opacity');
  document.getElementById('navId').classList.add('opacity');
  document.getElementById('clock').classList.add('opacity');
  document.querySelector('footer').classList.add('opacity');
}

function switchMorning() {
  /*
  setTimeout(() => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => star.remove());
  }, 500);
  */
  document.body.classList.add('morning');
  document.body.classList.remove('night');
}

function switchNight() {
  setTimeout(() => {
    createStars();
  }, 500);
  document.body.classList.add('night');
  document.body.classList.remove('morning');
}

