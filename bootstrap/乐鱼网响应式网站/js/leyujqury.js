var pixclPatio = 1 / window.devicePixelRatio; 
				document.write('<meta name="viewport" content="width=device-width,initial-scale='+pixclPatio+',minimum-scale='+pixclPatio+',maximum-scale='+pixclPatio+',user-scalable=no" />');
			var rootHtml = document.getElementsByTagName('html')[0];
var rootPx = rootHtml.getBoundingClientRect().width;
rootHtml.style.fontSize = rootPx / 16 + 'px';