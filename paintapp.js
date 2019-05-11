var $ = function (id) {
    return document.getElementById(id);
}

var calculations = function(){
	
	var length = parseInt($("length").value);
	var width = parseInt($("width").value);
	var height = parseInt($("height").value);
	var doors = parseInt($("door").value);
	var windows = parseInt($("window").value);
	
	if (length === "") {
                alert("Please enter the length.");
		return;
        } else if (width === "") {
                alert("Please enter the width.");
		return;
        } else if(height === ""){
		alert("Please enter the height")
		return;
	}
	
	
	var calculated_sqft=((2 *(length*height)) + 2 *(width*height));
	var calc_doors= ((calculated_sqft)-(doors*21));
	var calc_windows= ((calc_doors)-(windows*12));
	$("blah").value= calc_windows;
	
	}
	
	
	window.onload = function () {
    	$("submit").onclick = calculations;
	$("length").focus();

}
