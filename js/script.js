var image = new Array ();
image[0] = "img/banda.jpg";
image[1] = "img/banda1.jpg";
var size = image.length
var x = Math.floor(size*Math.random())
''
$('.pic-band').attr('src',image[x]);


$('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 90
        }, 1000);
    }
});


$(document).ready(function () {
  var $nav = $('#navigation'),
      posTop = $nav.position().top;
  $(window).scroll(function () {
    var y = $(this).scrollTop();
    if (y > posTop) { $nav.addClass('fixed'); }
    else { $nav.removeClass('fixed'); }
  });
});

$('[data-fancybox]').fancybox({
    image : {
        protect: true
    }
});


$(document).foundation()
