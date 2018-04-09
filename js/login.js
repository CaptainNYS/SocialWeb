

$(function(){
   // 登陆
	$("#login").click(function () {    //显示登陆框和遮罩层，且登陆框覆盖部分遮罩层，因为两个z-index属性101>100
    $(".hide-center").fadeIn("slow");
    $(".overCurtain").fadeIn("slow");
})
$("#close").click(function () {
    $(".hide-center").fadeOut("fast")
    $(".overCurtain").fadeOut("slow")
})

})


