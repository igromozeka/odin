// Выпадающее меню

//Создаём объект меню (контейнер)
var menu = document.createElement("nav");
menu.textContent = "Выпадающее меню ▼";
// Вставляем новый элемент в конец Body
document.body.appendChild(menu);

//Создаём невидимый список меню
var menuItems = document.createElement("ul");
menuItems.style.listStyleType = "none";
menuItems.style.display = "none";
//Вставляем список меню в контейнер
menu.appendChild(menuItems);

// Создаём 1 пункт меню
var menuItem1 = document.createElement("li");
menuItem1.textContent = "Пункт 1";
// Вставляем в список меню 1 пункт
menuItems.appendChild(menuItem1);

var menuItem2 = document.createElement("li");
menuItem2.textContent = "Пункт 2";
menuItems.appendChild(menuItem2);

var menuItem3 = document.createElement("li");
menuItem3.textContent = "Пункт 3";
menuItems.appendChild(menuItem3);

// обработка отображение меню по клику
menu.addEventListener('click', function() {
    if (menuItems.style.display == "none") {
        menuItems.style.display = "block";
    } else {
        menuItems.style.display = "none";
    }
  });




















// слайдер с изображениями

// контейнер слайдера
var slider = document.createElement("aside");
slider.textContent = "Слайдер";
slider.className = "slider";
slider.name = "slider";
slider.style.width = "680px";
slider.style.height = "400px";
document.body.appendChild(slider);
slider.insertAdjacentHTML('beforeend', '<div class="slider-images"><img src="00.jpg" alt="Изображение 1"><img src="01.jpg" alt="Изображение 2"><img src="02.jpg" alt="Изображение 3"><img src="03.jpg" alt="Изображение 4"><img src="04.jpg" alt="Изображение 5"></div>');
slider.insertAdjacentHTML('beforeend','<button class="slider-prev">Назад</button><button class="slider-next">Вперед</button>');



// Создаем стили для слайдера
var style = document.createElement('style');
document.head.appendChild(style);
var sheet = style.sheet;
sheet.insertRule('.slider { display: block; max-size: 680px; position: relative; width: 100%; height: 300px; overflow: hidden; }', 0);
sheet.insertRule('.slider-images { position: absolute; top: 0; left: 0; width: 500%; height: 100%; display: flex; transition: transform 0.5s ease-in-out; }', 1);
sheet.insertRule('.slider-images img { width: 33,333%; height: 100%; object-fit: cover; }', 2);
sheet.insertRule('.slider-prev, .slider-next { position: absolute; top: 50%; transform: translateY(-50%); width: 50px; height: 50px; background-color: #fff; border: none; cursor: pointer; z-index: 1; }', 3);
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




















// Форма обратной связи 1
// Создаем и выводим форму
var form1 = document.createElement("form");
form1.name = "form1";
document.body.appendChild(form1);
// Создаем поле имя и метку к нему
var labelNameForm1 = document.createElement("label");
var inputNameForm1 = document.createElement("input");
//задаем параметры поля имя 
inputNameForm1.id = "inputNameForm1";
inputNameForm1.placeholder = "Имя";
inputNameForm1.required = true;
//задаем параметры поля метки к полю имя
labelNameForm1.htmlFor = "inputNameForm1";
labelNameForm1.textContent = "Имя: ";
//задаем параметры поля сообщение
var inputMessageForm1 = document.createElement("textarea");
inputMessageForm1.placeholder = "Сообщение";
//задаем параметры кнопки отправить
var buttonNameForm1 = document.createElement("button");
buttonNameForm1.type = "submit";
buttonNameForm1.textContent = "Отправить";
//добавляем поля в форму (вывод)
document.form1.appendChild(labelNameForm1);
document.form1.appendChild(inputNameForm1);
document.form1.appendChild(inputMessageForm1);
document.form1.appendChild(buttonNameForm1);


// Форма обратной связи 2
// Создаем и выводим форму
var form2 = document.createElement("form");
form2.name = "form2";
document.body.appendChild(form2);
// Создаем поле email и метку к нему
var labelEmailForm2 = document.createElement("label");
var inputEmailForm2 = document.createElement("input");
//задаем параметры поля email 
inputEmailForm2.id = "inputEmailForm2";
inputEmailForm2.placeholder = "Email";
inputEmailForm2.type = "email";
inputEmailForm2.required = true;
//задаем параметры поля метки к полю email
labelEmailForm2.htmlFor = "inputEmailForm2";
labelEmailForm2.textContent = "Email: ";
//создаем и задаем параметры поля сообщение
var inputMessageForm2 = document.createElement("textarea");
inputMessageForm2.placeholder = "Сообщение";
//создаем и задаем параметры кнопки отправить
var buttonEmailForm2 = document.createElement("button");
buttonEmailForm2.type = "submit";
buttonEmailForm2.textContent = "Отправить";
//добавляем поля в форму (вывод)
document.form2.appendChild(labelEmailForm2);
document.form2.appendChild(inputEmailForm2);
document.form2.appendChild(inputMessageForm2);
document.form2.appendChild(buttonEmailForm2);