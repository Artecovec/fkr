$(function(){
	
	var r = Raphael('map', 600, 1000),
		attributes = {
            fill: '#7596be',
            stroke: '#fff',
            'stroke-width': 1,
            'stroke-linejoin': 'round'
        },
		arr = new Array();
	
	for (var country in paths) {
		
		var obj = r.path(paths[country].path);
		
		obj.attr(attributes);
		
		arr[obj.id] = country;
		
		obj
		.hover(function(){
			this.animate({
				fill: '#e7a614'
			}, 150);
		}, function(){
			this.animate({
				fill: attributes.fill
			}, 150);
		})
		.hover(function(){
			document.location.hash = arr[this.id];

			var point = this.getBBox(0);

			$('#map').next('.point').remove();

			$('#map').after($('<div />').addClass('point'));

			$('.point')
			.html(paths[arr[this.id]].name)
			.prepend($('<img />').attr('src', 'flags/'+arr[this.id]+'.png'))
			.css({
				left: point.x+(point.width/3)-90,
				top: point.y+(point.height/3)-45
			})
			.fadeIn(10);
		},
            function() {
                $('.point').remove();
            }
        );
	}

});

