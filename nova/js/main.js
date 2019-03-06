!function(e,t){function n(){t.body?t.body.style.fontSize=12*o+"px":t.addEventListener("DOMContentLoaded",n)}function d(){var e=i.clientWidth/10;i.style.fontSize=e+"px"}var i=t.documentElement,o=e.devicePixelRatio||1;if(n(),d(),e.addEventListener("resize",d),e.addEventListener("pageshow",function(e){e.persisted&&d()}),o>=2){var a=t.createElement("body"),s=t.createElement("div");s.style.border=".5px solid transparent",a.appendChild(s),i.appendChild(a),1===s.offsetHeight&&i.classList.add("hairlines"),i.removeChild(a)}}(window,document);

//
new Swiper('.page6-swiper-group', {
  navigation: {
    nextEl: '.p6-swiper-next',
    prevEl: '.p6-swiper-prev',
  },
  spaceBetween: 30,
  effect: 'fade',
  loop: true
});


 new Swiper('.group-container', {
  navigation: {
    nextEl: '.p2-swiper-next',
    prevEl: '.p2-swiper-prev',
  },
  spaceBetween: 30,
  effect: 'fade',
  loop: true
});

 new Swiper('.page4-group-container', {
  navigation: {
    nextEl: '.p4-swiper-next',
    prevEl: '.p4-swiper-prev',
  },
  spaceBetween: 30,
  effect: 'fade',
  loop: true
});

