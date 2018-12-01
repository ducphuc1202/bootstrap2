$(document).ready(function(){
  /* Animate when scroll */
    sal();

  $(document).scroll(function(evt) {
    if($(window).scrollTop() > 30) {
      $('.btn-up').fadeIn();
    }
    else {
      $('.btn-up').fadeOut();
    }
  })


  /* Overlap */
  $('.btn-play').click(function(evt) {
    $('.overlap').toggle();
  })
  $('.btn-close').click(function(evt) {
    $('.overlap').toggle();
  })


  /* Swipe people-say */
  $("#people-carousel").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll:"vertical"

  });


  /* Mouse over main-features */
  $('.main-features').mouseover(function(evt) {
    $('.main-features-img img').css('animation', 'to_bottom 800ms linear 500ms');
    setTimeout(function() {
      $('.main-features-img img').css('opacity', '1');
    }, 800);
  })

  /* JS FOR COUNTUP */
    var isCount = false;
    $('.count-user').mouseover(function(evt) {
      if(!isCount) {
        var options = {
          useEasing: true,
          useGrouping: true,
          separator: ","
        };
        var user = new CountUp("user-number", 0, 12891476,0,2,options);
        if (!user.error) {
            user.start();
        } else {
            console.error(user.error);
        }
        isCount = !isCount;
      }
    })


    /* APP Screenshots */
    var $owl = $('.owl-carousel');

    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
      center: true,
      loop: true,
      items: 5,
      autoplay: true,
    });

    $(document).on('click', '.owl-item>div', function() {
      $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
    });

    /* FAQ */
    $('.panel-heading').click(function(evt) {
      if(evt.target !== this)
        $(this).toggleClass('active');
    })


    /* Popover social btn footer */
  $('[data-toggle="popover"]').popover();
});
