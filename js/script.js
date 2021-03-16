$(document).scroll(function(){
    if ($(window).scrollTop() > 500){
        $('#navbar').removeClass('bg-light').addClass('bg-nontrans');
    } else if($(window).scrollTop() <= 500){
        $('#navbar').removeClass('bg-nontrans').addClass('bg-light'); 
        }
});

//paralax

