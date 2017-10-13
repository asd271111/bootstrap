<template>
	<input type="button" :value="txt":style="{width:setW,float:isF}"/>
</template>
<script>
	
	export default{
		name:"Inputbtn",
		props:{
				txt:{//接收自定义文本
					type:String,
					default:"登录"
				},
				getW:{//接收自定义宽度
					type:Number,
					default:48
				},
				getF:{//接收自定义浮动
					type:Boolean,
					default:true
				}
			},
			computed:{
				setW:function(){//设置自定义
					return this.getW+"%";
				},
				isF:function(){//浮动方向的确定
					return this.getF?"left":"right";
				}
			}
	}
</script>
<style></style>