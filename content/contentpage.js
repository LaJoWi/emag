!function(a){"use strict";function b(){if(window.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("msxml2.xmlhttp.6.0")}catch(a){}try{return new ActiveXObject("msxml2.xmlhttp.3.0")}catch(a){}try{return new ActiveXObject("msxml2.xmlhttp")}catch(a){}}function c(a,c){var d=b();d.addEventListener("readystatechange",function(){var a;if(4===d.readyState)try{a=JSON.parse(d.responseText),c(a)}catch(b){}}),d.open("get",a),d.send(null)}function d(a){var b=Array.prototype.slice.call(document.head.getElementsByTagName("meta")),c=b.filter(function(b){return b.name===a})[0];return c?c.content:void 0}"undefined"==typeof a.AS&&(a.AS={});var e="/index.html";a.AS.contentPage=function(b){var d=window.location.href.split("/"),e=d.splice(d.length-2).join("/");c("../issue.json",function(c){var d,f,g;d=c.id,c.variants.forEach(function(a){a.pages.forEach(function(a){a.url===e&&(f=a.id)})}),g=a.AS._redirectLink(d,f,b),window.location.href=g})},a.AS._redirectLink=function(a,b,c){return c=c||e,c+"#redirect/"+a+"/"+b};var f=d("as-reader-url");window.self===window.top&&a.AS.contentPage(f)}(this);