const slides = document.querySelectorAll('.slide'); //Получаем все слайды
const prevBtn = document.querySelector('.button-left');
const nextBtn = document.querySelector('.button-right');
const slideCount = slides.length;
let slideIndex = 1;

nextBtn.addEventListener('click', function () { //Слушатель нажатия на кнопку "вперёд"
  slideIndex = (slideIndex + 1) % slideCount; //Высчитывание индекса следующего слайда
  updateSlider();
});

prevBtn.addEventListener('click', function () { //Слушатель нажатия на кнопку "назад"
  slideIndex = (slideIndex - 1 + slideCount) % slideCount; //Высчитывание индекса предыдущего слайда
  updateSlider();
});

function updateSlider() { //Функция для изменения классов всех слайдов при нажатии на кнопку
  const nextSlide = (slideIndex + 1) % slideCount;
  const prevSlide = (slideIndex - 1 + slideCount) % slideCount;

  document.querySelector('.slide-active').classList.remove("slide-active");
  slides[slideIndex].classList.add("slide-active");
  document.querySelector('.slide-next').classList.remove("slide-next");
  slides[nextSlide].classList.add("slide-next");
  document.querySelector('.slide-prev').classList.remove("slide-prev");
  slides[prevSlide].classList.add("slide-prev");
}

/* Форма обратной связи */

const todoInputName = document.querySelector("#todo-name-input");
const todoInputEmail = document.querySelector("#todo-email-input");
const todoInputPhone = document.querySelector("#todo-phone-input");
const todoInputMessage = document.querySelector("#todo-message-input");
const todoButton = document.querySelector("#todo-add-button");

todoButton.addEventListener("click", () => {
  console.log(todoInputName.value);
  console.log(todoInputEmail.value);
  console.log(todoInputPhone.value);
  console.log(todoInputMessage.value);
});
