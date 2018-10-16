$(function(){

  var video = document.getElementById("mVideo");

  $(".video").click(function(){
    if($(".play").hasClass('-paused')){
      video.play();
      $(".play").toggleClass("-paused");
      $(".video").toggleClass("-pseudo");
    }else{
      video.pause();
      $(".play").toggleClass("-paused");
      $(".video").toggleClass("-pseudo");
    }
  });


  $(".owl-carousel").owlCarousel({
    loop: true,
    margin:20,
    responsive:{
        0:{
          items:1,
        },
        480:{
          items:2,
        },
        992:{
          items:3,
        },
        1200:{
          items:4,
        }
    }
  });
  
    $(".adv-sect").waypoint(function(){
        $({blurRadius: 5}).animate({blurRadius: 0}, {
    duration: 1200,
    easing: 'swing',
    step: function() {
      $(".adv-item h4 span").css({
        "-webkit-filter": "blur("+this.blurRadius+"px)",
        "filter": "blur("+this.blurRadius+"px)"
      });
    }
  });
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
    $(".adv-item h4 span").each(function() {
      var tcount = $(this).data("count");
      $(this).animateNumber({ number: tcount,
        easing: 'easeInQuad',
        "font-size": "1.8125em",
        numberStep: comma_separator_number_step},
        1200);
    });
    this.destroy();
  },{
    offset: '80%'
  });

});
