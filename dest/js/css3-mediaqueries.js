!function(e,t){function n(){var e=p.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=m[e[d]];return t||(t={},f++,e[d]=f,m[f]=t),t}function i(e,n,i){return n||(n=t),o?n.createElement(e):(i||(i=r(n)),(n=i.cache[e]?i.cache[e].cloneNode():u.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e)).canHaveChildren&&!l.test(e)?i.frag.appendChild(n):n)}function a(e){e||(e=t);var a,c,l=r(e);if(p.shivCSS&&!s&&!l.hasCSS){var u,d=e;u=d.createElement("p"),d=d.getElementsByTagName("head")[0]||d.documentElement,u.innerHTML="x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>",u=d.insertBefore(u.lastChild,d.firstChild),l.hasCSS=!!u}return o||(a=e,(c=l).cache||(c.cache={},c.createElem=a.createElement,c.createFrag=a.createDocumentFragment,c.frag=c.createFrag()),a.createElement=function(e){return p.shivMethods?i(e,a,c):c.createElem(e)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-]+/g,function(e){return c.createElem(e),c.frag.createElement(e),'c("'+e+'")'})+");return n}")(p,c.frag)),e}var s,o,c=e.html5||{},l=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,d="_html5shiv",f=0,m={};!function(){try{var e,n=t.createElement("a");if(n.innerHTML="<xyz></xyz>",s="hidden"in n,!(e=1==n.childNodes.length)){t.createElement("a");var r=t.createDocumentFragment();e=void 0===r.cloneNode||void 0===r.createDocumentFragment||void 0===r.createElement}o=e}catch(e){o=s=!0}}();var p={elements:c.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==c.shivCSS,supportsUnknownElements:o,shivMethods:!1!==c.shivMethods,type:"default",shivDocument:a,createElement:i,createDocumentFragment:function(e,i){if(e||(e=t),o)return e.createDocumentFragment();for(var a=(i=i||r(e)).frag.cloneNode(),s=0,c=n(),l=c.length;s<l;s++)a.createElement(c[s]);return a}};e.html5=p,a(t)}(this,document),function(e){"use strict";var t=document,n=t.documentElement,r="XMLHttpRequest",i=t.querySelector?t.documentMode:"CSS1Compat"===t.compatMode?r in e?7:6:5,a="",s=" ",o="$1";i&&Y(n,"ie"+i,!0);var c=t.scripts||t.querySelectorAll("script");c=c[c.length-1].getAttribute("src").replace(/[^\/]+$/,"");var l={};r=i<7?new ActiveXObject("Microsoft.XMLHTTP"):new e[r];var u,d={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},f=[],m=[],p=0,h=!0,g="slvzr",v="rawCssText",y=/^\w+:\/\/[^\/]+/,b=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g,E=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))\s*([^;]*);/g,T=/@media\s+([^\{]+)/g,x=/(\bbehavior\s*?:[^;}\n\r]+)?\burl\(\s*(["']?)(?!\w+:)([^"')]+)\2\s*\)/g,w=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,S=/:(:first-(?:line|letter))/g,H=/((?:^|(?:\s*})+)(?:\s*@media[^{]+{)?)\s*([^\{]*?[\[:][^{]+)/g,L=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,C=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,M=/[^\w-]/g,N=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/,O=/^(checkbox|radio)$/,P=i>6?/[\$\^*]=(['"])\1/:null,k=/([(\[+~])\s+/g,I=/\s+([)\]+~])/g,A=/\s+/g,F=/^\s*((?:[\S\s]*\S)?)\s*$/,D=e.PIE&&"behavior"in PIE?PIE.behavior:c.replace(y,"")+"PIE.htc";function Q(){return e.innerHeight||n.clientHeight}function R(){return e.innerWidth||n.clientWidth}function W(t){var n=Q(),r=R();function i(){var e=Q(),i=R();n===e&&r===i||(n=e,r=i,t())}e.addEventListener?(e.addEventListener("resize",i,!0),e.addEventListener("orientationchange",i,!0)):K(e,"resize",i)}function j(e){var r=t.createElement("script");return r.src=e,n.children[0].appendChild(r),r}function B(e,n){for(var r=(n=n||t.styleSheets).length-1;r>=0;r--)e(n[r],r)}function _(e,t,n){if(n){var r=n.getAttribute("href")||n.getAttribute("data-href");e=r?l[r]||(l[r]=e):n[v]||(n[v]=e)}var i=Q()/100,a=R()/100,s={max:Math.max(i,a),min:Math.min(i,a),h:i,w:a};return e.replace(/([-:\s])(\.\d+\w+)/g,"$10$2").replace(/\b(\d+(\.\d+)?)v(w|h|max|min)\b/g,function(e,t,n,r){return(t*s[r]).toFixed(4)+"px"})}function z(){var t=n.currentStyle.fontSize.match(/([\d\.]+)([^\d\.]+)/),r={"%":.12,em:12,ex:6};r[t[2]]?(t[1]=t[1]*r[t[2]],t[2]="pt"):t[1]=parseFloat(t[1]),B(function(n){var r=n[v];r&&(r=_(r),i<9&&(r=r.replace(/\b(\d+(\.\d+)?)rem\b/g,function(e,n){return n*t[1]+t[2]}),e.styleMedia&&(r=r.replace(T,function(e,t){try{styleMedia.matchMedium(t)&&(e="@media all ")}catch(e){}return e}))),n.cssText=r)})}function q(t){return t=(t=t.replace(T,function(e,t){return"@media "+t.replace(/\s+and\s+\(\s*(\w+\-)?msie\s*:\s*([\d\.]+)\s*\)/g,function(e,t,n){return n=parseFloat(n),t?(/^max/.test(t)?t=n-i:/^min/.test(t)&&(t=i-n),t=t>=0):t=n===i,t?a:e})})).replace(/{(([^{}]*)\bbackground(-\w+)?\s*:\s*(\w+-gradient\s*\([^;\}]+))/g,function(e,t,n,r,i){return/background(-image)?\s*:[^;]*url\(/g.test(n)?e:"{"+D+"-pie-background:"+i+";"+t}).replace(/{(?=[^{}]*\bborder-image\s*:[^{}]+})/g,"{"+D),i<9?(t=t.replace(/{(?=[^{}]*\b(border-radius|\w+-shadow|pie-background)\s*:[^{}]+})/g,"{"+D),i<8&&(t=t.replace(/([;\{\r\n]\s*display\s*:\s*inline-block)\s*([;\}])/g,"$1;*display:inline;*zoom:1$2"),i<7&&(t=t.replace(/([;\{\r\n]\s*position\s*:\s*fixed)\s*([;\}])/g,"$1;_position:absolute$2").replace(/{(?=[^{}]*-pie-png-fix\s*:\s*true\b)/g,"{"+D)))):t=t.replace(/([;\{\r\n])\s*(transform(-\w+)?\s*:[^;\}]+)/g,"$1-ms-$2;$2").replace(/\bfilter\s*:\s*([^;\}]+)/g,function(e,t){return(t=G(t.split(/\s+(?=\w+\s*[\(\:])/).filter(function(e){return!/^(progid\s*\:\s*DXImageTransform\.Microsoft\.)?(Alpha|Matrix|Gradient|FlipH|FlipV)\s*\(/i.test(e)}).join(" ")))?"filter: "+t:""}),i>8?t:t.replace(S,o).replace(H,function(t,r,c){var l=[];return B(function(t,r){var c;c=t.replace(k,o).replace(I,o),t=G(c).replace(A,s)+s;var u=[];l[r]=t.replace(L,function(r,s,o,c,l){if(s)return u.length>0&&(m.push({selector:t.substring(0,l),patches:u}),u=[]),s;var d,p=o?function(t){var r,s,o=!0,c=X(t.slice(1)),l=":not("===t.substring(0,5);l&&(t=t.slice(5,-1));var u=t.indexOf("(");u>-1&&(t=t.substring(0,u));if(":"===t.charAt(0))switch(t.slice(1)){case"root":o=function(e){return l?e!==n:e===n};break;case"target":if(8===i){o=function(t){var n=function(){var e=location.hash,n=e.slice(1);return l?e===a||t.id!==n:e!==a&&t.id===n};return K(e,"hashchange",function(){Y(t,c,n())}),n()};break}return!1;case"checked":o=function(e){return O.test(e.type)&&K(e,"propertychange",function(){"checked"===event.propertyName&&Y(e,c,e.checked!==l)}),e.checked!==l};break;case"disabled":l=!l;case"enabled":o=function(e){return N.test(e.tagName)?(K(e,"propertychange",function(){"$disabled"===event.propertyName&&Y(e,c,e.$disabled===l)}),f.push(e),e.$disabled=e.disabled,e.disabled===l):":enabled"===t?l:!l};break;case"focus":r="focus",s="blur";case"hover":r||(r="mouseenter",s="mouseleave"),o=function(e){return K(e,l?s:r,function(){Y(e,c,!0)}),K(e,l?r:s,function(){Y(e,c,!1)}),l};break;default:if(!w.test(t))return!1}return{className:c,applyClass:o}}(o):(d=c,!P||P.test(d)?{className:X(d),applyClass:!0}:null);return p?(u.push(p),"."+p.className):r})},c.split(",")),r+l.join(",")})}function X(e){return g+"-"+(6===i&&h?p++:e.replace(M,function(e){return e.charCodeAt(0)}))}function U(){return"complete"===t.readyState}function V(t){e.console&&e.console.log(t)}function G(e){return e.replace(F,o)}function Y(e,t,n){var r=e.className,i=J(r,t,n);i!==r&&(e.className=i,e.parentNode.className+=a)}function J(e,t,n){var r=new RegExp("(^|\\s)"+t+"(\\s|$)"),i=r.test(e);return n?i?e:e+s+t:i?G(e.replace(r,o)):e}function K(e,t,n){e.attachEvent("on"+t,n)}function Z(t){var n=l[t];if(e.$&&(n=$.ajax(t,{dataType:"text",async:!1}).responseText),!n){try{r.open("GET",t,!1),r.send(),200===r.status?n=r.responseText:V(t+"\t Error:"+r.status)}catch(e){y.test(t)&&(n=Z(t.replace(y,a)))}l[t]=n}return n||a}function ee(e,t,n){function r(e){return e.substring(0,e.indexOf("/",8))}var i;if(t||(t=oe),"//"===e.substring(0,2)&&(e=(i=t).substring(0,i.indexOf("//"))+e),/^\w+:\/\//i.test(e))return n||r(t)===r(e)?e:null;if("/"===e.charAt(0))return r(t)+e;var a=t.split(/[?#]/)[0];return"?"!==e.charAt(0)&&"/"!==a.charAt(a.length-1)&&(a=a.substring(0,a.lastIndexOf("/")+1)),a+e}function te(){i<8&&e.PIE&&!PIE.attach_ie67&&(PIE.attach_ie67=function(t){function n(){clearTimeout(r),PIE.attach(t)}var r,i=e.jQuery;i?(r=setTimeout(n,800),i(n)):n(),t.runtimeStyle.behavior="none"}),B(function(e){var t=e.innerHTML,n=e.styleSheet;v in n||(n[v]=q(t))},t.getElementsByTagName("style")),B(function(e){var t=e.href;!t||v in e||(e[v]=q(function e(t){return t?Z(t).replace(b,a).replace(E,function(n,r,i,a,s,o){var c=e(ee(i||s,t));return o?"@media "+o+" {"+c+"}":c}).replace(x,function(e,n,r,i){return r=r||a,n?e:" url("+r+ee(i,t,!0)+r+") "}):a}(ee(t)||t)))}),z()}function ne(){if(D&&!e.PIE)try{eval.call(e,Z(c))}catch(e){}te(),i<9&&(!function(){for(var e,t,n,r,i,o=0;o<m.length;o++){t=m[o].selector,n=m[o].patches,(r=t.replace(C,a))!==a&&r.charAt(r.length-1)!==s||(r+="*");try{e=u(r)}catch(e){V("Selector '"+t+"' threw exception '"+e+"'")}if(e)for(var c=0,l=e.length;c<l;c++){for(var d=e[c],f=d.className,p=0,h=n.length;p<h;p++){var g=n[p];i=d,new RegExp("(^|\\s)"+g.className+"(\\s|$)").test(i.className)||!g.applyClass||!0!==g.applyClass&&!0!==g.applyClass(d)||(f=J(f,g.className,!0))}d.className=f}}}(),f.length>0&&setInterval(function(){for(var e=0,t=f.length;e<t;e++){var n=f[e];n.disabled!==n.$disabled&&(n.disabled?(n.disabled=!1,n.$disabled=!0,n.disabled=!0):n.$disabled=n.disabled)}},250))}function re(e,t){Object.defineProperty(CSSStyleDeclaration.prototype,e,{get:function(){return this[t]},set:function(e){this[t]=e},enumerable:!0})}function ie(e,t){var n=e[t];n&&n.apply&&(e[t]=function(){try{PrefixFree.properties.indexOf(arguments[0])>=0&&(arguments[0]=PrefixFree.prefix+arguments[0])}catch(e){}return n.apply(this,arguments)})}function ae(){if(!StyleFix.fixed){StyleFix.fixed=1;var e=t.createElement("div"),n=StyleFix.process;for(var r in e.style.cssText="font-size:calc(1vmax*1)",/vmax/.test(e.style.fontSize)||(StyleFix.register(_),W(n)),ce(function(){setTimeout(n,0)}),CSSStyleDeclaration.prototype)/Property/.test(r)&&ie(CSSStyleDeclaration.prototype,r);PrefixFree.properties.forEach(function(e){re(StyleFix.camelCase(e),PrefixFree.prefixProperty(e,!0))})}}if(i>5&&i<10){i>8?(re("transform","msTransform"),re("transformOrigin","msTransformOrigin")):D=i<8?"behavior: expression(window.PIE&&PIE.attach_ie67&&PIE.attach_ie67(this));":"behavior: url("+D+");",D&&!e.PIE&&j(c+="PIE_IE"+(i<9?"678":"9")+".js");var se=t.getElementsByTagName("BASE"),oe=se.length>0?se[0].href:t.location.href;te(),W(z),ce(function(){for(var t in d){var n,r,i=e;if(e[t]){for(n=d[t].replace("*",t).split(".");(r=n.shift())&&(i=i[r]););if("function"==typeof i)return u=i,void ne()}}ne()})}else if(c+="prefixfree.min.js",e.StyleFix)ae();else try{eval.call(e,Z(c)),ae()}catch(e){j(c).onload=ae}function ce(r){if(e.$)return $(r);var i=!1;function a(){i||(i=!0,r())}if(U())setTimeout(a);else if(t.addEventListener)t.addEventListener("DOMContentLoaded",a,!1);else{var s;t.attachEvent("onreadystatechange",function(){U()&&a()});try{s=!e.frameElement&&n}catch(e){}s&&s.doScroll&&function e(){if(!i){try{s.doScroll("left")}catch(t){return setTimeout(e,50)}a()}}()}}}(this),"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t});var ua={toString:function(){return navigator.userAgent},test:function(e){return this.toString().toLowerCase().indexOf(e.toLowerCase())>-1}};ua.version=(ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],ua.webkit=ua.test("webkit"),ua.gecko=ua.test("gecko")&&!ua.webkit,ua.opera=ua.test("opera"),ua.ie=ua.test("msie")&&!ua.opera,ua.ie6=ua.ie&&document.compatMode&&void 0===document.documentElement.style.maxHeight,ua.ie7=ua.ie&&document.documentElement&&void 0!==document.documentElement.style.maxHeight&&"undefined"==typeof XDomainRequest,ua.ie8=ua.ie&&"undefined"!=typeof XDomainRequest;var domReady=function(){var e=[],t=function(){if(!arguments.callee.done){arguments.callee.done=!0;for(var t=0;t<e.length;t++)e[t]()}};return document.addEventListener&&document.addEventListener("DOMContentLoaded",t,!1),ua.ie&&(!function(){try{document.documentElement.doScroll("left")}catch(e){return void setTimeout(arguments.callee,50)}t()}(),document.onreadystatechange=function(){"complete"===document.readyState&&(document.onreadystatechange=null,t())}),ua.webkit&&document.readyState&&function(){"loading"!==document.readyState?t():setTimeout(arguments.callee,10)}(),window.onload=t,function(t){return"function"==typeof t&&(e[e.length]=t),t}}(),cssHelper=function(){var e,t=/[^\s{][^{]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,n=/[^\s{][^{]*\{[^{}]*\}/g,r=/url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,i=/(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;)/g,a=/\s*(,|:|;|\{|\})\s*/g,s=/\s{2,}/g,o=/;\}/g,c=/\S+/g,l=!1,u=[],d=function(e){"function"==typeof e&&(u[u.length]=e)},f={},m=function(e,t){if(f[e]){var n=f[e].listeners;if(n)for(var r=0;r<n.length;r++)n[r](t)}},p=function(e){return e=(e=(e=(e=e.replace(i,"")).replace(a,"$1")).replace(s," ")).replace(o,"}")},h={mediaQueryList:function(e){var t={},r=e.indexOf("{"),i=e.substring(0,r);e=e.substring(r+1,e.length-1);for(var a=[],s=[],o=i.toLowerCase().substring(7).split(","),c=0;c<o.length;c++)a[a.length]=h.mediaQuery(o[c],t);var l=e.match(n);if(null!==l)for(c=0;c<l.length;c++)s[s.length]=h.rule(l[c],t);return t.getMediaQueries=function(){return a},t.getRules=function(){return s},t.getListText=function(){return i},t.getCssText=function(){return e},t},mediaQuery:function(e,t){for(var n,r=!1,i=[],a=(e=e||"").match(c),s=0;s<a.length;s++){var o=a[s];if(n||"not"!==o&&"only"!==o)if(n){if("("===o.charAt(0)){var l=o.substring(1,o.length-1).split(":");i[i.length]={mediaFeature:l[0],value:l[1]||null}}}else n=o;else"not"===o&&(r=!0)}return{getList:function(){return t||null},getValid:function(){return!0},getNot:function(){return r},getMediaType:function(){return n},getExpressions:function(){return i}}},rule:function(e,t){for(var n={},r=e.indexOf("{"),i=e.substring(0,r),a=i.split(","),s=[],o=e.substring(r+1,e.length-1).split(";"),c=0;c<o.length;c++)s[s.length]=h.declaration(o[c],n);return n.getMediaQueryList=function(){return t||null},n.getSelectors=function(){return a},n.getSelectorText=function(){return i},n.getDeclarations=function(){return s},n.getPropertyValue=function(e){for(var t=0;t<s.length;t++)if(s[t].getProperty()===e)return s[t].getValue();return null},n},declaration:function(e,t){var n=e.indexOf(":"),r=e.substring(0,n),i=e.substring(n+1);return{getRule:function(){return t||null},getProperty:function(){return r},getValue:function(){return i}}}},g=function(n){if("string"==typeof n.cssHelperText){var r={mediaQueryLists:[],rules:[],selectors:{},declarations:[],properties:{}},i=r.mediaQueryLists,a=r.rules,s=n.cssHelperText.match(t);if(null!==s)for(var o=0;o<s.length;o++)"@media "===s[o].substring(0,7)?(i[i.length]=h.mediaQueryList(s[o]),a=r.rules=a.concat(i[i.length-1].getRules())):a[a.length]=h.rule(s[o]);var c=r.selectors,l=function(e){for(var t=e.getSelectors(),n=0;n<t.length;n++){var r=t[n];c[r]||(c[r]=[]),c[r][c[r].length]=e}};for(o=0;o<a.length;o++)l(a[o]);var u=r.declarations;for(o=0;o<a.length;o++)u=r.declarations=u.concat(a[o].getDeclarations());var d=r.properties;for(o=0;o<u.length;o++){var f=u[o].getProperty();d[f]||(d[f]=[]),d[f][d[f].length]=u[o]}return n.cssHelperParsed=r,e[e.length]=n,r}},v=function(e,t){return e.cssHelperText=p(t||e.innerHTML),g(e)},y=function(){l=!0,e=[];for(var t=[],n=function(){for(var n=0;n<t.length;n++)g(t[n]);var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++)v(r[n]);l=!1,function(){for(var t=0;t<u.length;t++)u[t](e)}()},i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var s=i[a];s.getAttribute("rel").indexOf("style")>-1&&s.href&&0!==s.href.length&&!s.disabled&&(t[t.length]=s)}if(t.length>0){var o=0,c=function(){++o===t.length&&n()},d=function(e){var t=e.href;!function(e,t,n){if(ua.ie&&!window.XMLHttpRequest&&(window.XMLHttpRequest=function(){return new ActiveXObject("Microsoft.XMLHTTP")}),!XMLHttpRequest)return"";var r=new XMLHttpRequest;try{r.open("get",e,!0),r.setRequestHeader("X_REQUESTED_WITH","XMLHttpRequest")}catch(e){return void n()}var i=!1;setTimeout(function(){i=!0},5e3),document.documentElement.style.cursor="progress",r.onreadystatechange=function(){4!==r.readyState||i||(!r.status&&"file:"===location.protocol||r.status>=200&&r.status<300||304===r.status||navigator.userAgent.indexOf("Safari")>-1&&void 0===r.status?t(r.responseText):n(),document.documentElement.style.cursor="",r=null)},r.send("")}(t,function(n){n=p(n).replace(r,"url("+t.substring(0,t.lastIndexOf("/"))+"/$1)"),e.cssHelperText=n,c()},c)};for(a=0;a<t.length;a++)d(t[a])}else n()},b={mediaQueryLists:"array",rules:"array",selectors:"object",declarations:"array",properties:"object"},E={mediaQueryLists:null,rules:null,selectors:null,declarations:null,properties:null},T=function(e,t){if(null!==E[e]){if("array"===b[e])return E[e]=E[e].concat(t);var n=E[e];for(var r in t)t.hasOwnProperty(r)&&(n[r]?n[r]=n[r].concat(t[r]):n[r]=t[r]);return n}},x=function(t){E[t]="array"===b[t]?[]:{};for(var n=0;n<e.length;n++)T(t,e[n].cssHelperParsed[t]);return E[t]};domReady(function(){for(var e=document.body.getElementsByTagName("*"),t=0;t<e.length;t++)e[t].checkedByCssHelper=!0;document.implementation.hasFeature("MutationEvents","2.0")||window.MutationEvent?document.body.addEventListener("DOMNodeInserted",function(e){var t=e.target;1===t.nodeType&&(m("DOMElementInserted",t),t.checkedByCssHelper=!0)},!1):setInterval(function(){for(var e=document.body.getElementsByTagName("*"),t=0;t<e.length;t++)e[t].checkedByCssHelper||(m("DOMElementInserted",e[t]),e[t].checkedByCssHelper=!0)},1e3)});var w=function(e){return void 0!==window.innerWidth?window["inner"+e]:void 0!==document.documentElement&&void 0!==document.documentElement.clientWidth&&0!=document.documentElement.clientWidth?document.documentElement["client"+e]:void 0};return{addStyle:function(e,t){var n=document.createElement("style");return n.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),n.addedWithCssHelper=!0,void 0===t||!0===t?cssHelper.parsed(function(t){var r=v(n,e);for(var i in r)r.hasOwnProperty(i)&&T(i,r[i]);m("newStyleParsed",n)}):n.parsingDisallowed=!0,n},removeStyle:function(e){return e.parentNode.removeChild(e)},parsed:function(t){l?d(t):void 0!==e?"function"==typeof t&&t(e):(d(t),y())},mediaQueryLists:function(e){cssHelper.parsed(function(t){e(E.mediaQueryLists||x("mediaQueryLists"))})},rules:function(e){cssHelper.parsed(function(t){e(E.rules||x("rules"))})},selectors:function(e){cssHelper.parsed(function(t){e(E.selectors||x("selectors"))})},declarations:function(e){cssHelper.parsed(function(t){e(E.declarations||x("declarations"))})},properties:function(e){cssHelper.parsed(function(t){e(E.properties||x("properties"))})},broadcast:m,addListener:function(e,t){"function"==typeof t&&(f[e]||(f[e]={listeners:[]}),f[e].listeners[f[e].listeners.length]=t)},removeListener:function(e,t){if("function"==typeof t&&f[e])for(var n=f[e].listeners,r=0;r<n.length;r++)n[r]===t&&(n.splice(r,1),r-=1)},getViewportWidth:function(){return w("Width")},getViewportHeight:function(){return w("Height")}}}();domReady(function(){var e,t={LENGTH_UNIT:/[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,RESOLUTION_UNIT:/[0-9]+(dpi|dpcm)$/,ASPECT_RATIO:/^[0-9]+\/[0-9]+$/,ABSOLUTE_VALUE:/^[0-9]*(\.[0-9]+)*$/},n=[],r=function(){var e="css3-mediaqueries-test",t=document.createElement("div");t.id=e;var n=cssHelper.addStyle("@media all and (width) { #"+e+" { width: 1px !important; } }",!1);document.body.appendChild(t);var i=1===t.offsetWidth;return n.parentNode.removeChild(n),t.parentNode.removeChild(t),r=function(){return i},i},i=function(t){e.style.width=t;var n=e.offsetWidth;return e.style.width="",n},a=function(e,n){var r,a,s,o,c,l=e.length,u="min-"===e.substring(0,4),d=!u&&"max-"===e.substring(0,4);if(null!==n)if(t.LENGTH_UNIT.exec(n))r="length",a=i(n);else if(t.RESOLUTION_UNIT.exec(n)){r="resolution",a=parseInt(n,10);var f=n.substring((a+"").length)}else t.ASPECT_RATIO.exec(n)?(r="aspect-ratio",a=n.split("/")):t.ABSOLUTE_VALUE?(r="absolute",a=n):r="unknown";if("device-width"===e.substring(l-12,l))return s=screen.width,null!==n?"length"===r&&(u&&s>=a||d&&s<a||!u&&!d&&s===a):s>0;if("device-height"===e.substring(l-13,l))return o=screen.height,null!==n?"length"===r&&(u&&o>=a||d&&o<a||!u&&!d&&o===a):o>0;if("width"===e.substring(l-5,l))return s=document.documentElement.clientWidth||document.body.clientWidth,null!==n?"length"===r&&(u&&s>=a||d&&s<a||!u&&!d&&s===a):s>0;if("height"===e.substring(l-6,l))return o=document.documentElement.clientHeight||document.body.clientHeight,null!==n?"length"===r&&(u&&o>=a||d&&o<a||!u&&!d&&o===a):o>0;if("device-aspect-ratio"===e.substring(l-19,l))return"aspect-ratio"===r&&screen.width*a[1]==screen.height*a[0];if("color-index"===e.substring(l-11,l)){var m=Math.pow(2,screen.colorDepth);return null!==n?"absolute"===r&&(u&&m>=a||d&&m<a||!u&&!d&&m===a):m>0}if("color"===e.substring(l-5,l)){var p=screen.colorDepth;return null!==n?"absolute"===r&&(u&&p>=a||d&&p<a||!u&&!d&&p===a):p>0}return"resolution"===e.substring(l-10,l)&&(c=i("dpcm"===f?"1cm":"1in"),null!==n?"resolution"===r&&(u&&c>=a||d&&c<a||!u&&!d&&c===a):c>0)},s=function(e){var t=e.getValid(),n=e.getExpressions(),r=n.length;if(r>0){for(var i=0;i<r&&t;i++)t=a(n[i].mediaFeature,n[i].value);var s=e.getNot();return t&&!s||s&&!t}},o=function(e){for(var t=e.getMediaQueries(),r={},i=0;i<t.length;i++)s(t[i])&&(r[t[i].getMediaType()]=!0);var a=[],o=0;for(var c in r)r.hasOwnProperty(c)&&(o>0&&(a[o++]=","),a[o++]=c);a.length>0&&(n[n.length]=cssHelper.addStyle("@media "+a.join("")+"{"+e.getCssText()+"}",!1))},c=function(e){for(var t=0;t<e.length;t++)o(e[t]);ua.ie?(document.documentElement.style.display="block",setTimeout(function(){document.documentElement.style.display=""},0),setTimeout(function(){cssHelper.broadcast("cssMediaQueriesTested")},100)):cssHelper.broadcast("cssMediaQueriesTested")},l=function(){for(var e=0;e<n.length;e++)cssHelper.removeStyle(n[e]);n=[],cssHelper.mediaQueryLists(c)},u=0,d=function(){var e,t=cssHelper.getViewportWidth(),n=cssHelper.getViewportHeight();if(ua.ie){var i=document.createElement("div");i.style.position="absolute",i.style.top="-9999em",i.style.overflow="scroll",document.body.appendChild(i),u=i.offsetWidth-i.clientWidth,document.body.removeChild(i)}var a;window.onresize=(a=window.onresize||function(){},function(){var i,s;a(),i=cssHelper.getViewportWidth(),s=cssHelper.getViewportHeight(),(Math.abs(i-t)>u||Math.abs(s-n)>u)&&(t=i,n=s,clearTimeout(e),e=setTimeout(function(){r()?cssHelper.broadcast("cssMediaQueriesTested"):l()},500))})},f=document.documentElement;return f.style.marginLeft="-32767px",setTimeout(function(){f.style.marginTop=""},2e4),function(){r()?f.style.marginLeft="":(cssHelper.addListener("newStyleParsed",function(e){c(e.cssHelperParsed.mediaQueryLists)}),cssHelper.addListener("cssMediaQueriesTested",function(){ua.ie&&(f.style.width="1px"),setTimeout(function(){f.style.width="",f.style.marginLeft=""},0),cssHelper.removeListener("cssMediaQueriesTested",arguments.callee)}),(e=document.createElement("div")).style.cssText="position:absolute;top:-9999em;left:-9999em;margin:0;border:none;padding:0;width:1em;font-size:1em;",document.body.appendChild(e),16!==e.offsetWidth&&(e.style.fontSize=16/e.offsetWidth+"em"),e.style.width="",l()),d()}}());try{document.execCommand("BackgroundImageCache",!1,!0)}catch(e){}