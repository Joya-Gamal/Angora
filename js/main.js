let HomeOffset = $("#about").offset().top;
console.log(HomeOffset)
$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
    console.log(windowScroll)
    if(windowScroll > HomeOffset-35){
        $(".navbar").css("backgroundColor",'red')
    }
})