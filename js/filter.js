const buttons = document.querySelectorAll('.portfolio-filter__button');
const items = document.querySelectorAll('.portfolio-card__item');
const container = document.querySelector('.portfolio-card__items');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    items.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
