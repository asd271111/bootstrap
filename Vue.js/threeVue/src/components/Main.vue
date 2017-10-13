<template>
	<transition name="mainbox" mode="out-in">
		<div class="micbg">
			<div class="micP ">
				<div class="ttp"></div>	
				<div class="micT clearFloat">
					<a href="javascript" class=" mictA fl"><img  src="../assets/mic01.png"/></a>
					<a href="javascript" class="mictB fr"><img src="../assets/mic02.png"/></a>
				</div>
				<Banner></Banner>
				<div class="miclistF">
					<Ttitle></Ttitle>
					<Today :childdata="getdata"@todayindex="setval"></Today>
					<Ttitle txt="精选集推荐"></Ttitle>
					<Mussie :sdata="getdata" @setindex="setval"></Mussie>
				</div> 
			</div>
		</div>
	</transition>
</template>
<script>
	import Today from './childvue/Today.vue';
	import Banner from './childvue/Banner.vue';
	import Ttitle from './childvue/Ttitle.vue';
	import Mussie from './childvue/Mussie.vue';
	export default{
		name:"Main",
		props:["getdata"],
		methods:{
			setval(val){//被自定义事件setindex触发的函数setval，接收来自子组件n的值
				console.log("父组件接收到的序号是："+val);
				var obj=this.getdata[val];//获取当前getdata单元项的内容
				this.$emit("setarr",obj);//触发自定义setarr事件并传递obj
			}
		},
		components:{
			Today,
			Banner,
			Ttitle,
			Mussie
		}
	}
				
</script>
<style>
	
	.micbg{  width: 100%; height:100%;background:  #474747;}
	

	.mainbox-enter-active{
		transform: translateY(0px);
		transition: all 0.5s ease-in;
	}
	.mainbox-leave-active{
		transition: all 0.5s ease-in;
	}
	.mainbox-enter{
		transform: translateY(1500px);
	}
	.mainbox-leave-active{
		transform: translateX(-500px);
	}
</style>