$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        startPosition: 1,
        items: 3,
    });
  });

  // Выберем кнопку и форму
const $button = document.querySelector('');
const $form = document.querySelector('');
      
// При клике на кнопку
$button.addEventListener('click', e => {
  // Прокрутим страницу к форме 
  $form.scrollIntoView({ 
    block: 'nearest', // к ближайшей границе экрана
    behavior: 'smooth', // и плавно 
  });
});