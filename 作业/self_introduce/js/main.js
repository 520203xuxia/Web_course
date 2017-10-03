/*//设置别名
requirejs.config({
	paths:{
		jquery:'jquery-2.1.1.min',
	}
});

//引入模块
requirejs(['jquery','scrollto'],function($,scrollto){
	//$('body').css('background-color','red');
	var scroll=new scrollto.ScrollTo({

	})
	$('#backTop').on('click',scroll.move);
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});

	checkPosition($(window).height());
	//慢慢滚到顶部
	function move(){
		$('html,body').animate({
			scrollTop:0
		},800);
	}
	//一下子滚到顶部
	function go(){
		$('html,body').scrollTop(0);
	}
	function checkPosition(pos){
		if($(window).scrollTop()>pos){
			$('#backTop').fadeIn();
		}else{
			$('#backTop').fadeOut();
		}
	}
})*/

function changestatus(obj,str){
	var sub1=document.getElementById('sub1');
	var sub2=document.getElementById('sub2');
	var childs1=sub1.children;
	var childs2=sub2.children;
	var datatoggle=document.getElementById(str);
	for(var i=0;i<childs1.length;i++)
	{
		childs1[i].className="";
		childs2[i].style.display="none";
	}
		obj.className="active";
		datatoggle.style.display="block";

}