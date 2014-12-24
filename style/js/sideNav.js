$(function() {
	sideNav();
});



function sideNav() {
	$('.rightNav').bind('click',function(){
		sideNavText();
	});
};

function sideNavText(){
	var sideNavHtml='';
	sideNavHtml+=''+
	'<div class="sideNav">'+
		'<ul>'+
			'<li>'+
				'<div class="home pLeft">'+
					'<div class="nav">'+
						'<span>首页</span>'+
					'</div>'+
				'</div>'+
			'</li>'+
			'<li>'+
				'<div class="product pLeft">'+
					'<div class="nav tArrow">'+
						'<span>产品分类</span>'+
					'</div>'+
				'</div>'+
			'</li>'+
			'<div class="subfolder" style="display:block;">'+
				'<ul>'+
					'<li><a href="#">合约双机</a></li>'+
					'<li><a href="#">合约单机</a></li>'+
					'<li><a href="#">裸机</a></li>'+
					'<li><a href="#">电脑办公</a></li>'+
				'</ul>'+
			'</div>'+
			'<li>'+
				'<div class="individual pLeft">'+
					'<div class="nav bArrow">'+
						'<span>个人中心</span>'+
					'</div>'+
				'</div>'+
			'</li>'+
			'<li>'+
				'<div class="installment pLeft">'+
					'<div class="nav">'+
						'<span>分期介绍</span>'+
					'</div>'+
				'</div>'+
			'</li>'+
			'<li>'+
				'<div class="advisory pLeft">'+
					'<div class="nav">'+
						'<span>在线咨询</span>'+
					'</div>'+
				'</div>'+
			'</li>'+
		'</ul>'+
	'</div>';
	var minHeight=$('.container-fluid').height();
	if($('.sideNav').length==0){
		$('body').append(sideNavHtml);
		$('.container-fluid').css({
			position:'absolute',
			width:'100%'
		});
		$('.sideNav').css('minHeight',minHeight+'px');
		$('.container-fluid').animate({left:'-218px'});
		$('.sideNav').animate({right:'0px'});
	}else{
		$('.container-fluid').animate({left:'0px'});
		$('.sideNav').animate({right:'-218px'},function(){
			$('.sideNav').remove('.sideNav');
			$('.container-fluid').removeAttr('style');
		});

	}
}