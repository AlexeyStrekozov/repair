ymaps.ready(function () {
 var myMap = new ymaps.Map('map', {
  center: [49.765565, 73.154326],
  zoom: 17
 }, {
   searchControlProvider: 'yandex#search'
  }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),



  myPlacemarkWithContent = new ymaps.Placemark([49.765565, 73.154326], {
   hintContent: 'Собственный значок метки с контентом',
   balloonContent: 'Го к нам ',
   
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#imageWithContent',
    // Своё изображение иконки метки.
    iconImageHref: 'img/pin.png',
    // Размеры метки.
    iconImageSize: [60, 60],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [2, -90],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [15, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout
   });
  myMap.behaviors.disable('scrollZoom');
 myMap.geoObjects
  .add(myPlacemarkWithContent);
});