$(document).ready(function(){

  setInterval(function(){
    $('figure ul').animate({left:'-1200px'},600,function(){
      $('figure ul').append($('figure ul li').eq(0));
      $('figure ul').css({left:0});
    })
  },4000);

  setInterval(function(){
    $('div.notice_list ul').animate({left:'-900px'},500,function(){
      $('div.notice_list ul').append($('div.notice_list ul li').eq(0));
      $('div.notice_list ul').css({left:0});
    })
  },3000);


    $('ul.gnb li').click(function(e){
      e.preventDefault();

      // ht에 window 높이값 저장
      let ht=$(window).height();
      // 변수 i에 현재 클릭한 li 순서 값을 저장
      let i=$(this).index();
      // 브라우저의 높이값*순서값=현재 박스의 위치값
      let nowTop=i*ht;
      // console.log(i);
      // 해당 스크롤의 위치 값으로 문서를 이동
      $('html,body').stop().animate({scrollTop : nowTop},1400);
    });

});






