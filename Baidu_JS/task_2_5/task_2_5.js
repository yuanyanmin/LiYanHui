var inputNumber = document.getElementById("input-number");
var queue = document.getElementById("queue");
var num = 0;
console.log(document.getElementById("queue").childNodes.length);
function isNumber(number){
	if(number.value == ""){
		alert("请输入一个数字");
		return "-1";
	}else if(!isNaN(number.value) && number.value >=10 && number.value <= 100){
		return number.value;
	}else{
		alert("格式不对，请重新输入一个数字");
		return "-1";
	}
}

function leftAdd(){
	if(num >= 60){
		alert("最多输入60个数字");
	}
	else{
		var value = isNumber(inputNumber);
		if(value !== "-1"){
			var sp = document.createElement("span");
			//sp.innerText = value;
			queue.insertBefore(sp,queue.firstChild);
			//console.log(inputNumber.value);
			sp.style.height = value+"px";
			sp.style.marginTop=(200-inputNumber.value)+"px";
		}
		num++;
		console.log(num);
	}
	
}

function leftRem(){
	if(num <= 0){
		alert("该队列为空，无法删除");
		num = 0;
	}
	else{
		var value = isNumber(inputNumber);
		if(value !== "-1"){
			var sp = queue.firstChild;
			queue.removeChild(sp);
		}
		num--;
		console.log(num);
	}
}

function rightAdd(){
	if(num >= 60){
		alert("最多输入60个数字");
	}
	else{
		var value = isNumber(inputNumber);
		if(value !== "-1"){
			var sp = document.createElement("span");
			//sp.innerText = value;
			queue.appendChild(sp);
			//console.log(inputNumber.value);
			sp.style.height = value+"px";
			sp.style.marginTop=(200-inputNumber.value)+"px";
		}
		num++;
		console.log(num);
	}
}

function rightRem(){
	if(num <= 0){
		alert("该队列为空，无法删除");
		num = 0;
	}
	else{
		var value = isNumber(inputNumber);
		if(value !== "-1"){
			var sp = queue.lastChild;
			queue.removeChild(sp);
		}
		num--;
		console.log(num);
	}
}

queue.addEventListener('click',function(event){
	//console.log(event.target.nodeName.toLowerCase());
	if(event.target.nodeName.toLowerCase() == "span"){
		queue.removeChild(event.target);
	}
	num--;
	console.log(num);
});

//冒泡排序
function sort(arr){
	for(var i = 0;i<arr.length;i++){
		for(var j  = 0;j<arr.length-1;j++){
			if(arr[j] > arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

function init(){
	var leftIn = document.getElementById("left-in");
	var leftOut = document.getElementById("left-out");
	var rightIn = document.getElementById("right-in");
	var rightOut = document.getElementById("right-out");
	
	leftIn.onclick = leftAdd;
	leftOut.onclick = leftRem;
	rightIn.onclick = rightAdd;
	rightOut.onclick = rightRem;
	
	var arr =  [12,34,36,21,78,65];
	
	console.log(sort(arr));
}

init();