jQuery(document).ready(function($){
	
	//-----------------------------------------------------------------
	// NectarLove
	//-----------------------------------------------------------------
	
	$('.mypassion-like').on('click', function() {
		
			var $likeLink = $(this);
			var $id = $(this).attr('id');
			
			if($likeLink.hasClass('liked')) return false;
	
			var $dataToPass = {
				action: 'mypassion-like', 
				likes_id: $id 
			}
			
			$.post(mypassionLike.ajaxurl, $dataToPass, function(data){
				$likeLink.addClass('liked').attr('title','You already liked this!');
				
				$likeLink.find(".mypassion-like-count").html(data);
			});
		
			return false;
	});
	
	
});