function GoTo()
{
	if (document.login.CompanyName.value == '') {
		alert("Please select the Country.");
		return; 
	}  
	else {
		window.open('http://www.justlogin.com/lostpwd.asp?getcompanyID=' + document.login.CompanyName.value); 
	}   
}