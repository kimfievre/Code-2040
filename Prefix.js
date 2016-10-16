var token = "d19c018fac18507f87dfe1265295cdbc";
var info = {"token": token};

function prefix(info){
	$.post("http://challenge.code2040.org/api/prefix", info, function(data){
		var array = [];
		for(var i = 0; i < data.array.length; i++){
			if(!data.array[i].startsWith(data.prefix)){
				array.push(data.array[i]);
				var returnInfo = {"token": token, "array": array};
				$.post("http://challenge.code2040.org/api/prefix/validate", returnInfo);
			}
		}
	});
}

prefix(info);
