<template>
  <div id="app " :class="{yellowBg}">
  	<keep-alive>
  		<router-view :getdata="listdata" @setarr="addoption" @bgchange="cBg" :songlist="songs" ></router-view>
    </keep-alive> 
  
  </div>
</template>

<script>
var songData=[
				{ title:"We Can't Stop",img:"../static/1.jpg",author:"Miley Cyrus",song:"static/1.mp3"},
				{ title:"Simon Curtis",img:"../static/2.jpg",author:"Flesh",song:"static/2.mp3"},
				{ title:"Animus Vox",img:"../static/3.jpg",author:"The Glitch Mob",song:"static/3.mp3"},
				{ title:"Animals",img:"../static/4.jpg",author:"Maroon",song:"static/4.mp3"},
//				{ title:"君生我未生",img:"assets/1.jpg",author:"于毅",song:"mic/5.mp3"}
			];
export default {
  name: 'app',
  data(){
  	return{
  		yellowBg:true,
  		listdata:songData,//本地的所有歌曲
//		songrs:songData,
			songs:[{ title:"We Can't Stop",img:"../static/1.jpg",author:"Miley Cyrus",song:"static/1.mp3"}]//歌曲的目录
  		}
  },
  methods:{
			addoption(obj){//被父组件触发的setarr事件进而执行addoption函数，从而把当前点击的单元项内容添加到songs歌曲目录中,
				this.songs.unshift(obj);//把单元项的内容添加到songs数组中
				console.log("最终在根元素获取的内容是："+obj);
				
			},
			cBg(){
				this.yellowBg=false;
			}
		}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
