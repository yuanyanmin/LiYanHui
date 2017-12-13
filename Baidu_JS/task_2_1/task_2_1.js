/*
document.getElementById("button").onclick = function(){
	
	var airQ = document.getElementById("aqi-input").value;
	document.getElementById("aqi-display").innerHTML = airQ;
};


function air(){
	var airQ = document.getElementById("aqi-input").value;
	document.getElementById("aqi-display").innerHTML = airQ;
}
document.getElementById("button").onclick = air;





(function(){
	var btn = document.getElementById("button");
	var input = document.getElementById("aqi-input");
	var display = document.getElementById("aqi-display");
	var handler = function(){
		display.innerHTML = input.value;
	}
	EventUtil.addHandler(btn,"click",handler);
})();*/

function air(){
	var airQ = document.getElementById("aqi-input").value;
	document.getElementById("aqi-display").innerHTML = airQ;
}
document.getElementById("button").onclick = air;