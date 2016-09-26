$(document).ready(function(){
	var token = "d19c018fac18507f87dfe1265295cdbc";
	var info = {"token": token};
	$.post("http://challenge.code2040.org/api/haystack", info, function(data){
		for(var i = 0; i < data.haystack.length; i++){
			if(data.needle == data.haystack[i]){
				var needle = i;
				var returnInfo = {"token": token, "needle": needle};
				$.post("http://challenge.code2040.org/api/haystack/validate", returnInfo);
			}
		}

	});
});