/*window.onload=setInterval(function(){
	var username=$('#username').value;
	var passwd=$('#passwd').value;
	if(username=='')
		$('#info1').innerText="请输入用户名";
	else
		$('#info1').innerText="";
	if(passwd=='')
		$("#info2").innerText="请输入密码";
	else
		$("#info2").innerText="";
},1000);

*/
function inform(){
	var username=document.getElementById("username");
	var passwd=document.getElementById('passwd');
	if(username.value==''){
		document.getElementById('info1').innerText="请输入用户名";
		username.style.background="#fff";
	}
	else{
		document.getElementById('info1').innerText="";
		username.style.background="#faffbd";
	}
	if(passwd.value==''){
		document.getElementById("info2").innerText="请输入密码";
		passwd.style.background="#fff";
	}
	else{
		document.getElementById("info2").innerText="";
		passwd.style.background="#faffbd";
	}	
}
function log(){
	var set = setInterval(inform,100);
	var username=document.getElementById("username").value;
	var passwd=document.getElementById('passwd').value;
	if(username=='123456'&&passwd=='654321')
		location.href="http://www1.szu.edu.cn/szu.asp"; 
	else{
		document.getElementById('info3').innerText="您提供的用户名或密码有误";
	}
}
var f=0;
function check_box(){
	var box=document.getElementById('checkbox');
	if(f==0){
		box.style.background="#2c8f7b";
		f++;
		box.innerHTML="<span class='glyphicon glyphicon-ok' style='color:white''></span>";

	}
	else{
		box.style.background="transparent";
		box.innerHTML="<span class=''></span>";
		f=0;
	}
}