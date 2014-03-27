$(document).ready(function () {
    $('.lyricbox').hide();
    $('#intro').show();
});


$('.navbutton').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('clicked');
});

$('#jiggabutton').on('click', function (e) {
    e.preventDefault();
        $('.lyricbox').stop().fadeIn("slow").hide();
        $('#jradio').show();
        $('.words').hide();
});

$('#yeezybutton').on('click', function (e) {
        e.preventDefault();
        $('.lyricbox').stop().fadeIn("slow").hide();
        $('#yeradio').show();
        $('.words').hide();
});

$('#2chainzbutton').on('click', function (e) {
        e.preventDefault();
        $('.lyricbox').stop().fadeIn("slow").hide();
        $('#2radio').show();
        $('.words').hide();
});

$('#drizzybutton').on('click', function (e) {
        e.preventDefault();
        $('.lyricbox').stop().fadeIn("slow").hide();
        $('#drakeradio').show();
        $('.words').hide();
});

$('#kdotbutton').on('click', function (e) {
        e.preventDefault();
        $('.lyricbox').stop().fadeIn("slow").hide();
        $('#kradio').show();
        $('.words').hide();

});

$('#outkastbutton').on('click', function (e) {
        e.preventDefault();
        $('.lyricbox').stop().fadeIn("slow").hide();
        $('#oradio').show();
        $('.words').hide();

});

$('#bronsonbutton').on('click', function (e) {
        e.preventDefault();
        $('.lyricbox').stop().fadeIn("slow").hide();
        $('#abradio').show();
        $('.words').hide();

});

$('#weezybutton').on('click', function (e) {
        e.preventDefault();
        $('.lyricbox').stop().fadeIn("slow").hide();
        $('#wradio').show();
        $('.words').hide();

});

$('#rozaybutton').on('click', function (e) {
        e.preventDefault();
        $('.lyricbox').stop().fadeIn("slow").hide();
        $('#rozayradio').show();
        $('.words').hide();

});

$('#pushabutton').on('click', function (e) {
        e.preventDefault();
        $('.lyricbox').stop().fadeIn("slow").hide();
        $('#pradio').show();
        $('.words').hide();

});


$('radio').on('click', function (e) {
        e.preventDefault();
     $('.words').show();
    });

$('.radio1').on('click', function (e) {
  $(".one").show();
  $(".two, .three").hide();
});

$('.radio2').on('click', function (e) {
  $(".one, .two").show();
  $(".three").hide();
});

$('.radio3').on('click', function (e) {
   $(".one, .two, .three").show();
});