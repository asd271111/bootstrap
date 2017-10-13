	var pixclPatio = 1 / window.devicePixelRatio; 
	document.write('<meta name="viewport" content="width=device-width,initial-scale='+pixclPatio+',minimum-scale='+pixclPatio+',maximum-scale='+pixclPatio+',user-scalable=no" />');
	var rootHtml = document.getElementsByTagName('html')[0];
    var rootPx = rootHtml.getBoundingClientRect().width;
    rootHtml.style.fontSize = rootPx / 16 + 'px';
Zepto(function(){
	
	var ht=$("#topWrap").height();
	$("body").css("padding-top",ht+"px");
	
	/*点击更多出现的加载图片*/
//		<span class="loading">		
//			<img src="img/1.png" />
//		</span>
	var loading=$("<span/>",{class:"loading"});//新建一个加载的图片
	loading.html("<img src='img/1.png' />");//使用html在其内部添加图片标签
	

	
	$("#addMore").tap(function(){//触屏点击更多按钮，加载loading图片，进行内容加载
		$(".listBottom").prepend(loading);//在listBottom内部的前面添加标签
		
		setTimeout(function(){//setTimeout等待多少时间后执行
			$.getJSON("js/data.json",function(data){//读取json文件
				$.each(data,function(index,con){
	//				console.log(con.title);
					var str="<li><a href='#'><img src="+con.pic+"/>";
						str+="<div class='itemTxt'><h6>"+con.title+"</h6>";
						str+="<p>"+con.price+"</p></div></a></li>";
						
						$(".list").append(str);
				});
				$(".loading").remove();
			})
	   },2000)
	})
	
	
	
})