// слайдер с изображениями

// контейнер слайдера
let slider = document.createElement("aside");
slider.textContent = "Слайдер";
slider.className = "slider";
slider.name = "slider";
slider.style.width = "680px";
slider.style.height = "400px";
document.body.appendChild(slider);
slider.insertAdjacentHTML('beforeend', '<div class="slider-images"><img src="img/00.jpg" alt="Изображение 1"><img src="img/01.jpg" alt="Изображение 2"><img src="img/02.jpg" alt="Изображение 3"><img src="img/03.jpg" alt="Изображение 4"><img src="img/04.jpg" alt="Изображение 5"></div>');
slider.insertAdjacentHTML('beforeend','<button class="slider-prev">Назад</button><button class="slider-next">Вперед</button>');



// Создаем стили для слайдера
let style = document.createElement('style');
document.head.appendChild(style);
let sheet = style.sheet;
sheet.insertRule('.slider { display: block; max-size: 680px; position: relative; width: 100%; height: 300px; overflow: hidden; }', 0);
sheet.insertRule('.slider-images { position: absolute; top: 0; left: 0; width: 500%; height: 100%; display: flex; transition: transform 0.5s ease-in-out; }', 1);
sheet.insertRule('.slider-images img { width: 33,333%; height: 100%; object-fit: cover; }', 2);
sheet.insertRule('.slider-prev, .slider-next { position: absolute; top: 50%; transform: translateY(-50%); width: 70px; height: 50px; background-color: #fff; border: none; cursor: pointer; z-index: 1; }', 3);
sheet.insertRule('.slider-prev { left: 0; }', 4);
sheet.insertRule('.slider-next { right: 0; }', 5);


//Обработка кнопок

const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
let counter = 0;

prevButton.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = 4;
    }
    sliderImages.style.transform = `translateX(-${counter * 20}%`;
    });

nextButton.addEventListener('click', () => {
    counter++;
    if (counter > 4) {
        counter = 0;
    }
    sliderImages.style.transform = `translateX(-${counter * 20}%`;
    });