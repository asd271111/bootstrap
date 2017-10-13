<template>
		<div>
			<ul class="listb">
					<li v-for="(item,index) in sdata" @touchstart="getIndex(index)">
						<router-link to="/Play">
							<img :src="item.img"/>
							<h2>{{item.title}}</h2>
							<p>{{item.author}}</p>
						</router-link>
					</li>
			</ul>
			
		</div>
</template>
<script>
	export default{
		name:"Mussie",
		props:["sdata"],
		methods:{
			getIndex(n){//获取当前点击单元项的序号，并触发父组件自定义的函数setindex，把序号传给父组件
				console.log("当前的序号是："+n);
				this.$emit("setindex",n);//触发父组件自定义的函数setindex，把序号传给父组件
				
			}
		}
	}
</script>
<style></style>