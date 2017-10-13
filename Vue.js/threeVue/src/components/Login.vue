<template>
	<transition name="scbox" mode="out-in">
		<div class="login">
			<span><img src="../assets/title.png"/></span>
			<input type="text" id="name" placeholder="请输入用户名" />
			<input type="text" id="psd"placeholder="请输入密码" />
			<slot name="inputAdd"></slot>
			<p class="Btnn clearFloat" >
				<router-link to="/Welcome"><Iuputbtn :getW='40'ront></Iuputbtn></router-link>
				<Iuputbtn :getW='40' txt="注册" :getF="false"></Iuputbtn>
			</p>
			<a href="javascript:void(0)" class="memsg" v-if="isshow">登录遇到问题</a>
		</div>
	</transition>
</template>
<script>
//引入组件组件
    import Iuputbtn from './childvue/Iuputbtn.vue';
	export default{
		name:"Login",
		props:{
			isshow:{
				type:Boolean,
				default:true
			}
		},
		components:{//注册子组件
			Iuputbtn
		}
	}
</script>
<style>
/*vue动画*/
 	.scbox-leave-active{
		transform: scale(0.5,0.5);
		opacity: 0;
		border-radius: 50%;
		transition: all 0.5s ease-in;
   	}
</style>