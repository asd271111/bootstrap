<template>
	<div>
 		<ul class="listTop">
			<li v-for="(item,num) in childdata">
				<img class="fl" :src="item.img"  />
				<div class="micLtxt" @touchstart="getIndex(num)">
					<h2>{{item.title}}</h2>
					<p>{{item.author}}</p>
					<router-link  to="/Play"></router-link>
				</div>
			</li>
		</ul>
 	</div>
</template>
<script>
	export default{
		name:"Today",
		props:["childdata"],//接收父组件的数据
	 	methods:{
	 		getIndex(n){//获取当前的序号，来触发父组件进行单元项内容的输出
	 			console.log("当前的序号是："+n);
	 			this.$emit("todayindex",n);
	 		}
	 	}
	}
</script>
<style></style>