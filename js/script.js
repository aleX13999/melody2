$(document).ready(function () {
  var currentFloor = 2
  var counterUp = $('.counter-up') //Кнопка вверх
  var counterDown = $('.counter-down') //Кнопка вниз
  var floorPath = $('.home-image path') //Выбранный этаж
  floorPath.on('mouseover', function () {
    //При наведении
    currentFloor = $(this).attr('data-floor') //получаем номер этажа
    $('.counter').text(currentFloor) //Записываем в счетчик
    floorPath.removeClass('current-floor') //удаляем класс, чтобы убрать подсветку
  })

  //при нажатии на кнопку вверх
  counterUp.on('click', function () {
    //проверка на верхний этаж
    if (currentFloor < 18) {
      currentFloor++
      //сохраняем формат числа с 0 вначале
      var usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2, //минимальное кол-во знаков
        useGrouping: false,
      })
      $('.counter').text(usCurrentFloor)
      floorPath.removeClass('current-floor') //удаляем класс, чтобы убрать подсветку
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor') //добавляем класс текущему этажу
    }
  })

  //при нажатии на кнопку вниз
  counterDown.on('click', function () {
    //проверка на нижний этаж
    if (currentFloor > 02) {
      currentFloor--
      var usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2, //минимальное кол-во знаков
        useGrouping: false,
      })
      $('.counter').text(usCurrentFloor)
      $('.home-image path').removeClass('current-floor') //удаляем класс, чтобы убрать подсветку
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor') //добавляем класс текущему этажу
    }
  })
})
