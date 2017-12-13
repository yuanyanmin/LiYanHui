/*
var input = document.getElementById("input");
var DataArr = [];
function insort() {
    var str = input.value;
    var arr = str.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]+/g," ");
    var arr = arr.split(" ");
    DataArr = DataArr.concat(arr);
    
    for (var i=0;i<DataArr.length;i++) {
    	var oul = document.getElementById("list");
    	var li = document.createElement("li");
    	li.innerHTML = DataArr[i];
        oul.insertBefore(li,oul.firstChild);
    }
    input.value = null;
}
function search() {
    var searchinput = document.getElementById("search");
    var lis = document.getElementsByTagName("li");
    for(var i=0;i<DataArr.length;i++) {
        var reg = new RegExp(searchinput.value,"g");
        lis[i].innerHTML = lis[i].innerHTML.replace(reg, "<span class='select'>" + searchinput.value + "</span>");
    }
}
*/

var input = document.getElementById("input");
var DataArr = [];
function insort(){
	var str = input.value;
	var arr = str.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]+/g," ");
	var arr = arr.split(" ");
	DataArr = DataArr.concat(arr);          //连接数组，相当于复制
	for(var i = 0;i<DataArr.length;i++){
		var oul = document.getElementById("list");
		var li = document.createElement("li");
		li.innerHTML = DataArr[i];
		oul.appendChild(li);
	}
	input.value = null;
}
function search(){
	var searchinput = document.getElementById("search");
	var lis = document.getElementsByTagName("li");
	for(var i = 0;i<DataArr.length;i++){
		var reg = new RegExp(searchinput.value,"g");
		lis[i].innerHTML = lis[i].innerHTML.replace(reg,"<span class='select'>"+searchinput.value+"</span>");
	}
}























