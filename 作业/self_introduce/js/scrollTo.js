//通过define定义一个模块
define(['jquery'],function ($){
	function ScrollTo(ops){
		this.opts=$.extend({},ScrollTo.DEFAULTS,opts);
		this.$el=$('html,body');
	}
	ScrollTo.prototype.move=function(){
		var opts=this.opts;
		this.$el.animate({
			scrollTop:opts.dest
		}, opts.speed);
	};
	ScrollTo.prototype.go=function(){
		this.$el.scrollTop(opts.dest);
	};			
	ScrollTo.DEFAULTS={
		dest:0,
		speed:800
	};
	return {
		ScrollTo:ScrollTo;
	}
})