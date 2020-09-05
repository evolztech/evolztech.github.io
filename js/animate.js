$(document).ready(function(){
	/*First Heading animation goes here*/
 	if (window.matchMedia("(max-width: 767px)").matches){
 		$(".first_heading").animate({
		fontSize:"40px",
		lineHeight:"45px"
	    },900);
 	}
 	else{
	    $(".first_heading").animate({
		fontSize:"50px",
		lineHeight:"56px"
		},1800);
 	}
	/*First heading animation ends here*/
});