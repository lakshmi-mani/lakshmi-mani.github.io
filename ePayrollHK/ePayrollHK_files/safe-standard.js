var psjspAsid = "u4lnGAmLGt4I";
// safe-standard@gecko.js

var psjspAiso;
try {
	psjspAiso = (opener != null) && (typeof(opener.name) != "unknown") && (opener.psjspAwid != null);
} catch(e) {
	psjspAiso = false;
}
if (psjspAiso) {
	window.psjspAwid = opener.psjspAwid + 1;
	psjspAsid = psjspAsid + "_" + window.psjspAwid;
} else {
	window.psjspAwid = 1;
}
function psjspAn() {
	return (new Date()).getTime();
}
var psjspAs = psjspAn();
function psjspAst(f, t) {
	if ((psjspAn() - psjspAs) < 7200000) {
		return setTimeout(f, t * 1000);
	} else {
		return null;
	}
}
var psjspAol = true;
function psjspAow() {
	if (psjspAol || (1 == 1)) {
		var pswo = "menubar=0,location=0,scrollbars=auto,resizable=1,status=0,width=650,height=680";
		var pswn = "pscw_" + psjspAn();
		var url = "http://messenger.providesupport.com/messenger/justchat.html?ps_l=" + escape(document.location) + "";
		window.open(url, pswn, pswo);
	} else if (1 == 2) {
		document.location = "http://";
	}
}
var psjspAil;
var psjspAit;
function psjspApi() {
	var il;
	if (3 == 2) {
		il = window.pageXOffset + 50;
	} else if (3 == 3) {
		il = (window.innerWidth * 50 / 100) + window.pageXOffset;
	} else {
		il = 50;
	}
	il -= (286 / 2);
	var it;
	if (3 == 2) {
		it = window.pageYOffset + 50;
	} else if (3 == 3) {
		it = (window.innerHeight * 50 / 100) + window.pageYOffset;
	} else {
		it = 50;
	}
	it -= (220 / 2);
	if ((il != psjspAil) || (it != psjspAit)) {
		psjspAil = il;
		psjspAit = it;
		var d = document.getElementById('cijspA');
		if (d != null) {
			d.style.left  = Math.round(psjspAil) + "px";
			d.style.top  = Math.round(psjspAit) + "px";
		}
	}
	setTimeout("psjspApi()", 100);
}
var psjspAlc = 0;
function psjspAsi(t) {
	window.onscroll = psjspApi;
	window.onresize = psjspApi;
	psjspApi();
	psjspAlc = 0;
	var url = "http://messenger.providesupport.com/" + ((t == 2) ? "auto" : "chat") + "-invitation/justchat.html?ps_t=" + psjspAn() + "";
	var d = document.getElementById('cijspA');
	if (d != null) {
		d.innerHTML = '<iframe allowtransparency="true" style="background:transparent;width:286;height:220" src="' + url + 
			'" onload="psjspAld()" frameborder="no" width="286" height="220" scrolling="no"></iframe>';
	}
}
function psjspAld() {
	if (psjspAlc == 1) {
		var d = document.getElementById('cijspA');
		if (d != null) {
			d.innerHTML = "";
		}
	}
	psjspAlc++;
}
if (false) {
	psjspAsi(1);
}
var psjspAd = document.getElementById('scjspA');
if (psjspAd != null) {
	if (psjspAol || (1 == 1) || (1 == 2)) {
		var ctt = "";
		if (ctt != "") {
			tt = 'alt="' + ctt + '" title="' + ctt + '"';
		} else {
			tt = '';
		}
		if (false) {
			var p1 = '<table style="display:inline;border:0px;border-collapse:collapse;border-spacing:0;"><tr><td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="#" onclick="psjspAow(); return false;"><img name="psjspAimage" src="http://www.JustLogin.com/newsletterimage/livechat_small.gif"  style="border:0;display:block;margin:auto"';
			var p2 = '<td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="http://www.providesupport.com/pb/justchat" target="_blank"><img src="http://image.providesupport.com/';
			var p3 = 'style="border:0;display:block;margin:auto"></a></td></tr></table>';
			if ((0 >= 140) || (0 >= 0)) {
				psjspAd.innerHTML = p1+tt+'></a></td></tr><tr>'+p2+'lcbpsh.gif" width="140" height="17"'+p3;
			} else {
				psjspAd.innerHTML = p1+tt+'></a></td>'+p2+'lcbpsv.gif" width="17" height="140"'+p3;
			}
		} else {
			psjspAd.innerHTML = '<a href="#" onclick="psjspAow(); return false;"><img name="psjspAimage" src="http://www.JustLogin.com/newsletterimage/livechat_small.gif"  border="0"'+tt+'></a>';
		}
	} else {
		psjspAd.innerHTML = '';
	}
}
var psjspAop = false;
function psjspAco() {
	var w1 = psjspAci.width - 1;
	psjspAol = (w1 & 1) != 0;
	psjspAsb(psjspAol ? "http://www.JustLogin.com/newsletterimage/livechat_small.gif" : "http://www.JustLogin.com/newsletterimage/livechat_offline_small.gif");
	psjspAscf((w1 & 2) != 0);
	var h = psjspAci.height;

	if (h == 1) {
		psjspAop = false;

	// manual invitation
	} else if ((h == 2) && (!psjspAop)) {
		psjspAop = true;
		psjspAsi(1);
		//alert("Chat invitation in standard code");
		
	// auto-invitation
	} else if ((h == 3) && (!psjspAop)) {
		psjspAop = true;
		psjspAsi(2);
		//alert("Auto invitation in standard code");
	}
}
var psjspAci = new Image();
psjspAci.onload = psjspAco;
var psjspApm = true;
var psjspAcp = psjspApm ? 30 : 60;
var psjspAct = null;
function psjspAscf(p) {
	if (psjspApm != p) {
		psjspApm = p;
		psjspAcp = psjspApm ? 30 : 60;
		if (psjspAct != null) {
			clearTimeout(psjspAct);
			psjspAct = null;
		}
		psjspAct = psjspAst("psjspArc()", psjspAcp);
	}
}
function psjspArc() {
	psjspAct = psjspAst("psjspArc()", psjspAcp);
	try {
		psjspAci.src = "http://image.providesupport.com/cmd/justchat?" + "ps_t=" + psjspAn() + "&ps_l=" + escape(document.location) + "&ps_r=" + escape(document.referrer) + "&ps_s=" + psjspAsid + "" + "";
	} catch(e) {
	}
}
psjspArc();
var psjspAcb = "http://www.JustLogin.com/newsletterimage/livechat_small.gif";
function psjspAsb(b) {
	if (psjspAcb != b) {
		var i = document.images['psjspAimage'];
		if (i != null) {
			i.src = b;
		}
		psjspAcb = b;
	}
}

