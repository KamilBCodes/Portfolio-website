document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
      box.addEventListener('click', () => {
        const link = box.getAttribute('data-link');

        window.location.href = link;
      });
    });
  });
