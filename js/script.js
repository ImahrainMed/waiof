$(document).ready(function () {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 0)
    {
      $('#header_one').css('background-color','white');

      $('.nav-link').addClass('nav-link-dark');
      $('span.i_place_time').addClass('i_black');
      } else {
      
      $('#header_one').css('background-color','rgba(255, 255, 255, 0)');
      $('.nav-link').removeClass('nav-link-dark');
      $('span.i_place_time').removeClass('i_black');

    }
    
  });
  


});

