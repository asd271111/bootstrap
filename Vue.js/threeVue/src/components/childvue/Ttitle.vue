<template>
	<span>{{txt}}</span>
</template>
<script>
	export default{
		name:"Title",
		props:{
			txt:{//接收自定义文本
				type:String,
				default:"今日推荐"
			}
		}
	}

</script>