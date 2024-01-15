document.addEventListener('DOMContentLoaded', function () {
  createStars();
  document.addEventListener('click', stopStars);
  let hidden = true;
  const clock = document.getElementById('clock')
  clock.addEventListener('click', function() {
    if (hidden) {
      clock.classList.toggle('hidden');
      hidden = false;
    } else {
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
    star.style.animationDelay = `-${delay}s`;

    document.body.appendChild(star);
  }
}

function stopStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => star.remove());
  document.body.classList.add('fade-out');
  document.getElementById('containersId').classList.add('opacity');
  document.getElementById('navId').classList.add('opacity');
  document.getElementById('clock').classList.add('opacity');
  document.querySelector('footer').classList.add('opacity');
}

