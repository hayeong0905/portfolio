var time=60;
var sec="";

var x=setInterval(function(){

  sec=time%61;

  document.getElementById("demo").innerHTML=sec+"초";
  time--;

  if(time<0){
    clearInterval(x);
    alert("TIME OUT");
  }

  },1000);

  

