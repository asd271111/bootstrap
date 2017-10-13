$(function(){
	function myBrowser(){
	    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	    var isOpera = userAgent.indexOf("Opera") > -1;
	    if (isOpera) {
	        console.log("Opera");
	    }; //判断是否Opera浏览器
	    if (userAgent.indexOf("Firefox") > -1) {
	        console.log("FF");
	    } //判断是否Firefox浏览器
	    if (userAgent.indexOf("Chrome") > -1){
		  console.log("Chrome");
		 }else if (userAgent.indexOf("Safari") > -1) {
	        console.log("Safari");
			$(".nav li span").remove()
	        
	    } //判断是否Safari浏览器
	    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
	        console.log("IE");
	    }; //判断是否IE浏览器
	}
	myBrowser();
})