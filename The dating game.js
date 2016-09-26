$(document).ready(function(){
	var token = "d19c018fac18507f87dfe1265295cdbc";
	var info = {"token": token};
	$.post("http://challenge.code2040.org/api/dating", info, function(data){
		var givenDate = new Date("" + data.datestamp + "");
		var seconds = givenDate.getSeconds();
		givenDate.setSeconds(seconds + data.interval);
		
		function ISODateString(d) {
    		function pad(n) {return n<10 ? '0'+n : n}
    		return d.getUTCFullYear()+'-'
	         	+ pad(d.getUTCMonth()+1)+'-'
	         	+ pad(d.getUTCDate())+'T'
	         	+ pad(d.getUTCHours())+':'
	         	+ pad(d.getUTCMinutes())+':'
	         	+ pad(d.getUTCSeconds())+'Z'
		}

		var datestamp = ISODateString(givenDate);
		var returnInfo = {"token": token, "datestamp": datestamp};
		$.post("http://challenge.code2040.org/api/dating/validate", returnInfo);
	});
});