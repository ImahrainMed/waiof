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
    $('#scrollsnap-container').show(1 - $('#scrollsnap-container').scrollTop() / 250);
  });


});

