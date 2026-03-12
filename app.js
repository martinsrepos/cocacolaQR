const screens = Array.from(document.querySelectorAll('.screen'));

function showScreen(index) {
  screens.forEach((screen, i) => {
    screen.classList.toggle('is-active', i === index);
  });
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-target]');
  if (!target) return;
  const index = Number(target.dataset.target);
  if (!Number.isNaN(index)) showScreen(index);
});

showScreen(0);
