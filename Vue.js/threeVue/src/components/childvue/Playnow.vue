<template>
	
	<div class="musline"id="musline"
						@touchstart="movestart"
						@touchend="movestop"
					>
		<hr class="playline" id="nowLine"/>
			
		
		<a href="javascript:void(0)" class="playactive" id="nowIcon" >
			<i></i>
		</a>
	</div>
</template>
<script>
	export default{
		name:"Playnow",
		data(){
			return{
				istouch:false,//检测触屏的发生
				iconX:""
			}
		},
		mounted(){//钩子函数，是vue对象生命周期的个个阶段，mounted是组件编译之后
			setInterval(function(){
				var thow=document.querySelector("#mm").currentTime;//当前的时间
				var tTotal=document.querySelector("#mm").duration;//总时间
				var divW=640;//获取进度条最外层总宽度
				var lw=thow/tTotal*divW;                   //当前进度条的长度
				document.querySelector("#nowLine").setAttribute("style","width:"+lw+"px");//设置进度条的宽度
				document.querySelector("#nowIcon").setAttribute("style","left:"+lw+"px");//设置白圆的变化
//						console.log("当时间是"+thow);
			},500)
		},
		methods:{
			movestart(e){//检测当前是否触发触屏事件
				
				this.istouch=true;//发生触屏事件
				if(this.istouch){
					var tx=e.touches[0].pageX;//获取触屏的x轴
					var boxw=e.target.getBoundingClientRect().left;//获取鼠标相对事件源的坐标
					this.iconX=tx-boxw;//触点相对musline的x轴
					var divW=640;
					var tTotal=document.querySelector("#mm").duration;//总时间
					document.querySelector("#mm").currentTime=this.iconX/divW*tTotal;//设置当前的时间
					console.log("触屏移动"+this.iconX/divW*tTotal);
				}
				console.log("发生触屏");
			},
			movestop(){
				this.istouch=false;
				console.log("结束触屏");
			}
		}
	}
</script>
<style></style>