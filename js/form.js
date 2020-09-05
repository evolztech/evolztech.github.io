$(function(){
	$(".form_btn").click(function(e){
		e.preventDefault()
		var username = $(".uname").val();
		var useremail = $(".uemail").val();
		var usercompany = $(".ucompany").val();
		var userdesc = $(".udesc").val();
		console.log(username);
		console.log(useremail);
		console.log(usercompany);
		console.log(userdesc);
	});
});