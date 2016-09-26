$(document).ready(function(){
	var token = "d19c018fac18507f87dfe1265295cdbc";
	var info = {"token": token};

	$.post("http://challenge.code2040.org/api/reverse", info, function(data){
		function reverse(data){
    		return data.split("").reverse().join("");
		}
		var string = reverse(data);
		var returnInfo = {"token": token, "string": string};
		$.post("http://challenge.code2040.org/api/reverse/validate", returnInfo);
	});

});

