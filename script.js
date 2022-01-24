$(document).ready(function(event) {
  $(window).scroll(function() {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }

  });

  // slideup script
  $('.scroll-up-btn').click(function() {
    $('html').animate({
      scrollTop: 0
    });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });
  $('.navbar .menu li a').click(function() {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });
  // toogle menu/ navbar script
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
    // $(this).find('i').toggleClass('fa-bars fa-times')
  });
  // $('.menu-btn').on({
  //   click: function() {
  //     $('.navbar .menu').toggleClass("active");
  //     // $('.menu-btn i').addClass("fas fa-times");
  //   }
  // });
  // $('.menu-btn').on('click', function(){
  //   $('.navbar .menu').toggleClass("active");
  // });
  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
  /*$(carousel).on('mousewheel', '.owl-stage', function () {
    if (this.scrollX > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
});*/
  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["YouTuber...", "Full Stack Developer...", "React/React Native", "Web Designer...", "UI/UX Designer..."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  // var typed = new Typed(".typing-2", {
  //   strings: ["YouTuber...", "Full Stack Developer...", "React/React Native", "Web Designer...", "UI/UX Designer..."],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true
  // });
  // Skills
    $('.skills').waypoint(function () {
        $('.bars .info .line').each(function () {
            $(this).css("width", $(this).attr("span") + '%');
        });
    }, {offset: '80%'});


    // Smooth scrolling on the navbar links
    // $(".menu li a").on('click', function (event) {
    //     if (this.hash !== "") {
    //         event.preventDefault();
    //
    //         // $('html, body').animate({
    //         //     scrollTop: $(this.hash).offset().top - 45
    //         // }, 1500, 'easeInOutExpo');
    //
    //         if ($(this).parents('.menu li a').length) {
    //                     $('.menu .active').removeClass('active');
    //                     $(this).closest('li').addClass('active');
    //                 }
    //     }
    // });
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        $('.menu li a').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top - 10) {
                $('.menu li a').not(this).removeClass('active');
                $(this).addClass('active');
            }
        });
    });
});
