
/*****
$(document).ready(function() {
    $('.mobile_3dot, .account_page').on('click', function() {
      $('.mobile_3dot, .account_page').removeClass("selected");
      $(this).toggleClass("selected"); 
    });

});
*******




/***

$(document).ready(function() {
    $('.tab_display_inner ul li a').on('click', function() {
      $('.tab_display_inner ul li a').removeClass("active");
      $(this).toggleClass("active"); 
    });

});

****/

/*****
  function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

****/
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow:'.arrow-left',
        nextArrow:'.arrow-right',
    });

});







function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


