$(document).ready(function(){
	panelIcon();
	transitionBanner();
});

function panelIcon(){
	var painel = $(".panel");
	painel.each(function(){
		var icon = $(this).find("span");
		icon.click(function(){
			var content = painel.find(".collapse");			
			var classe = content.hasClass('in');

			if(classe){ 
				icon.removeClass('glyphicon glyphicon-chevron-up');
				icon.addClass('glyphicon glyphicon-chevron-down');
				}
			else {
				icon.removeClass("glyphicon glyphicon-chevron-down");
				icon.addClass('glyphicon glyphicon-chevron-up');
			}
		});
	});
}
function transitionBanner(){
	$("#collapse-navbar").on("show.bs.collapse",function(){
		$(".frase-banner").css('transform','translate(-50%,10%)');
	});
	$("#collapse-navbar").on("hide.bs.collapse",function(){
		$(".frase-banner").css('transform','translate(-50%,-50%)');
	})
}
