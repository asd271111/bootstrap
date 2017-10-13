<template>
	<div class="playL">
		<a href="javascript:void(0)" class="hdicon-loop"></a>
		<a href="javascript:void(0)" class="hdicon-previous2" @touchstart="songPlayPrev"></a>
		<a href="javascript:void(0)" :class="isp? 'hdicon-pause2' :'hdicon-play3'" @touchstart="songPlay"></a>
		<a href="javascript:void(0)" class="hdicon-next2" @touchstart="songPlayNext"></a>
		<a href="javascript:void(0)"class="hdicon-list2"></a>
	</div>
</template>
<script>
	export default{
		name:"Playbtn",
		props:["isp"],
		methods:{
				songPlayNext(){//通过下一首来触发父级组件的playnext自定义函数
					console.log("子组件触发了");
					this.$emit("playnext");
				},
				songPlayPrev(){
					console.log("子组件触发了");
					this.$emit("playprev");
				},
				songPlay(){//点击播放图片，触发父级组件的playnow自定义事件，实现歌曲的播放与暂停，图片的更换，需要定义isplay为布尔值，决定当前播放与暂停，图片的显示
					this.$emit("playnow");
				}
		}
	}
</script>
<style></style>