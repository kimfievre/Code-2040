$(document).ready(function(){
	var token = "d19c018fac18507f87dfe1265295cdbc";
	var github = "https://github.com/kimfievre/Code-2040.git";
	info = {"token": token, "github": github};

	$.post("http://challenge.code2040.org/api/register", info);
});
