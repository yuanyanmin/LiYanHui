var inputNumber = document.getElementById("input-number");
var queue = document.getElementById("queue");

function isNumber(number){
	if(number.value == ""){
		alert("请输入一个数字");
		return "-1";
	}else if(!isNaN(number.value)){
		return number.value;
	}else{
		alert("格式不对，请重新输入一个数字");
		return "-1";
	}
}

function leftAdd(){
	var value = isNumber(inputNumber);
	if(value !== "-1"){
		var sp = document.createElement("span");
		sp.innerText = value;
		queue.insertBefore(sp,queue.firstChild);
		//console.log(inputNumber.value);
	}
}

function leftRem(){
	var value = isNumber(inputNumber);
	if(value !== "-1"){
		var sp = queue.firstChild;
		queue.removeChild(sp);
	}
}

function rightAdd(){
	var value = isNumber(inputNumber);
	if(value !== "-1"){
		var sp = document.createElement("span");
		sp.innerText = value;
		queue.appendChild(sp);
		//console.log(inputNumber.value);
	}
}

function rightRem(){
	var value = isNumber(inputNumber);
	if(value !== "-1"){
		var sp = queue.lastChild;
		queue.removeChild(sp);
	}
}

queue.addEventListener('click',function(event){
	//console.log(event.target.nodeName.toLowerCase());
	if(event.target.nodeName.toLowerCase() == "span"){
		queue.removeChild(event.target);
	}
	
});

function init(){
	var leftIn = document.getElementById("left-in");
	var leftOut = document.getElementById("left-out");
	var rightIn = document.getElementById("right-in");
	var rightOut = document.getElementById("right-out");
	
	leftIn.onclick = leftAdd;
	leftOut.onclick = leftRem;
	rightIn.onclick = rightAdd;
	rightOut.onclick = rightRem;
}

init();