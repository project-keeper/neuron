var scroll=document.getElementById('scroll');
scroll.addEventListener('click',function(){
  window.scrollTo(0,0);
});

AOS.init({
  offset: 310,
  duration: 5000
});
