/*
var aqiData = [
	["北京",90],
	["上海", 50],
	["福州", 10],
	["广州", 50],
	["成都", 90],
	["西安", 100]
];

var str = "一二三";
(function(){
	var arr = [];
  for(var i = 0; i < aqiData.length; i++) {
    if(aqiData[i][1] > 60) {
      arr.push(aqiData[i]);
    }
  }
  arr.sort(function(a, b) {
    return b[1] - a[1];
  });
  var list = document.querySelector('#aqi-list');
  for(var j = 0; j < arr.length; j++) {
    var text = '第' + str.charAt(j) + '名：' + arr[j][0] + '，' + arr[j][1];
    var oLi = document.createElement('li');
    oLi.innerText = text;
    console.log(list);
    list.appendChild(oLi);
  }
})();
*/

//定义二维数组
var aqiData = [
	["北京",90],
	["上海", 50],
	["福州", 10],
	["广州", 50],
	["成都", 90],
	["西安", 100]
];
//alert(aqiData.length); 6
//alert(aqiData[1]);   上海,50
var str = "一二三";
(function(){
	var arr = [];
	for(var i = 0;i < aqiData.length;i++){
		if(aqiData[i][1] > 60){
			arr.push(aqiData[i]);
		}
	}
	arr.sort(function(a,b){
		return b[1] - a[1];
	});
	for(var j = 0;j < arr.length;j++){
		var list = document.getElementById("aqi-list");
		var text = '第' + str.charAt(j) + '名：' + arr[j][0] + ',' + arr[j][1];
		var oLi = document.createElement('li');
		oLi.innerText = text;
		list.appendChild(oLi);
	}
})();




















