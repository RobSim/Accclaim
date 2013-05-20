		$(document).ready(function(){
			getShotsList(1);
		
			$("nav .pagination").click(function(e){
				e.preventDefault();
				
				$(this).siblings(".sel").removeClass("sel");
				$(this).addClass("sel");
				
				var newnum = $(this).html();
				getShotsList(newnum);
			});
			
			function getShotsList(p){
				$.jribbble.getShotsThatPlayerLikes("accclaim", function(data){
	    		var html = [];
	
	    		$.each(data.shots, function (i, shot) {
	       html.push('<li>');
	       html.push('<div class="sidebar">')
	       html.push('<a class="profpic" href="' + shot.player.url + '"><img src="' + shot.player.avatar_url + '" alt="' + shot.player.name + '"></a> ');
	       // html.push('<a class="like" href="' + shot.url + '/fans" title="Like"></a>')
	       // html.push('<a class="follow" href="' + shot.player.url + '/followers" title="Follow"></a>')
	       // html.push('<a class="bucket" href="' + shot.url + '/buckets" title="Bucket"></a>')
	       html.push('</div>')
	       html.push('<a class="shots" href="' + shot.url + '" target="_blank" class="linkc">');
	       html.push('<img  src="' + shot.image_teaser_url + '" alt="' + shot.title + '">');
						html.push('</a></li>');
	    		});
	
	    	$('#shotsListing').html(html.join(''));
	    	}, {page: p, per_page: 20});			
			}

		});