<template>
	<div class="micI" :style="{backgroundImage:bg}"  @click="bgimg" >
		<div class="runy playing" :style="{animationPlayState:isRound,backgroundImage:bg}" >
			<div class="opbg">
				<span></span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"Cdbox",
		props:["isr","songimg"],//接收父级的数据，isr是接收来自父级的isplay对当前光碟的播放与暂停
		computed:{//检测到数据发生变动时，会执行对相应数据有引用的函数
			isRound:function(){
				return this.isr?"running":"paused"
			},
			bg:function(){
				console.log(this.songimg);
				return 'url('+this.songimg+')';
			}
		},
		methods:{
			bgimg(){
				console.log("img");
			}
		}
	}
</script>
<style>
	@keyframes  playRound{ /* 播放光碟的转动*/
		from{transform: rotate(0deg);}
		to{transform: rotate(360deg);}
	}
	.playing{ animation: playRound 5s linear infinite;} /*调用转动的属性 animation是动画，linear线性  infinite是无限循环*/
</style>