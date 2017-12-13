/*
var btn = document.getElementById("tj");

btn.onclick = function(){
	var cont = document.getElementById("text").value;
	var showt = document.getElementById("pro");
	
	var RegYchinese = /[\u4E00-\u9FA5]/g;//汉字
	var regNchinese = /[^\u4E00-\u9FA5\uf900-\ufa2d]/g; //匹配非中文
	var Regtrim = /^\s+|\s+$/g;  // 删除字符串两侧的空白字符
	
	var length = cont.replace(Regtrim,'').replace(RegYchinese,'').length + cont.replace(Regtrim,'').replace(regNchinese,'').length;
	console.log(length);
	if(length == 0){
		document.getElementById("text").style.border = "1px solid red";
		showt.innerHTML = "名字不能为空";
		showt.style.color = "red";
	}else if(length >= 4 && length <= 16){
		document.getElementById("text").style.border = "1px solid green";
		showt.innerHTML = "输入正确";
		showt.style.color = "green";
	}else{
		document.getElementById("text").style.border = "1px solid red";
		showt.innerHTML = "输入有误";
		showt.style.color = "red";
	}
}
*/
(function(){
	var btn = document.getElementById("tj");
	
	//得到字符串长度
	function getLength(str){
		var length = 0;
		var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/g; //匹配中文
		for(var i = 0;i<str.length;i++){
			if(reg.test(str[i])){
				length += 2;
			}else{
				length += 1;
			}
		}
		return length;
	}
	
	btn.onclick = function(){
		
	var cont = document.getElementById("text").value;
	var showt = document.getElementById("pro");
	var length = getLength(cont);
	console.log(length);
	if(length == 0){
		document.getElementById("text").style.border = "1px solid red";
		showt.innerHTML = "名字不能为空";
		showt.style.color = "red";
	}else if(length >= 4 && length <= 16){
		document.getElementById("text").style.border = "1px solid green";
		showt.innerHTML = "输入正确";
		showt.style.color = "green";
	}else{
		document.getElementById("text").style.border = "1px solid red";
		showt.innerHTML = "输入有误";
		showt.style.color = "red";
	}
	}
})();