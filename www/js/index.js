// works and events ajax requesturl

var workrqturl="/works";

var eventrqturl="/records";

var requesttype=-1;


//init texts content

function inittexts(list){

    texts = list;

}


$(document).ready(function(){

        var pagelen=5;
        var max=50;
        $(".yz-page-num").click(function(){
            var thisnum=parseInt($(this).text());
            var curnum=parseInt($(".yz-page-focus").text());
            var curidx=$(".yz-page-num").index($(this))+1;
            if((max-pagelen+curidx-1 >= thisnum && thisnum > curnum) || (thisnum > curidx && thisnum < curnum)){
                for(var i=0;i < pagelen;i++){
                    var num=thisnum-(pagelen-1)/2+i;
                    if(num < 10) num="0"+num
                    $(".yz-page-num").eq(i).text(num);
                }
            }
            else{
                $(".yz-page-focus").removeClass("yz-page-focus");
                $(this).addClass("yz-page-focus");
            }
        })
        $(".yz-page-next").click(function(){
            var curidx=parseInt($(".yz-page-focus").text())+pagelen;
            for(var i=0;i < pagelen;i++){
                $(".yz-page-num").eq(i).text(curidx-(pagelen-1)/2+i);
            }
        })
        $(".yz-page-prev").click(function(){
            var curidx=parseInt($(".yz-page-focus").text())-pagelen;
            for(var i=0;i < pagelen;i++){
                $(".yz-page-num").eq(i).text(curidx-(pagelen-1)/2+i);
            }
        })
});

$(document).ready(function() {

	var slideLength = $(".ue-index-slide-item").length;	   	//  total 3-cols slides
	var slideIndex  = 0;					//  default index -- initial showed slide	
	var	slideTimer, timerInterval = 4000;
	var clickIndex;
	var fadeTime = 500;

	$(".ue-index-slide").hover(function() {
		clearInterval(slideTimer);
	}, function(){
		slideTimer = setInterval(function() {
			if (slideIndex == slideLength - 1) {
				showSlide(0);
				slideIndex = -1;
			} else {
				showSlide(slideIndex + 1);
			};

			slideIndex++;
		}, timerInterval);
	}).trigger("mouseleave");

	$(".ue-slide-left").click(function() {

		clickIndex = slideIndex == 0 ? slideLength - 1 : slideIndex - 1;		
		showSlide(clickIndex);
		slideIndex = clickIndex;
	});

	$(".ue-slide-right").click(function() {

		clickIndex = slideIndex == slideLength - 1 ?  0 : slideIndex + 1;		
		showSlide(clickIndex);
		slideIndex = clickIndex;
	});

	//  show the spicified slide and update the nav-slstyle
	function showSlide(index)
	{
		$(".ue-index-slide-item").eq(slideIndex).fadeOut(fadeTime);
		$(".ue-index-slide-item").eq(index).fadeIn(fadeTime);
	}

});


