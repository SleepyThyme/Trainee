document.addEventListener('DOMContentLoaded', function () {
  createStars();
  let hidden = true;
  let night = true;
  const clock = document.getElementById('clock');
  const rock = document.getElementById('rockId');

  clock.addEventListener('click', function (event) {
    event.stopPropagation();
    if (hidden) {
      clock.classList.toggle('hidden');
      hidden = false;

    } else if (night) {
      switchMorning();
      night = false;

      setTimeout(() => {
        clock.classList.toggle('hidden');
        rock.classList.toggle('hidden');
        timeToggle();
        hidden = true;
      }, 500);

    } else if (!night) {
      switchNight();
      night = true;

      setTimeout(() => {
        clock.classList.toggle('hidden');
        rock.classList.toggle('hidden');
        timeToggle();
        hidden = true;
      }, 500);
    }
  });

  document.addEventListener('click', function () {
    let firstClick = true;
    if (firstClick) {
      backgroundTransition();
      firstClick = false;
      const text = document.getElementById('beginning');
      text.style.opacity = '0';
    }
    if (!hidden) {
      clock.classList.toggle('hidden');
      hidden = true;
    }
  });
});

function createStars() {
  const numberOfStars = 150;

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
  showElements();
}

function switchMorning() {
  const arrowHead = document.getElementById('head');
  const arrowBody = document.getElementById('hand');
  arrowHead.classList.toggle('morning');
  arrowBody.classList.toggle('morning');
  document.body.classList.add('morning');
  document.body.classList.remove('night');
}

function switchNight() {
  const arrowHead = document.getElementById('head');
  const arrowBody = document.getElementById('hand');
  arrowHead.classList.toggle('morning');
  arrowBody.classList.toggle('morning');
  setTimeout(() => {
    createStars();
    document.body.classList.add('night');
    document.body.classList.remove('morning');
  }, 500);
}

function showElements() {
  var elements = document.getElementsByClassName('elements');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.classList.add('opacity');
  }
}

function timeToggle() {
  var elements = document.getElementsByClassName('time');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.classList.toggle('hidden');
  }
}
