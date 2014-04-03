function do_search_js(search_string){
	jQuery.post(ajax_url,jQuery('#search_form').serialize(),
		function(response_from_the_search_function){
			jQuery("#search_result").html(response_from_the_search_function);	
		}
	);
}

