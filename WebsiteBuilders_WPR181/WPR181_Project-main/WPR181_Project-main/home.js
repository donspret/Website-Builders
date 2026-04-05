
document.addEventListener('DOMContentLoaded', function () {
  const texts = document.getElementsByClassName('PriceHeading');

  for (let i = 0; i < texts.length; i++) {
      texts[i].addEventListener('mouseover', function () {
          texts[i].style.color = 'white';
      });

      texts[i].addEventListener('mouseout', function () {
          texts[i].style.color = 'black';
      });
  }
});


const currentYear = new Date().getFullYear();
document.querySelector('#Copyright').textContent = `Copyright © ${currentYear} Website Builder - All Rights Reserved to their respective owners`;
