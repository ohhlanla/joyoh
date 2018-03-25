$(window).load(function(){
	if($("#panel #advanced")[0]!=undefined){
		var wrapper = $("#wrapper"),
			advanced = $("#panel #advanced"),
			wrapperMargin=parseInt(advanced.css("marginTop")),
			MSIE8 = ($.browser.msie) && ($.browser.version == 8);
		$("head").append('<style>.fixed{position:fixed !important;}</style>')
		if(wrapperMargin==0){
			wrapper.css({"marginTop":advanced.height()});
			wrapperMargin = advanced.height();
		}else{
			wrapperMargin = 0;	
		}
		
		advanced.addClass("fixed");
		$(".trigger").click(
			function(){
				if($.cookie("panel2")){
					wrapperMargin = advanced.height();
					wrapper.animate({"marginTop":wrapperMargin},"fast");
				}else{
					wrapperMargin = 0;
					wrapper.animate({"marginTop":wrapperMargin},"fast");
				}
			}
		)
	}
	$(window).resize(function(){
		if(!MSIE8){
			if($(document).outerWidth(true)<980){
				wrapper.css({"marginTop":'0'});
			}else{
				if(parseInt(advanced.css("marginTop"))==0){
					wrapper.css({"marginTop":wrapperMargin-1});
				}
			}
		}
	}).trigger("resize")
})