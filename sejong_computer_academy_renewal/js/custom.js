// swiper1
new Swiper('.swiper1,.swiper2', {
	pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
	navigation : { // 네비게이션 설정
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
});

// $('ul.gnb li').click(function(e){
// 	e.preventDefault();

// 	// ht에 window 높이값 저장
// 	let ht=$(window).height();
// 	// 변수 i에 현재 클릭한 li 순서 값을 저장
// 	let i=$(this).index();
// 	// 브라우저의 높이값*순서값=현재 박스의 위치값
// 	let nowTop=i*ht;
// 	// console.log(i);
// 	// 해당 스크롤의 위치 값으로 문서를 이동
// 	$('html,body').stop().animate({scrollTop : nowTop},1400);
// });

// // swiper2
// new Swiper('.swiper2', {
// 	loop : true, // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
// 	pagination : {
// 		el : '.swiper-pagination',
// 	},
// });