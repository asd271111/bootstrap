<template>
		<transition name="scalebox" mode='out-in'>
			
		<div class="guimg">
				<div class="logob">
					<span class="cityR"></span>
					<p>
						<img src="../assets/yt.png" />
					</p>
				</div>
				<p></p>
				<div @touchstart="changeBg">
					<router-link to="/Main"></router-link>
					
				</div>
		</div>
	</transition>
</template>
<script>
	export default{
		name:"Welcome",
		methods:{
			changeBg(){
				console.log("跳转到main组件");
				this.$emit("bgchange");
			}
		}
	}
</script>
<style>

	@keyframes cityRound{
		from{transform: rotate(0deg);}
		to{transform: rotate(360deg);}
	}
	.cityR{ animation: cityRound 10s 1s linear infinite;}
	
	/*vue动画*/
	.yeclass{width: 100%; height: 100%; position: absolute;}
	
	.scalebox-enter-active{
		/*animation: scalebox-in 1s ease-out;*/
		transition: all 1s;
	}
	.scalebox-leave-active{
		opacity: 0;
		transform:translateY(-500px);opacity: 0;
		transition: all 1s  ease-in;
		/*animation: scalebox-out 1s ease-out;*/
	}
	
	.scalebox-enter {
		transform: scale(0,0); opacity: 0;
	}
</style>