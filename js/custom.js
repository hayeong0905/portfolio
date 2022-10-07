var $menuEle = $('dt'); // 탭메뉴를 변수에 지정
$menuEle.click(function() { // 탭메뉴 클릭 이벤트
    $('dt').removeClass('on');
    $(this).addClass('on')
    $('dd').addClass('hidden');
    $(this).next().removeClass('hidden');
})

var swiper = new Swiper('.swiper-container1', {
  direction: 'horizontal',
  loop: true,
  navigation : {
  nextEl : '.swiper-button-next',
  prevEl : '.swiper-button-prev',
},
});
var swiper = new Swiper('.swiper-container2', {
  direction: 'horizontal',
  loop: true,
  navigation : {
  nextEl : '.swiper-button-next',
  prevEl : '.swiper-button-prev',
},
});
var swiper = new Swiper('.swiper-container3', {
  direction: 'horizontal',
  loop: true,
  navigation : {
  nextEl : '.swiper-button-next',
  prevEl : '.swiper-button-prev',
},
});

