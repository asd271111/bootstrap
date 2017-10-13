	$(document).ready(function(){
				/*欢迎界面*/
				$(".welcome").height($(window).height()).css("animation","screenHide 3s 9s forwards").fadeOut();/*1s是等待1s后才执行动画，forward让动画停留在最后一帧*/
				$(".greenLine").css("animation","lineW 0.4s");
				
				/*可以使用自定属性来进行.nav页面的跳转呈现在当前页面中滑动到当前位置的的效果*/
				$(".nav li a").click(function(){
					var n=$(this).attr("data-rel");
					var moveL=$(n).offset().top;
					$("html,body").animate({scrollTop:moveL+"px"},400);
				})
				var m=true;
				$("#menu").click(function(){
					if(m){
						$(this).css("transform","rotate(-90deg)");
						$(".nav").css("animation","navHide 1s forwards").fadeOut();//fadeOut淡出，主要是对display有影响，dispaly=none
						m=!m;
					}else{
						$(this).css("transform","rotate(0)");
						$(".nav").css("animation","navShow 1s forwards").fadeIn();//fadeIn淡入，主要是对display=bloak
						m=!m;
					}
				})
				var num=0;
				function autoChange(){//自动轮播
					t=setInterval(function(){
						if(num<1){num++;}else{num=0;}
					    console.log("++++"+num);
					    imgChange();
					},2000)
				}
				autoChange();
			 	var move=1920;
				function imgChange(){
					//$(".banner_Icon li:eq("+num+")").addClass("action").siblings().removeClass("action");
					$(".bannerimg").children("div:eq("+num+")").fadeIn().siblings().fadeOut();
					console.log(num)
				}
				/*鼠标图片按钮事件*/
				$("#imgBtn").click(function(){
					//var n=$(this).attr("data-rel");
					var moveL=$("#intro").offset().top;
					$("html,body").animate({scrollTop:moveL+"px"},400);
				})
				/*列表*/
				var liN=$("#workList li").length;
				var liW=$("#workList li").width()+20;
				$("#workList").width(liN*liW);
				var n=0;
				$("#workRight").click(function(){
					liN=$("#workList li:visible").length;
					console.log("hfgfug");
					if(n<liN-4){n++;}
					console.log(n);
					$("#workList").animate({"margin-left":-n*liW},300);
				})
				$("#workLeft").click(function(){
					liN=$("#workList li:visible").length;
					console.log("hfgfug");
					if(n>0){n--;}
					console.log(n);
					$("#workList").animate({"margin-left":-n*liW},300);
				})
				
				$("#workType li").click(function(){
					var type=$(this).attr("data-type");
					n=0;
					$("#workList").css("margin-left","0px");
					$(this).addClass("now").siblings().removeClass("now")
					
					console.log(type);
					switch(type){
						case "All":
						$("#workList li").show();
						break;
						case "Web":
//						$("#workList li").addClass("now");
						$("#workList .workWeb").show().siblings(":not(.workWeb)").hide();
						break;
						case "App":
						$("#workList .workApp").show().siblings(":not(.workApp)").hide();
						break;
						case "Other":
						$("#workList .workOther").show().siblings(":not(.workOther)").hide();
//						$("#workList li").addClass("now").siblings().removeClass("now")
						break;
					}
				})
				var tp;
				function actionNav(){
					$(document).scroll(function(){
						tp=$(document).scrollTop();
						console.log("fyhed8gf"+tp);
						if(tp<50){
							$("#header").css({"background":"rgba(0,0,0,0.8)","height":"100px"});	
							$(".logo").css("margin-top","5px");
							$(".nav").css("margin-top","40px");
							$(".mBtn").css("margin-top","50px")
						}else if(tp>=100 && tp<1200){
							$("#header").css("height","80px");
							$("#header").css({"background":"rgba(0,0,0,0.8)"});	
							$("#header").css("border","none");
							$(".nav").css({"margin-top":"15px","transition":"all 0.4s"});
							$(".nav li a").css({"color":"#fff"});
							$(".logo h3").css({"color":"#fff"});
							$(".logo p").css({"color":"#fff"});
							$(".mBtn").css("margin-top","25px");
							$(".logo").css({"margin-top":"-15px"});
							$(".roundBox").css("border","2px solid #fff");
						}else if(tp>=1200){
							$("#header").css({"background":"#fff","border":"1px solid #E8E8E8"});
							$(".nav li a").css({"color":"#515151"});
							$(".logo h3").css({"color":"#515151"});
							$(".logo p").css({"color":"#515151"});
							$(".roundBox").css("border","2px solid #7BC91E");
						}
					})
				}
				actionNav();
				/*滚动条滚动事件*/
				function actionLi(n){
					$(".nav li:eq("+n+")").addClass("action").siblings().removeClass("action");
				}
				
				$(document).scroll(function(){
					tp=$(document).scrollTop();
					console.log(tp);
					if(tp>0&&tp<910){
						actionLi(0);//首页
					}else if(tp>=910&&tp<1690){
						actionLi(1);//关于
					}else if(tp>=1690&&tp<2500){
						actionLi(2);//服务
					}else if(tp>=2500&&tp<3230){
						actionLi(3);//作品
					}else if(tp>3230){
						actionLi(4);//联系我们
					}
				});
			})