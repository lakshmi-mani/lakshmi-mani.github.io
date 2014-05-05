// Dec 12,2007

function commonaJax2String(url) {
        try
        {
            // Firefox, Opera 8.0+, Safari
            httpRequest = new XMLHttpRequest();
        }
        catch (e)
        {
            // Internet Explorer
            try
            {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e)
            {
                try
                {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e)
                {
                    alert("Your browser does not support AJAX...");
                }
            }
        }
        
        httpRequest.onreadystatechange = function () {
	        if (httpRequest.readyState == 4){ 
	            commonaJaxCallBack(httpRequest.responseText);
				//alert("000www["+httpRequest.responseText+"]");
	        }
        };      
         
        httpRequest.open('GET',url, true);
        httpRequest.send(null);

}
    