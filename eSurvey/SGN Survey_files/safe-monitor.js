var ps7KlWsid = "nb5otGKhNcQy";
// safe-monitor@gecko.js

var ps7KlWiso;
try {
	ps7KlWiso = (opener != null) && (typeof(opener.name) != "unknown") && (opener.ps7KlWwid != null);
} catch(e) {
	ps7KlWiso = false;
}
if (ps7KlWiso) {
	window.ps7KlWwid = opener.ps7KlWwid + 1;
	ps7KlWsid = ps7KlWsid + "_" + window.ps7KlWwid;
} else {
	window.ps7KlWwid = 1;
}
function ps7KlWn() {
	return (new Date()).getTime();
}
var ps7KlWs = ps7KlWn();
function ps7KlWst(f, t) {
	if ((ps7KlWn() - ps7KlWs) < 7200000) {
		return setTimeout(f, t * 1000);
	} else {
		return null;
	}
}
var ps7KlWil;
var ps7KlWit;
function ps7KlWpi() {
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
	if ((il != ps7KlWil) || (it != ps7KlWit)) {
		ps7KlWil = il;
		ps7KlWit = it;
		var d = document.getElementById('ci7KlW');
		if (d != null) {
			d.style.left  = Math.round(ps7KlWil) + "px";
			d.style.top  = Math.round(ps7KlWit) + "px";
		}
	}
	setTimeout("ps7KlWpi()", 100);
}
var ps7KlWlc = 0;
function ps7KlWsi(t) {
	window.onscroll = ps7KlWpi;
	window.onresize = ps7KlWpi;
	ps7KlWpi();
	ps7KlWlc = 0;
	var url = "https://messenger.providesupport.com/" + ((t == 2) ? "auto" : "chat") + "-invitation/justchat.html?ps_s=" + ps7KlWsid + "&ps_t=" + ps7KlWn() + "";
	var d = document.getElementById('ci7KlW');
	if (d != null) {
		d.innerHTML = '<iframe allowtransparency="true" style="background:transparent;width:286;height:220" src="' + url + 
			'" onload="ps7KlWld()" frameborder="no" width="286" height="220" scrolling="no"></iframe>';
	}
}
function ps7KlWld() {
	if (ps7KlWlc == 1) {
		var d = document.getElementById('ci7KlW');
		if (d != null) {
			d.innerHTML = "";
		}
	}
	ps7KlWlc++;
}
if (false) {
	ps7KlWsi(1);
}
var ps7KlWop = false;
function ps7KlWco() {
	var w1 = ps7KlWci.width - 1;
	ps7KlWscf((w1 & 2) != 0);
	var h = ps7KlWci.height;

	if (h == 1) {
		ps7KlWop = false;

	// manual invitation
	} else if ((h == 2) && (!ps7KlWop)) {
		ps7KlWop = true;
		ps7KlWsi(1);

	// auto invitation
	} else if ((h == 3) && (!ps7KlWop)) {
		ps7KlWop = true;
		ps7KlWsi(2);
	}
}
var ps7KlWci = new Image();
ps7KlWci.onload = ps7KlWco;
var ps7KlWpm = false;
var ps7KlWcp = ps7KlWpm ? 30 : 60;
var ps7KlWct = null;
function ps7KlWscf(p) {
	if (ps7KlWpm != p) {
		ps7KlWpm = p;
		ps7KlWcp = ps7KlWpm ? 30 : 60;
		if (ps7KlWct != null) {
			clearTimeout(ps7KlWct);
			ps7KlWct = null;
		}
		ps7KlWct = ps7KlWst("ps7KlWrc()", ps7KlWcp);
	}
}
function ps7KlWrc() {
	ps7KlWct = ps7KlWst("ps7KlWrc()", ps7KlWcp);
	try {
		ps7KlWci.src = "https://image.providesupport.com/cmd/justchat?" + "ps_t=" + ps7KlWn() + "&ps_l=" + escape(document.location) + "&ps_r=" + escape(document.referrer) + "&ps_s=" + ps7KlWsid + "" + "";
	} catch(e) {
	}
}
ps7KlWrc();


