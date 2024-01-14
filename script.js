document.addEventListener('DOMContentLoaded', function () {
  createStars();
  setTimeout(function () {
  }, 5000);
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
    star.style.animationDelay = `-${delay}s`;

    document.body.appendChild(star);
  }
}

function stopStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => star.remove());
  document.body.classList.add('fade-out');
  document.querySelector('footer').classList.add('fade-in');
}

document.addEventListener('click', stopStars);