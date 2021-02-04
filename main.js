var scroll=document.getElementById('scroll');
scroll.addEventListener('click',function(){
  window.scrollTo(0,0);
});

AOS.init({
  offset: 300,
  duration: 1390
});
