(function( $ ){
  $.fn.dynoPosition = function(options) {
		var defaults = { 
		    dynamicDiv: "#" + this.attr("id"),
				compareDiv: "#sidebar",
				betweenElement: "div"
		};

		var options = $.extend({}, defaults, options);
		inserted_ad = 0;
		$(options.dynamicDiv).hide();
		guide = $(options.compareDiv).offset().top + $(options.compareDiv).height();
		$(options.betweenElement).each(function(index){
			bottom = $(this).offset().top + $(this).height();
			if(guide <= bottom && inserted_ad == 0) {
				$(options.dynamicDiv).show();
				dynamicDivCode = $(options.dynamicDiv).clone();
				$(options.dynamicDiv).hide();
				$(this).after(dynamicDivCode);
				inserted_ad = 1;
			}
		});
		
		if(inserted_ad == 0) {
			$(options.dynamicDiv).show();
		}
  };	
})( jQuery );

