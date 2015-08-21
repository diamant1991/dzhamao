	$(document).ready(function(){
		$('.aside-menu li').on('click', function(){
			$(this).toggleClass('active').siblings().removeClass("active");
		})
	})