$(function(){
    $(".accordion p").click(function(){
        $(this).next("div").slideToggle();
        $(this).children("span").toggleClass("open");
    });
});