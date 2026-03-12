const screens = Array.from(document.querySelectorAll('.screen'));

function clearConfetti(screen) {
  const confetti = screen.querySelector('.confetti');
  if (!confetti) return;
  confetti.innerHTML = '';
}

function spawnConfetti(screen) {
  const confetti = screen.querySelector('.confetti');
  if (!confetti) return;
  confetti.innerHTML = '';
  const colors = ['#f40000', '#ff6a3d', '#ffc07a', '#f7e1d4'];
  for (let i = 0; i < 24; i += 1) {
    const piece = document.createElement('span');
    const fromLeft = i % 2 === 0;
    const x = fromLeft ? Math.random() * 12 : 88 + Math.random() * 12;
    piece.style.left = `${x}%`;
    piece.style.top = `${Math.random() * 20}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    confetti.appendChild(piece);
  }
}

function showScreen(index) {
  screens.forEach((screen, i) => {
    screen.classList.toggle('is-active', i === index);
    if (i === index && (screen.id === 'screen-1' || screen.id === 'screen-4')) {
      spawnConfetti(screen);
    } else {
      clearConfetti(screen);
    }
  });
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-target]');
  if (!target) return;
  const index = Number(target.dataset.target);
  if (!Number.isNaN(index)) showScreen(index);
});

showScreen(0);
