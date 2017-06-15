/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

(function(e){var f={},a=function(a){var a=a.toLowerCase(),b={},a=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];b[a[1]]=!0;b.version=a[2]||"0";return b}(navigator.userAgent),c=function(a){var b=!1,c=a.documentElement,b=c.firstElementChild||c.firstChild,a=a.createElement("div");a.style.cssText="position:absolute;top:-100em;left:1.1px";c.insertBefore(a,
b);b=0!==a.getBoundingClientRect().left%1;c.removeChild(a);b||(c=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()))&&(b=8==parseInt(c[1],10)||9==parseInt(c[1],10));return b}(document);e.fn.socialButtons=function(a){a=e.extend({wrapper:'<div class="socialbuttons clearfix" />'},a);if(!a.twitter&&!a.plusone&&!a.facebook)return this;a.twitter&&!f.twitter&&(f.twitter=e.getScript("http://platform.twitter.com/widgets.js"));a.plusone&&!f.plusone&&(f.plusone=e.getScript("http://apis.google.com/js/plusone.js"));
!window.FB&&(a.facebook&&!f.facebook)&&(e("body").append('<div id="fb-root"></div>'),function(a,b,d){var c=a.getElementsByTagName(b)[0];a.getElementById(d)||(a=a.createElement(b),a.id=d,a.src="http://connect.facebook.net/en_US/all.js#xfbml=1",c.parentNode.insertBefore(a,c))}(document,"script","facebook-jssdk"),f.facebook=!0);return this.each(function(){var b=e(this).data("permalink"),c=e(a.wrapper).appendTo(this);a.twitter&&c.append('<div><a href="http://twitter.com/share" class="twitter-share-button" data-url="'+
b+'" data-count="none">Tweet</a></div>');a.plusone&&c.append('<div><div class="g-plusone" data-size="medium" data-annotation="none" data-href="'+b+'"></div></div>');a.facebook&&c.append('<div><div class="fb-like" data-href="'+b+'" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false"></div></div>')})};var b={};e.matchHeight=function(a,c,f){var j=e(window),h=a&&b[a];if(!h){var h=b[a]={id:a,elements:c,deepest:f,match:function(){var a=this.revert(),b=0;e(this.elements).each(function(){b=
Math.max(b,e(this).outerHeight())}).each(function(c){var d="outerHeight";"border-box"==a[c].css("box-sizing")&&(d="height");var g=e(this),c=a[c],d=c.height()+(b-g[d]());c.css("min-height",d+"px")})},revert:function(){var a=[],b=this.deepest;e(this.elements).each(function(){var c=b?e(this).find(b+":first"):e(this);a.push(c.css("min-height",""))});return a},remove:function(){j.unbind("resize orientationchange",k);this.revert();delete b[this.id]}},k=function(){h.match()};j.bind("resize orientationchange",
k)}return h};e.matchWidth=function(a,g,f){var j=e(window),h=a&&b[a];if(!h){if(c)return b[a]={match:function(){},revert:function(){},remove:function(){}},b[a];var h=b[a]={id:a,elements:g,selector:f,match:function(){this.revert();e(this.elements).each(function(){var a=e(this),b=a.width(),c=a.children(f),d=0;c.each(function(a){a<c.length-1?d+=e(this).width():e(this).width(b-d)})})},revert:function(){e(g).children(f).css("width","")},remove:function(){j.unbind("resize orientationchange",k);this.revert();
delete b[this.id]}},k=function(){h.match()};j.bind("resize orientationchange",k)}return h};e.fn.matchHeight=function(a){var b=0,c=[];this.each(function(){var b=a?e(this).find(a+":first"):e(this);c.push(b);b.css("min-height","")});this.each(function(){b=Math.max(b,e(this).outerHeight())});return this.each(function(a){var d=e(this),a=c[a],d=a.height()+(b-d.outerHeight());a.css("min-height",d+"px")})};e.fn.matchWidth=function(a){return this.each(function(){var b=e(this),c=b.children(a),f=0;c.width(function(a,
d){return a<c.length-1?(f+=d,d):b.width()-f})})};e.fn.smoothScroller=function(b){b=e.extend({duration:1E3,transition:"easeOutExpo"},b);return this.each(function(){e(this).bind("click",function(){var c=this.hash,f=e(this.hash).offset().top,j=window.location.href.replace(window.location.hash,""),h=a.opera?"html:not(:animated)":"html:not(:animated),body:not(:animated)";if(j+c==this)return e(h).animate({scrollTop:f},b.duration,b.transition,function(){window.location.hash=c.replace("#","")}),!1})})}})(jQuery);
(function(e){e.easing.jswing=e.easing.swing;e.extend(e.easing,{def:"easeOutQuad",swing:function(f,a,c,b,d){return e.easing[e.easing.def](f,a,c,b,d)},easeInQuad:function(f,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(f,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(f,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(f,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(f,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(f,a,c,b,d){return 1>
(a/=d/2)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c},easeInQuart:function(f,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(f,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(f,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(f,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(f,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(f,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(f,a,
c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(f,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(f,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(f,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(f,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(f,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(f,a,c,b,d){return-b*
(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(f,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(f,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(f,a,c,b,d){var f=1.70158,g=0,e=b;if(0==a)return c;if(1==(a/=d))return c+b;g||(g=0.3*d);e<Math.abs(b)?(e=b,f=g/4):f=g/(2*Math.PI)*Math.asin(b/e);return-(e*Math.pow(2,10*(a-=1))*Math.sin((a*d-f)*2*Math.PI/g))+c},easeOutElastic:function(f,a,c,b,d){var f=1.70158,e=0,i=b;
if(0==a)return c;if(1==(a/=d))return c+b;e||(e=0.3*d);i<Math.abs(b)?(i=b,f=e/4):f=e/(2*Math.PI)*Math.asin(b/i);return i*Math.pow(2,-10*a)*Math.sin((a*d-f)*2*Math.PI/e)+b+c},easeInOutElastic:function(f,a,c,b,d){var f=1.70158,e=0,i=b;if(0==a)return c;if(2==(a/=d/2))return c+b;e||(e=d*0.3*1.5);i<Math.abs(b)?(i=b,f=e/4):f=e/(2*Math.PI)*Math.asin(b/i);return 1>a?-0.5*i*Math.pow(2,10*(a-=1))*Math.sin((a*d-f)*2*Math.PI/e)+c:0.5*i*Math.pow(2,-10*(a-=1))*Math.sin((a*d-f)*2*Math.PI/e)+b+c},easeInBack:function(e,
a,c,b,d,g){void 0==g&&(g=1.70158);return b*(a/=d)*a*((g+1)*a-g)+c},easeOutBack:function(e,a,c,b,d,g){void 0==g&&(g=1.70158);return b*((a=a/d-1)*a*((g+1)*a+g)+1)+c},easeInOutBack:function(e,a,c,b,d,g){void 0==g&&(g=1.70158);return 1>(a/=d/2)?b/2*a*a*(((g*=1.525)+1)*a-g)+c:b/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+c},easeInBounce:function(f,a,c,b,d){return b-e.easing.easeOutBounce(f,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+
c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(f,a,c,b,d){return a<d/2?0.5*e.easing.easeInBounce(f,2*a,0,b,d)+c:0.5*e.easing.easeOutBounce(f,2*a-d,0,b,d)+0.5*b+c}})})(jQuery);
(function(e){function f(a){var b={},c=/^jQuery\d+$/;e.each(a.attributes,function(a,d){d.specified&&!c.test(d.name)&&(b[d.name]=d.value)});return b}function a(){var a=e(this);a.val()===a.attr("placeholder")&&a.hasClass("placeholder")&&(a.data("placeholder-password")?a.hide().next().show().focus():a.val("").removeClass("placeholder"))}function c(){var b,c=e(this);if(""===c.val()||c.val()===c.attr("placeholder")){if(c.is(":password")){if(!c.data("placeholder-textinput")){try{b=c.clone().attr({type:"text"})}catch(d){b=
e("<input>").attr(e.extend(f(c[0]),{type:"text"}))}b.removeAttr("name").data("placeholder-password",!0).bind("focus.placeholder",a);c.data("placeholder-textinput",b).before(b)}c=c.hide().prev().show()}c.addClass("placeholder").val(c.attr("placeholder"))}else c.removeClass("placeholder")}var b="placeholder"in document.createElement("input"),d="placeholder"in document.createElement("textarea");e.fn.placeholder=b&&d?function(){return this}:function(){return this.filter((b?"textarea":":input")+"[placeholder]").bind("focus.placeholder",
a).bind("blur.placeholder",c).trigger("blur.placeholder").end()};e(function(){e("form").bind("submit.placeholder",function(){var b=e(".placeholder",this).each(a);setTimeout(function(){b.each(c)},10)})});e(window).bind("unload.placeholder",function(){e(".placeholder").val("")})})(jQuery);
