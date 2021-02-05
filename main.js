var scroll=document.getElementById('scroll');
scroll.addEventListener('click',function(){
  window.scrollTo(0,0);
});

AOS.init({
  offset: 170,
  duration: 1330,
  mirror:true,
});
