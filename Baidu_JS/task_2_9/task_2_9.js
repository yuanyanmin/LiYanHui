//存放遍历出来的DOM树节点
var orderQueue = [];
var isAnimation = false;
var selectedDiv = [];
//前序遍历
function preOrder(root){
	orderQueue.push(root);
	for(var i = 0;i<root.childElementCount;i++){
		if(root.children[i] != null){
			preOrder(root.children[i]);
		}
	}
}



//后序遍历
function postOrder(root){
	for(var i = 0;i<root.childElementCount;i++){
		if(root.children[i] != null){
			postOrder(root.children[i]);
		}
	}
	orderQueue.push(root);
}
//多叉树遍历的结果存放在 orderQueue 中，在这个队列中寻找 queryWord

function render(queryWord){
	if(isAnimation){
		alert("in animation");
		return;
	}
	
	isAnimation = true;
	var i = 0;
	orderQueue[i].style.backgroundColor = "blue";
	var showRet = setInterval(function(){
		i++;
		if(i>=orderQueue.length){
			clearInterval(showRet);
			orderQueue[orderQueue.length - 1].style.backgroundColor = "#fff";
			isAnimation = false;
			alert("未查询到内容");
			return;
		}
		orderQueue[i-1].style.backgroundColor = "#fff";
		orderQueue[i].style.backgroundColor = "blue";
		
		if(orderQueue[i].childNodes[0].nodeValue.search(queryWord) != -1){
			alert("查询到内容")
			clearInterval(showRet);
			isAnimation = true;
			return;
		}
	},500);
}

function resetBackgroundColor(){
	for(var i = 0;i<orderQueue.length;i++){
		orderQueue[i].style.backgroundColor = "#fff";
	}
}


function validataInput(input){
	if(input == ""){
		alert("输入为空");
		return 1;
	}
	return 0;
}
function clearSelectedDiv(){
	var divList = document.getElementById("wrapper").getElementsByTagName("div");
	for(var i = 0;i<divList.length;i++){
		divList[i].style.backgroundColor = '#fff';
	}
	selectedDiv = [];
}

function addDivEvent(){
	var divList = document.getElementById("wrapper").getElementsByTagName("div");
	//console.log(divList);
	for(var i = 0;i<divList.length;i++){
		divList[i].onclick = function(e){
			clearSelectedDiv();
			this.style.backgroundColor = '#ab1238';
			e.stopPropagation();
			selectedDiv.push(this);
			console.log(selectedDiv);
		}
	}
}

var rootNode = document.getElementById("wrapper"); 

//按钮绑定点击事件
window.onload = function(){
	document.getElementById("queryButton").onclick = function(){
		var input = document.getElementById("queryInput").value;
		
		// 将上次查询高亮消除
		resetBackgroundColor();
		
		//验证输入是否合法
		if(validataInput(input)){
			return;
		}
		
		preOrder(rootNode);
		render(input)
	}
	
	//div点击事件
	addDivEvent();
	
	document.getElementById("addButton").onclick = function(){
		var input = document.getElementById("addElement").value;
		
		if(selectedDiv.length == 0){
			alert("请选择元素");
		}
		
		var newDiv = document.createElement("div");
		newDiv.innerText = document.getElementById("addElement").value;
		newDiv.className = "new_layer";
		selectedDiv[0].appendChild(newDiv);
		addDivEvent();
	}
	
	document.getElementById("delButton").onclick = function(){
		if(selectedDiv.length == 0){
			alert("请选择元素");
		}
		selectedDiv[0].parentNode.removeChild(selectedDiv[0]);
	}
}


































