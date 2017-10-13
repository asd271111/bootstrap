$(function(){
	$("#regBtn").click(function(){
		var user=$("#user").val();//获取用户名输入框的值
		var psd=$("#password").val();//获取密码框输入的值
		if(user&&psd){//判断当前输入框是否输入内容
			$.post("reg.php",{//使用ajax的异步传送
				user:user,
				password:psd
			},function(data){
				alert(data)
			})
		}else{
			alert("用户名密码不能为空！");
		}
	})
})