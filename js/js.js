$(function(){ 
		//当鼠标移动到zhongod上的时切换另一张照片（兼容ie6）
	$('#right_content').hover(function(){
		$('#right_content_inner').stop(true,true).slideDown('slow');
	},function(){
		$('#right_content_inner').stop(true,true).slideUp('fast');	
	});   
	
		//about，link中的音乐网址收藏鼠标移动的效果（兼容ie6）
	$('.zhongod li,.music li,.address li').hover(function(){
		$(this).addClass('hover');			
			},function(){		
		$(this).removeClass('hover');		
		});
		//nva中theemes鼠标移动曲效果（兼容ie6）
	$('#nav li#themes').hover(function(){									  
		$(this).children('ul').addClass('hover');		
			}, function(){
		$(this).children('ul').removeClass('hover');	
		});
		
	//显示列表中加类的dd
    $('.list .show dd').show('slow');
	$('.list dl').click(function(){
		//点击dl找到子元素中的dd执行动画显示，同时兄弟结点也执行动画隐藏
		//dt上的图标也相应的改变
		//为加类的dd单独加上class
		$(this).children('dd').slideDown().end().siblings().children('dd').slideUp();
		$(this).children('dt').addClass('icon').end().siblings().children('dt').removeClass();
		$('.list .show').children('dt').addClass('show-A');
	});
	$('.list .show').click(function(){
		$(this).children('dt').addClass('show-B');
	});
	$('.all-show-btn').click(function(){
		$('.list dl dd').slideDown();
		$('.list dl dt').addClass('icon');
		$('.list .show dt').addClass('show-B');
	});
	$('.all-hide-btn').click(function(){
		$('.list dl dd').slideUp();
		$('.list dl dt').removeClass();
		$('.list .show dt').addClass('show-A');		
	});
	
	//隐藏第一个div后的所有内容
	//点击li显示相应的div，li与div通过index索引相关联
	$('#box_content div:gt(0)').hide();
		var tabfirst_li=$('.tabfirst li');
		tabfirst_li.click(function(){
			$(this).addClass('tabin').siblings().removeClass();
		   var tabfirst_li_index = tabfirst_li.index(this);
		   $('#box_content div').eq(tabfirst_li_index).show().siblings().hide();
		},function(){});
});
