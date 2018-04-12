function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').fadeIn();
	}else{
		$('#gotop').fadeOut();
	}
}
$(document).ready(function(e) {
	b();
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
	})
});
/* 转载请保留版权信息：JS代码网 www.juheweb.com */
$(window).scroll(function(e){
	b();		
})
