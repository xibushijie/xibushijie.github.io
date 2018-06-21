$(function(){

	// 侧栏tab
	$(".sidebar dl dd").click(function() {
		$(this).attr('id', 'on').siblings().removeAttr('id on');
		var tab_01 = $(".sidebar dl dd").index(this)
		$(".static-list").eq(tab_01).fadeIn().siblings('.static-list').hide();
	});

	//DEMO tab
	$(".tab li").click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		var li_index = $(".tab li").index(this)
		$(".tab-list").eq(li_index).fadeIn().siblings('.tab-list').hide();
	});

	// scroll-title
	function ul(){	
		t = parseInt(x.css('top'));
		y.css('top','30px');	
		x.animate({top: t - 30 + 'px'},'slow');	//30为每个li的高度
		if(Math.abs(t) == h-30){ //30为每个li的高度
			y.animate({top:'0px'},'slow');
			z=x;
			x=y;
			y=z;
		}
		setTimeout(ul,3000);//滚动间隔时间 现在是3秒
	}
	$(document).ready(function(){
		$('.swap').html($('.scroll-text').html());
		x = $('.scroll-text');
		y = $('.swap');
		h = $('.scroll-text li').length * 30; //30为每个li的高度
		setTimeout(ul,3000);//滚动间隔时间 现在是3秒
		
	})
 
	// form表单
	$(".submit").click(function(){
		var name = $("input[name='name']").val();
		var phone = $("input[name='phone']").val();
		var content = $("textarea[name='content']").val();

		if(name=='')
		{
			alert("请输入姓名");
			return false;
		}

		if(phone==''){
			alert('请填写手机号码');
			return false;
		}

		if(content=='')
		{
			alert('请填写内容');
			return false;
		}

		alert("提交完成！");
	});


	//accordion
	$(".accordion-title").click(function(){
		$(this).toggleClass("accordion-on").siblings(".accordion-title").removeClass("accordion-on");
		// 修改数字控制速度， slideUp(500)控制卷起速度
		$(this).next(".accordion-content").slideToggle(500).siblings(".accordion-content").slideUp(500);
	});


});