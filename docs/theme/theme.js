const $body = document.body;
const $themeBtns = document.querySelectorAll('.js-theme-button');

$themeBtns[0].setAttribute('disabled', true);

$themeBtns.forEach((ele) => {
  const element = ele;

  element.onclick = function onClick(e) {
    const selectedName = e.target.value;

    $themeBtns.forEach((btn) => {
      const themeName = btn.value;
      if (themeName === selectedName) return;
      $body.classList.remove(`js-theme-${themeName}`);
      ele.removeAttribute('disabled');
    });

    $body.classList.add(`js-theme-${selectedName}`);
    ele.setAttribute('disabled', true);
  };
});
