/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
  /*
  coding here
  */
	
  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */

  var lis = document.getElementById("source").getElementsByTagName("li");
  //console.log(lis[0].innerHTML.split("空气质量")[0]);
  //console.log(lis[0].children[0].innerHTML);
  var data = [];
  for(var i = 0;i<lis.length;i++){
	  var city = lis[i].innerHTML.split("空气质量")[0];
	  var num = lis[i].children[0].innerHTML;
	  data.push([city,num]);
  }
  //console.log(data);
  return data;

}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
	data.sort(function(a,b){
		return a[1] - b[1];
	});
	//console.log(data);
	return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
	var resort = document.getElementById("resort");
	var range = ['一','二','三','四','五','六','七'];
	for(var i = 0;i<data.length;i++){
		var lis = document.createElement("li");
		lis.innerHTML = '第'+range[i]+'名:'+data[i][0]+"空气质量："+'<b>'+data[i][1]+'</b>';
		resort.appendChild(lis);
	}
}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
  var btn = document.getElementById("sort-btn");
  btn.disabled = 'true';
}

function init() {

  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
	var button = document.getElementById("sort-btn");
	button.onclick = function(){
		btnHandle();
	}
}

init();