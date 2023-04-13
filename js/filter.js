const buttons = document.querySelectorAll('.portfolio-filter__button');
const items = document.querySelectorAll('.portfolio-card__item');
const container = document.querySelector('.portfolio-card__items');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    items.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        // item.style.display = 'block';
        item.classList.remove('hidden');
        item.style.opacity = 1;
        item.style.transition = 'opacity 0.25s ease-in-out, height 0.25s ease-in-out';
      } else {
        // item.style.display = 'none';
        item.classList.add('hidden');
        item.style.opacity = 0;
        item.style.transition = 'opacity 0.25s ease-in-out, height 0.25s ease-in-out';
      }
    });
  });
});
