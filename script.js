$(document).ready(function () {
	$(".count").each(function () {
              $(this)
                .prop("Counter", 0)
                .animate(
                  {
                    Counter: $(this).text(),
                  },
                  {
                    duration: 4000,
                    easing: "swing",
                    step: function (now) {
                      now = Number(Math.ceil(now)).toLocaleString('en');
                                            $(this).text(now);
                    },
                  }
                );
        
            });
  $('#scrollsnap-container').hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0)
    {
      $('#header_one').css('background-color','white');
      $('.nav-link').addClass('nav-link-dark');
      $('#scrollsnap-container').show(1 - $('#scrollsnap-container').scrollTop() / 250);
    } else {
      $('#scrollsnap-container').hide();
      $('#header_one').fadeOut($('#header_one').css('background-color','rgba(255, 255, 255, 0)'));
      $('.nav-link').fadeOut($('.nav-link').removeClass('nav-link-dark'));
    }
    
  });
  


});

