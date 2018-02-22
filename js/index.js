showTime();
function checkTime(i) {
	if(i<10){
		return i = "0" + i;
	}else {
		return i;
	}
}
 function showTime() {
	var time = document.getElementById("time");
	var	myDate = new Date();
	var	d = myDate.getDay();
	var	h = myDate.getHours();
	var	m = myDate.getMinutes();
	var	s = myDate.getSeconds();
		m = checkTime(m);
		s =checkTime(s);
		weekDay = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	time.innerHTML = myDate.getFullYear() + "年"+ (myDate.getMonth() + 1) + "月" + myDate.getDate() + "日  " + weekDay[d] + " "+ h + ":" + m + ":" + s;	
  setTimeout(showTime, 500);
 }	
