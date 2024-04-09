


const $top_btn = document.querySelector("#top_btn");

  $top_btn.onclick = () => {
    window.scrollTo({ top:0, behavior: "smooth"});
  }

  
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();

    const parentItem = this.parentNode;

    parentItem.classList.toggle('hasChild');

    const submenu = parentItem.querySelector('.submenu');
      if (submenu) {
        submenu.style.display = parentItem.classList.contains('hasChild') ? 'block' : 'none';
      }
      claseOtherAccordionItems(parentItem);
    });
  });

  function claseOtherAccordionItems(currentItem) {
    buttons.forEach(button => {
      const parentItem = button.parentNode;
      if (parentItem !== currentItem) {
        parentItem.classList.remove("hasChild");

        const submenu = parentItem.querySelector('.submenu');
        if (submenu) {
          submenu.style.display = 'none';
        }
      }
    });
  }
});