$("nav>ul>li").mouseover(function(){
  $(".sub,.sub_bg").stop().fadeIn(300);
});

$("nav>ul>li").mouseout(function(){
  $(".sub,.sub_bg").stop().fadeOut(300);
});



$('#slider-div').slick({
  slide: 'div',
  infinite : true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows : true, 
  dots : true,
  speed : 100,
  autoplaySpeed: 2000,
  pauseOnHover : true,
  vertical : false,
  prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
  nextArrow : "<button type='button' class='slick-next'>Next</button>",
  dotsClass : "slick-dots",
  draggable : true,
  arrows : true,
  
  responsive: [ // 반응형 웹 구현 옵션
  {  
      breakpoint: 481, //화면 사이즈 960px
      settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow:2.3
      } 
      
  },
  {  
    breakpoint: 341, //화면 사이즈 960px
    settings: {
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow:2
    } 
    
},
{  
  breakpoint: 280, //화면 사이즈 960px
  settings: {
      //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      slidesToShow:1.5
  } 
  
}
  

]

  });


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: true,
    pauseOnHover: true,
  });

