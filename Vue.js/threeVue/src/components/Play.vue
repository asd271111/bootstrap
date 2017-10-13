<template>
	<transition name="playbox" mode="out-in">
		<div class="micbg">
			<div class="micP" >
				<audio :src="songNow.song" id="mm" autoplay></audio>
				<Miutop></Miutop>
				<Miutxt></Miutxt>
				<Cdbox :isr="isplay" :songimg="songNow.img"> 
				</Cdbox>
				<div class="micF">
					<Miumsg :songname="songNow.title"
						:songer="songNow.author">
					</Miumsg>
					<Playnow></Playnow>
					<Playbtn @playnext="nextchange" 
						@playprev="prevchange"
						@playnow="playmusie"
						:isp="isplay">
					</Playbtn>
					
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	import Miutop from './childvue/Miutop.vue';
	import Miutxt from './childvue/Miutxt.vue';
	import Cdbox from './childvue/Cdbox.vue';
	import Miumsg from './childvue/Miumsg.vue';
	import Playnow from './childvue/Playnow.vue';
	import Playbtn from './childvue/Playbtn.vue';
	export default{
		name:"Play",
		props:["songlist"],//songlist获取传递的数据，props是父级向子组件传递数据，并且还可以设置规则进行验证
		data(){//默认播放第一首歌，父组件当中的data是函数，
			return {
				songl:this.songlist,//整体的数据列表
				songNow:this.songlist[0],//当前歌曲的信息
				songindex:0,//歌曲的序号
				isplay:true,//自定义数据isplay为布尔值，决定当前播放状态，图片的显示以及光碟滚动效果
				audioBox:{}//音乐播放与暂停的操作
			}
		},
		methods:{
			nextchange(){//playnext事件被触发，就会执行nextchange函数
				if(this.songindex<this.songl.length-1){
					this.songindex+=1;//设置播放下下一首歌
				}else{
					this.songindex=0;
				}
					
					this.songNow=this.songl[this.songindex];//修改当前播放的歌曲
				
				
			},
			prevchange(){
				if(this.songindex>0){
					this.songindex-=1;
				}else{
					this.songindex=this.songl.length-1;
				}
					console.log("父组件触发了"+this.songindex);
					this.songNow=this.songl[this.songindex];
				
			},
			playmusie(){//播放与暂停的操作
				this.audioBox=document.getElementById("mm");//先获取音乐的id
				if(this.isplay){//
					this.audioBox.pause();
				}else{
					this.audioBox.play();
				};
				this.isplay=!this.isplay;//进行播放及暂停的切换
				console.log("父级函数触发了"+this.isplay);
			}
		},
		components:{
			Miutop,Miutxt,Cdbox,Miumsg,Playnow,Playbtn
		}
	}
</script>
<style>
	.micbg{  width: 100%; height:100%;background:#474747;
	position: absolute; left: 0;top:0;}
	/*.micP{ width: 100%;  }*/
	.playbox-enter-active{
		transition: all 1s ease-in;
	}
	.playbox-enter{
		left:500px;
	}
</style>