/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/**
 * jQuery Validation Plugin 1.8.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");if(b)return b;b=new c.validator(a,this[0]);c.data(this[0],"validator",b);if(b.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){b.cancelSubmit=true});b.settings.submitHandler&&this.find("input, button").filter(":submit").click(function(){b.submitButton=this});this.submit(function(d){function e(){if(b.settings.submitHandler){if(b.submitButton)var f=c("<input type='hidden'/>").attr("name",
b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);b.settings.submitHandler.call(b,b.currentForm);b.submitButton&&f.remove();return false}return true}b.settings.debug&&d.preventDefault();if(b.cancelSubmit){b.cancelSubmit=false;return e()}if(b.form()){if(b.pendingRequest){b.formSubmitted=true;return false}return e()}else{b.focusInvalid();return false}})}return b}else a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")},valid:function(){if(c(this[0]).is("form"))return this.validate().form();
else{var a=true,b=c(this[0].form).validate();this.each(function(){a&=b.element(this)});return a}},removeAttrs:function(a){var b={},d=this;c.each(a.split(/\s/),function(e,f){b[f]=d.attr(f);d.removeAttr(f)});return b},rules:function(a,b){var d=this[0];if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);switch(a){case "add":c.extend(g,c.validator.normalizeRule(b));f[d.name]=g;if(b.messages)e.messages[d.name]=c.extend(e.messages[d.name],b.messages);break;case "remove":if(!b){delete f[d.name];
return g}var h={};c.each(b.split(/\s/),function(j,i){h[i]=g[i];delete g[i]});return h}}d=c.validator.normalizeRules(c.extend({},c.validator.metadataRules(d),c.validator.classRules(d),c.validator.attributeRules(d),c.validator.staticRules(d)),d);if(d.required){e=d.required;delete d.required;d=c.extend({required:e},d)}return d}});c.extend(c.expr[":"],{blank:function(a){return!c.trim(""+a.value)},filled:function(a){return!!c.trim(""+a.value)},unchecked:function(a){return!a.checked}});c.validator=function(a,
b){this.settings=c.extend(true,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(arguments.length==1)return function(){var d=c.makeArray(arguments);d.unshift(a);return c.validator.format.apply(this,d)};if(arguments.length>2&&b.constructor!=Array)b=c.makeArray(arguments).slice(1);if(b.constructor!=Array)b=[b];c.each(b,function(d,e){a=a.replace(RegExp("\\{"+d+"\\}","g"),e)});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",
validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(a){this.lastActive=a;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass);this.addWrapper(this.errorsFor(a)).hide()}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a)))this.element(a)},
onkeyup:function(a){if(a.name in this.submitted||a==this.lastElement)this.element(a)},onclick:function(a){if(a.name in this.submitted)this.element(a);else a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(a,b,d){c(a).addClass(b).removeClass(d)},unhighlight:function(a,b,d){c(a).removeClass(b).addClass(d)}},setDefaults:function(a){c.extend(c.validator.defaults,a)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",
url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:c.validator.format("Please enter no more than {0} characters."),minlength:c.validator.format("Please enter at least {0} characters."),rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),
range:c.validator.format("Please enter a value between {0} and {1}."),max:c.validator.format("Please enter a value less than or equal to {0}."),min:c.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){function a(e){var f=c.data(this[0].form,"validator");e="on"+e.type.replace(/^validate/,"");f.settings[e]&&f.settings[e].call(f,this[0])}this.labelContainer=c(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&
this.labelContainer||c(this.currentForm);this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=this.groups={};c.each(this.settings.groups,function(e,f){c.each(f.split(/\s/),function(g,h){b[h]=e})});var d=this.settings.rules;c.each(d,function(e,f){d[e]=c.validator.normalizeRule(f)});c(this.currentForm).validateDelegate(":text, :password, :file, select, textarea",
"focusin focusout keyup",a).validateDelegate(":radio, :checkbox, select, option","click",a);this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);
return this.valid()},element:function(a){this.lastElement=a=this.clean(a);this.prepareElement(a);this.currentElements=c(a);var b=this.check(a);if(b)delete this.invalid[a.name];else this.invalid[a.name]=true;if(!this.numberOfInvalids())this.toHide=this.toHide.add(this.containers);this.showErrors();return b},showErrors:function(a){if(a){c.extend(this.errorMap,a);this.errorList=[];for(var b in a)this.errorList.push({message:a[b],element:this.findByName(b)[0]});this.successList=c.grep(this.successList,
function(d){return!(d.name in a)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();this.submitted={};this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b=0,d;for(d in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},
valid:function(){return this.size()==0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var a=this.lastActive;return a&&c.grep(this.errorList,function(b){return b.element.name==a.name}).length==1&&a},elements:function(){var a=this,b={};return c([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&
a.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in b||!a.objectLength(c(this).rules()))return false;return b[this.name]=true})},clean:function(a){return c(a)[0]},errors:function(){return c(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([]);this.currentElements=c([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},
prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},check:function(a){a=this.clean(a);if(this.checkable(a))a=this.findByName(a.name).not(this.settings.ignore)[0];var b=c(a).rules(),d=false,e;for(e in b){var f={method:e,parameters:b[e]};try{var g=c.validator.methods[e].call(this,a.value.replace(/\r/g,""),a,f.parameters);if(g=="dependency-mismatch")d=true;else{d=false;if(g=="pending"){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!g){this.formatAndAdd(a,f);return false}}}catch(h){this.settings.debug&&
window.console&&console.log("exception occured when checking element "+a.id+", check the '"+f.method+"' method",h);throw h;}}if(!d){this.objectLength(b)&&this.successList.push(a);return true}},customMetaMessage:function(a,b){if(c.metadata){var d=this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata();return d&&d.messages&&d.messages[b]}},customMessage:function(a,b){var d=this.settings.messages[a];return d&&(d.constructor==String?d:d[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==
undefined)return arguments[a]},defaultMessage:function(a,b){return this.findDefined(this.customMessage(a.name,b),this.customMetaMessage(a,b),!this.settings.ignoreTitle&&a.title||undefined,c.validator.messages[b],"<strong>Warning: No message defined for "+a.name+"</strong>")},formatAndAdd:function(a,b){var d=this.defaultMessage(a,b.method),e=/\$?\{(\d+)\}/g;if(typeof d=="function")d=d.call(this,b.parameters,a);else if(e.test(d))d=jQuery.format(d.replace(e,"{$1}"),b.parameters);this.errorList.push({message:d,
element:a});this.errorMap[a.name]=d;this.submitted[a.name]=d},addWrapper:function(a){if(this.settings.wrapper)a=a.add(a.parent(this.settings.wrapper));return a},defaultShowErrors:function(){for(var a=0;this.errorList[a];a++){var b=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);this.showLabel(b.element,b.message)}if(this.errorList.length)this.toShow=this.toShow.add(this.containers);if(this.settings.success)for(a=
0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight){a=0;for(b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,
b){var d=this.errorsFor(a);if(d.length){d.removeClass().addClass(this.settings.errorClass);d.attr("generated")&&d.html(b)}else{d=c("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:true}).addClass(this.settings.errorClass).html(b||"");if(this.settings.wrapper)d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a))}if(!b&&this.settings.success){d.text("");
typeof this.settings.success=="string"?d.addClass(this.settings.success):this.settings.success(d)}this.toShow=this.toShow.add(d)},errorsFor:function(a){var b=this.idOrName(a);return this.errors().filter(function(){return c(this).attr("for")==b})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){var b=this.currentForm;return c(document.getElementsByName(a)).map(function(d,e){return e.form==
b&&e.name==a&&e||null})},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):true},dependTypes:{"boolean":function(a){return a},string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){return!c.validator.methods.required.call(this,
c.trim(a.value),a)&&"dependency-mismatch"},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;this.pending[a.name]=true}},stopRequest:function(a,b){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[a.name];if(b&&this.pendingRequest==0&&this.formSubmitted&&this.form()){c(this.currentForm).submit();this.formSubmitted=false}else if(!b&&this.pendingRequest==0&&this.formSubmitted){c(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=
false}},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,b){a.constructor==String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,
a)},classRules:function(a){var b={};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},attributeRules:function(a){var b={};a=c(a);for(var d in c.validator.methods){var e=a.attr(d);if(e)b[d]=e}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},metadataRules:function(a){if(!c.metadata)return{};var b=c.data(a.form,"validator").settings.meta;return b?c(a).metadata()[b]:
c(a).metadata()},staticRules:function(a){var b={},d=c.data(a.form,"validator");if(d.settings.rules)b=c.validator.normalizeRule(d.settings.rules[a.name])||{};return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(e===false)delete a[d];else if(e.param||e.depends){var f=true;switch(typeof e.depends){case "string":f=!!c(e.depends,b.form).length;break;case "function":f=e.depends.call(b,b)}if(f)a[d]=e.param!==undefined?e.param:true;else delete a[d]}});c.each(a,function(d,e){a[d]=c.isFunction(e)?
e(b):e});c.each(["minlength","maxlength","min","max"],function(){if(a[this])a[this]=Number(a[this])});c.each(["rangelength","range"],function(){if(a[this])a[this]=[Number(a[this][0]),Number(a[this][1])]});if(c.validator.autoCreateRanges){if(a.min&&a.max){a.range=[a.min,a.max];delete a.min;delete a.max}if(a.minlength&&a.maxlength){a.rangelength=[a.minlength,a.maxlength];delete a.minlength;delete a.maxlength}}a.messages&&delete a.messages;return a},normalizeRule:function(a){if(typeof a=="string"){var b=
{};c.each(a.split(/\s/),function(){b[this]=true});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=d!=undefined?d:c.validator.messages[a];b.length<3&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},methods:{required:function(a,b,d){if(!this.depend(d,b))return"dependency-mismatch";switch(b.nodeName.toLowerCase()){case "select":return(a=c(b).val())&&a.length>0;case "input":if(this.checkable(b))return this.getLength(a,b)>0;default:return c.trim(a).length>
0}},remote:function(a,b,d){if(this.optional(b))return"dependency-mismatch";var e=this.previousValue(b);this.settings.messages[b.name]||(this.settings.messages[b.name]={});e.originalMessage=this.settings.messages[b.name].remote;this.settings.messages[b.name].remote=e.message;d=typeof d=="string"&&{url:d}||d;if(this.pending[b.name])return"pending";if(e.old===a)return e.valid;e.old=a;var f=this;this.startRequest(b);var g={};g[b.name]=a;c.ajax(c.extend(true,{url:d,mode:"abort",port:"validate"+b.name,
dataType:"json",data:g,success:function(h){f.settings.messages[b.name].remote=e.originalMessage;var j=h===true;if(j){var i=f.formSubmitted;f.prepareElement(b);f.formSubmitted=i;f.successList.push(b);f.showErrors()}else{i={};h=h||f.defaultMessage(b,"remote");i[b.name]=e.message=c.isFunction(h)?h(a):h;f.showErrors(i)}e.valid=j;f.stopRequest(b,j)}},d));return"pending"},minlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)>=d},maxlength:function(a,b,d){return this.optional(b)||
this.getLength(c.trim(a),b)<=d},rangelength:function(a,b,d){a=this.getLength(c.trim(a),b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,d){return this.optional(b)||a>=d},max:function(a,b,d){return this.optional(b)||a<=d},range:function(a,b,d){return this.optional(b)||a>=d[0]&&a<=d[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(a)},
url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9-]+/.test(a))return false;var d=0,e=0,f=false;a=a.replace(/\D/g,"");for(var g=a.length-1;g>=
0;g--){e=a.charAt(g);e=parseInt(e,10);if(f)if((e*=2)>9)e-=9;d+=e;f=!f}return d%10==0},accept:function(a,b,d){d=typeof d=="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(b)||a.match(RegExp(".("+d+")$","i"))},equalTo:function(a,b,d){d=c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()});return a==d.val()}}});c.format=c.validator.format})(jQuery);
(function(c){var a={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(d,e,f){e=d.port;if(d.mode=="abort"){a[e]&&a[e].abort();a[e]=f}});else{var b=c.ajax;c.ajax=function(d){var e=("port"in d?d:c.ajaxSettings).port;if(("mode"in d?d:c.ajaxSettings).mode=="abort"){a[e]&&a[e].abort();return a[e]=b.apply(this,arguments)}return b.apply(this,arguments)}}})(jQuery);
(function(c){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.handle.call(this,e)}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)},teardown:function(){this.removeEventListener(a,d,true)},handler:function(e){arguments[0]=c.event.fix(e);arguments[0].type=b;return c.event.handle.apply(this,arguments)}}});c.extend(c.fn,{validateDelegate:function(a,
b,d){return this.bind(b,function(e){var f=c(e.target);if(f.is(a))return d.apply(f,arguments)})}})})(jQuery);

(function(a){try{if(document.execCommand){document.execCommand("BackgroundImageCache",false,true)}}catch(w){}var q=/\d/;var aB=/\s+/;var aA=parseInt(a.browser.version.substring(0,5).replace(".",""));var G=a.browser.mozilla&&aA>=180&&aA<=191;var r=/d{1,4}|M{1,4}|yy(?:yy)?|([Hhmstf])\1*|"[^"]*"|'[^']*'/g;var V=(navigator.userAgent.search(/like\sMac\sOS\sX;.*Mobile\/\S+/)!=-1);var W=(navigator.userAgent.search(/4_1\slike\sMac\sOS\sX;.*Mobile\/\S+/)!=-1);var az=(function(){var e=new a.Event("triggerHandlerTest");a("<div />").triggerHandler(e);return !e.isDefaultPrevented()})();var b=a.telerik={create:function(aE,aF){var e=aF.name;var aD=a.extend({},a.fn[e].defaults,aF.options);return aE.each(function(){var aG=a(this);aD=a.meta?a.extend({},aD,aG.data()):aD;if(!aG.data(e)){var aH=aF.init(this,aD);aG.data(e,aH);b.trigger(this,"load");if(aF.success){aF.success(aH)}}})},toJson:function(e){function aE(aF){return"["+a.map(aF,aD).join(",")+"]"}function aD(aG){var aH=[];for(var aF in aG){var aI=aG[aF];if(a.isArray(aI)){aH.push('"'+aF+'":'+aE(aI))}else{if(typeof aI!="object"){aH.push('"'+aF+'":"'+(aI==null?"":aI)+'"')}else{aH.push('"'+aF+'":'+aD(aI))}}}return"{"+aH.join(",")+"}"}if(a.isArray(e)){return aE(e)}else{return aD(e)}},delegate:function(e,aD){return function(aE){aD.apply(e,[aE,this])}},stop:function(aD,e){return function(aE){aE.stopPropagation();aD.apply(e||this,arguments)}},stopAll:function(aD,e){return function(aE){aE.preventDefault();aE.stopPropagation();aD.apply(e||this,arguments)}},bind:function(aD,aE){var e=a(aD.element?aD.element:aD);a.each(aE,function(aF){if(a.isFunction(this)){e.bind(aF,this)}})},preventDefault:function(aD){aD.preventDefault()},hover:function(){a(this).addClass("t-state-hover")},leave:function(){a(this).removeClass("t-state-hover")},buttonHover:function(){a(this).addClass("t-button-hover")},buttonLeave:function(){a(this).removeClass("t-button-hover")},stringBuilder:function(){this.buffer=[]},ajaxError:function(e,aD,aG,aF){var aE=this.trigger(e,aD,{XMLHttpRequest:aG,textStatus:aF});if(!aE){if(aF=="error"&&aG.status!="0"){alert("Error! The requested URL returned "+aG.status+" - "+aG.statusText)}if(aF=="timeout"){alert("Error! Server timeout.")}}return aE},trigger:function(aE,aF,aD){aD=a.extend(aD||{},new a.Event(aF));if(az){a(aE).triggerHandler(aD)}else{aD.stopPropagation();a(aE).trigger(aD)}return aD.isDefaultPrevented()},getType:function(e){if(e instanceof Date){return"date"}if(typeof e==="number"){return"number"}return"object"},formatString:function(){var aI=arguments[0];for(var aE=0,aF=arguments.length-1;aE<aF;aE++){var aH=new RegExp("\\{"+aE+"(:([^\\}]+))?\\}","gm");var e=arguments[aE+1];var aD=this.formatters[this.getType(e)];if(aD){var aG=aH.exec(aI);if(aG){e=aD(e,aG[2])}}aI=aI.replace(aH,function(){return e})}return aI},splitClassesFromAttr:function(e){var aE=/class="([^"]*)"/i,aF={classes:"",attributes:""},aD;if(e){aD=aE.exec(e);aF.attributes=a.trim(e.replace(aE,""));if(aD){aF.classes=aD[1]}}return aF},getElementZIndex:function(e){var aD;a(e).parents().andSelf().each(function(){aD=a(this).css("zIndex");if(Number(aD)){aD=Number(aD)+1;return false}});return aD=="auto"?1:aD},scrollbarWidth:function(){var e=document.createElement("div"),aD;e.style.cssText="overflow:scroll;overflow-x:hidden;zoom:1";e.innerHTML="&nbsp;";document.body.appendChild(e);aD=e.offsetWidth-e.scrollWidth;document.body.removeChild(e);return aD},lastIndexOf:function(aF,e){var aD=e.length;for(var aE=aF.length-1;aE>-1;aE--){if(aF.substr(aE,aD)==e){return aE}}return -1},caretPos:function(e){var aD=-1;if(document.selection){aD=Math.abs(e.document.selection.createRange().moveStart("character",-e.value.length))}else{if(e.selectionStart!==undefined){aD=e.selectionStart}}return aD},encode:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00a0/g,"&nbsp;").replace(/'/g,"&#39;")},formatters:{},fx:{},cultureInfo:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbrDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDays:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],abbrMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longTime:"h:mm:ss tt",longDate:"dddd, MMMM dd, yyyy",shortDate:"M/d/yyyy",shortTime:"h:mm tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",generalDateShortTime:"M/d/yyyy h:mm tt",generalDateTime:"M/d/yyyy h:mm:ss tt",sortableDateTime:"yyyy'-'MM'-'ddTHH':'mm':'ss",universalSortableDateTime:"yyyy'-'MM'-'dd HH':'mm':'ss'Z'",monthYear:"MMMM, yyyy",monthDay:"MMMM dd",today:"today",tomorrow:"tomorrow",yesterday:"yesterday",next:"next",last:"last",year:"year",month:"month",week:"week",day:"day",am:"AM",pm:"PM",dateSeparator:"/",timeSeparator:":",firstDayOfWeek:0,currencydecimaldigits:2,currencydecimalseparator:".",currencygroupseparator:",",currencygroupsize:3,currencynegative:0,currencypositive:0,currencysymbol:"$",numericdecimaldigits:2,numericdecimalseparator:".",numericgroupseparator:",",numericgroupsize:3,numericnegative:1,percentdecimaldigits:2,percentdecimalseparator:".",percentgroupseparator:",",percentgroupsize:3,percentnegative:0,percentpositive:0,percentsymbol:"%"},patterns:{numeric:{negative:["(n)","-n","- n","n-","n -"]},currency:{positive:["*n","n*","* n","n *"],negative:["(*n)","-*n","*-n","*n-","(n*)","-n*","n-*","n*-","-n *","-* n","n *-","* n-","* -n","n- *","(* n)","(n *)"]},percent:{positive:["n *","n*","*n"],negative:["-n *","-n*","-*n"]}}};var E,U;if(Array.prototype.filter!==undefined){E=function(e,aD){return e.filter(aD)}}else{E=function(e,aF){var aG=[],aE=e.length;for(var aD=0;aD<aE;aD++){var aH=e[aD];if(aF(aH,aD,e)){aG[aG.length]=aH}}return aG}}if(Array.prototype.map!==undefined){U=function(e,aD){return e.map(aD)}}else{U=function(e,aD){var aF=e.length,aG=new Array(aF);for(var aE=0;aE<aF;aE++){aG[aE]=aD(e[aE],aE,e)}return aG}}b.dropDown=function(e){a.extend(this,e);this.$element=a(new b.stringBuilder().cat("<div ").catIf(e.attr,e.attr).cat('><ul class="t-reset"></ul></div>').string()).addClass("t-popup t-group").hide();this.$element.delegate(".t-reset > .t-item","mouseenter",b.hover).delegate(".t-reset > .t-item","mouseleave",b.leave).delegate(".t-reset > .t-item","click",a.proxy(function(aD){if(this.onClick){this.onClick(a.extend(aD,{item:a(aD.target).closest(".t-item")[0]}))}},this));this.$element.tScrollable()};b.dropDown.prototype={_html:function(aD,aI){var aG=new b.stringBuilder();if(aD){for(var aH=0,aJ=aD.length;aH<aJ;aH++){var aK="&nbsp;",aE=aD[aH];if(aE){if(aE.Text!==undefined){aK=aE.Text}else{aK=aE}if(aI){aK=b.encode(aK)}if(!aK||!aK.replace(aB,"")){aK="&nbsp;"}}var aF={html:aK,dataItem:aE};if(this.onItemCreate){this.onItemCreate(aF)}aG.cat('<li unselectable="on" class="t-item">').cat(aF.html).cat("</li>")}}return aG.string()},open:function(aE){if(this.onOpen){this.onOpen()}if(this.isOpened()||!this.$items){return}var e=this.$element,aF;if(!e.parent()[0]){e.hide().appendTo(document.body)}if(e[0].style.width==""){aF=aE.outerWidth?aE.outerWidth-2:0}else{aF=parseInt(this.attr?a("<div"+this.attr+"></div>")[0].style.width:(a.browser.msie&&a.browser.version>8?e.outerWidth():e[0].style.width))}e.css("overflowY","auto").css("width",aF);var aD=aE.offset;aD.top+=aE.outerHeight;if(V){if(!document.body.scrollLeft&&!W){aD.left-=window.pageXOffset}if(!document.body.scrollTop&&!W){aD.top-=window.pageYOffset}}b.fx._wrap(e).css(a.extend({position:"absolute",zIndex:aE.zIndex},aD));if(G){e.css("overflow","hidden")}e.parent().show();b.fx.play(this.effects,e,{direction:"bottom"},a.proxy(function(){e.css("overflow","auto");if(a.browser.msie&&a.browser.version>8){var aH=e.css("height");if(aH=="auto"||aH!="100%"){e.css({height:"100%",boxSizing:"border-box"})}}var aG=this.$items.filter(".t-state-selected");if(aG.length){this.scrollTo(aG[0])}},this))},close:function(aF){if(!this.isOpened()){return}var aD=this.$element;var aE=this.$items;if(G){aD.css("overflow","hidden")}b.fx.rewind(this.effects,aD,{direction:"bottom"},function(){if(G){aD.css("overflow","auto")}if(aE){aE.removeClass("t-state-hover")}if(aD.parent(".t-animation-container")[0]){aD.parent().hide()}})},dataBind:function(aF,aI){aF=aF||[];var e=this.$element;if(e[0].style.height=="100%"){e.css("height","auto")}var aG=e[0].style.height,aH=aG&&aG!="auto"?aG:"200px",aE=e.find("> ul");aE[0].innerHTML=this._html(aF,aI);var aD=this.$items=aE.children();e.css("height",aD.length>10?aH:"auto")},highlight:function(e){return a(e).addClass("t-state-selected").siblings().removeClass("t-state-selected").end().index()},isOpened:function(){return this.$element.is(":visible")},scrollTo:function(aG){if(!aG){return}var aI=aG.offsetTop;var aH=aG.offsetHeight;var aD=this.$element[0];var aF=aD.scrollTop;var aE=aD.clientHeight;var e=aI+aH;aD.scrollTop=aF>aI?aI:e>(aF+aE)?e-aE:aF}};b.datetime=function(){if(arguments.length==0){this.value=new Date()}else{if(arguments.length==1){this.value=new Date(arguments[0])}else{if(arguments.length==3){this.value=new Date(arguments[0],arguments[1],arguments[2])}else{if(arguments.length==6){this.value=new Date(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}else{this.value=new Date(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}}}}return this};a.extend(b.datetime,{msPerMinute:60000,msPerDay:86400000,add:function(e,aH,aD){var aF=e.timeOffset();var aE=new b.datetime(e.time()+aH);var aG=aE.timeOffset()-aF;if(aD){return aE}return new b.datetime(aE.time()+aG*b.datetime.msPerMinute)},subtract:function(e,aD){aD=new b.datetime(aD).toDate();var aE=e.time()-aD;var aF=e.timeOffset()-aD.timeOffset();return aE-(aF*b.datetime.msPerMinute)},firstDayOfMonth:function(e){return new b.datetime(0).hours(e.hours()).minutes(e.minutes()).seconds(e.seconds()).milliseconds(e.milliseconds()).year(e.year(),e.month(),1)},dst:function(){var aE=new b.datetime(),e=new b.datetime(aE.year(),aE.month(),aE.date(),0,0,0),aD=new b.datetime(aE.year(),aE.month(),aE.date(),12,0,0);return -1*(e.timeOffset()-aD.timeOffset())},firstVisibleDay:function(e){var aD=b.cultureInfo.firstDayOfWeek;var aE=new b.datetime(e.year(),e.month(),0,e.hours(),e.minutes(),e.seconds(),e.milliseconds());while(aE.day()!=aD){b.datetime.modify(aE,-1*b.datetime.msPerDay)}return aE},modify:function(e,aG){var aE=e.timeOffset();var aD=new b.datetime(e.time()+aG);var aF=aD.timeOffset()-aE;e.time(aD.time()+aF*b.datetime.msPerMinute)},pad:function(e){if(e<10){return"0"+e}return e},standardFormat:function(e){var aD=b.cultureInfo;var aE={d:aD.shortDate,D:aD.longDate,F:aD.fullDateTime,g:aD.generalDateShortTime,G:aD.generalDateTime,m:aD.monthDay,M:aD.monthDay,s:aD.sortableDateTime,t:aD.shortTime,T:aD.longTime,u:aD.universalSortableDateTime,y:aD.monthYear,Y:aD.monthYear};return aE[e]},format:function(aD,aH){var aJ=b.cultureInfo;var e=aD.getDate();var aF=aD.getDay();var aL=aD.getMonth();var aO=aD.getFullYear();var aI=aD.getHours();var aK=aD.getMinutes();var aN=aD.getSeconds();var aG=aD.getMilliseconds();var aM=b.datetime.pad;var aE={d:e,dd:aM(e),ddd:aJ.abbrDays[aF],dddd:aJ.days[aF],M:aL+1,MM:aM(aL+1),MMM:aJ.abbrMonths[aL],MMMM:aJ.months[aL],yy:aM(aO%100),yyyy:aO,h:aI%12||12,hh:aM(aI%12||12),H:aI,HH:aM(aI),m:aK,mm:aM(aK),s:aN,ss:aM(aN),f:Math.floor(aG/100),ff:Math.floor(aG/10),fff:aG,tt:aI<12?aJ.am:aJ.pm};aH=aH||"G";aH=b.datetime.standardFormat(aH)?b.datetime.standardFormat(aH):aH;return aH.replace(r,function(aP){return aP in aE?aE[aP]:aP.slice(1,aP.length-1)})},parse:function(aD){var aE=aD.value;var e=aD.format;if(aE&&aE.value){return aE}e=b.datetime.standardFormat(e)?b.datetime.standardFormat(e):e;if(q.test(aE)){return b.datetime.parseMachineDate({value:aE,format:e,shortYearCutOff:aD.shortYearCutOff,baseDate:aD.baseDate,AM:b.cultureInfo.am,PM:b.cultureInfo.pm})}return b.datetime.parseByToken?b.datetime.parseByToken(aE,aD.today):null},parseMachineDate:function(aY){var e=aY.AM,aZ=aY.PM,a3=aY.value,aK=aY.format,aD=aY.baseDate,a1=aY.shortYearCutOff||30,a5=null,aW=null,aI=null,aO=0,aV=0,a0=0,aU=0,aP,aQ,aR=false,aT=function(a6){return(aL+1<aK.length&&aK.charAt(aL+1)==a6)},aS=function(a7){var a6=0;while(aT(a7)){a6++;aL++}return a6},aN=function(a8){var a6=new RegExp("^\\d{1,"+a8+"}");var a7=a3.substr(aG).match(a6);if(a7){aG+=a7[0].length;return parseInt(a7[0],10)}else{return -1}},aM=function(a7){for(var a6=0;a6<a7.length;a6++){if(a3.substr(aG,a7[a6].length)==a7[a6]){aG+=a7[a6].length;return a6+1}}return -1},aE=function(){if(a3.charAt(aG)==aK.charAt(aL)){aG++;return true}else{return false}},aX=function(a6){return a6===-1?0:a6},aF=0,aG=0,a4=a3.length;for(var aL=0,aJ=aK.length;aL<aJ;aL++){if(aG==a4){break}if(aR){aE();if(aK.charAt(aL)=="'"){aR=false}}else{switch(aK.charAt(aL)){case"d":aF=aS("d");aI=aF<=1?aN(2):aM(b.cultureInfo[aF==3?"days":"abbrDays"]);if(aI===null||(aI<1||aI>31)){return null}break;case"M":aF=aS("M");aW=aF<=1?aN(2):aM(b.cultureInfo[aF==3?"months":"abbrMonths"]);if(aW===null||(aW<1||aW>12)){return null}aW-=1;break;case"y":aF=aS("y");a5=aN(aF<=1?2:4);if(a5<0||a5.toString().length<=aF){return null}break;case"H":aF=aS("H");aO=aX(aN(2));if(aO===null||(aO<0||aO>23)){return null}break;case"h":aS("h");aO=aX(aN(2));if(aO==12){aO=0}if(aO===null||(aO<0||aO>11)){return null}break;case"m":aS("m");aV=aX(aN(2));if(aV===null||(aV<0||aV>59)){return null}break;case"s":aS("s");a0=aX(aN(2));if(a0===null||(a0<0||a0>59)){return null}break;case"f":aF=aS("f");aU=aX(aN(aF<=0?1:aF+1));if(aU===null||(aU<0||aU>999)){return null}break;case"t":aF=aS("t");e=aF>0?e:"a";aZ=aF>0?aZ:"p";var a2=a3.substr(aG).toLowerCase();aP=a2.indexOf(e.toLowerCase())!=-1;aQ=a2.indexOf(aZ.toLowerCase())!=-1;aG+=aQ?aZ.length:aP?e.length:0;break;case"'":aE();aR=true;break;default:if(!aE()){return null}}}}var aH=new b.datetime();if(a5!==null&&a5<100){a5+=aH.year()-aH.year()%100+(a5<=a1?0:-100)}aO=(aQ&&aO<12)?aO+12:aO==12&&aP?0:aO;if(aD==undefined){if(a5===null){a5=aH.year()}if(aI===null){aI=1}aH=new b.datetime(a5,aW,aI,aO,aV,a0,aU)}else{aH=new b.datetime(a5!==null?a5:aD.year(),aW!==null?aW:aD.month(),aI!==null?aI:aD.date(),aO,aV,a0,aU)}return aH}});b.datetime.prototype={year:function(){if(arguments.length==0){return this.value.getFullYear()}else{if(arguments.length==1){this.value.setFullYear(arguments[0])}else{this.value.setFullYear(arguments[0],arguments[1],arguments[2])}}return this},timeOffset:function(){return this.value.getTimezoneOffset()},day:function(){return this.value.getDay()},toDate:function(){return this.value},addMonth:function(e){this.month(this.month()+e)},addYear:function(e){this.year(this.year()+e)}};a.each(["Month","Date","Hours","Minutes","Seconds","Milliseconds","Time"],function(e,aD){b.datetime.prototype[aD.toLowerCase()]=function(){if(arguments.length==1){this.value["set"+aD](arguments[0])}else{return this.value["get"+aD]()}return this}});var o=/[0#?]/;var at=/n|p|c/i;function ap(aE,aD){var e=Math.pow(10,aD||0);return Math.round(aE*e)/e}function ao(e){return e.split("").reverse().join("")}function N(aL,aG,e){var aH=0,aI=0,aF=aG.length,aM=aL.length,aD=new b.stringBuilder();while(aH<aF&&aI<aM&&aG.substring(aH).search(o)>=0){if(aG.charAt(aH).match(o)){aD.cat(aL.charAt(aI++))}else{aD.cat(aG.charAt(aH))}aH++}aD.catIf(aL.substring(aI),aI<aM&&e).catIf(aG.substring(aH),aH<aF);var aJ=ao(aD.string()),aN;if(aJ.indexOf("#")>-1){aN=aJ.indexOf("0")}if(aN>-1){var aE=aJ.slice(0,aN),aK=aJ.slice(aN,aJ.length);aJ=aE.replace(/#/g,"")+aK.replace(/#/g,"0")}else{aJ=aJ.replace(/#/g,"")}if(aJ.indexOf(",")==0){aJ=aJ.replace(/,/g,"")}return e?aJ:ao(aJ)}b.formatNumber=function(aT,aH,aF,a3,aI,aJ,aX,aR,a7,aL){if(!aH){return aT}var a8,aE,aS,ba,a4=aT<0;aH=aH.split(":");aH=aH.length>1?aH[1].replace("}",""):aH[0];var aK=o.test(aH)&&!at.test(aH);if(aK){aH=aH.split(";");aE=aH[0];aS=aH[1];ba=aH[2];aH=(a4&&aS?aS:aE).indexOf("%")!=-1?"p":"n"}switch(aH.toLowerCase().charAt(0)){case"d":return Math.round(aT).toString();case"c":a8="currency";break;case"n":a8="numeric";break;case"p":a8="percent";if(!aL){aT=Math.abs(aT)*100}break;default:return aT.toString()}var aQ=aH.match(q);if(aQ){aF=parseInt(aQ[0],10)}var bb=function(bf,bc,be){for(var bd=bf.length;bd<bc;bd++){bf=be?("0"+bf):(bf+"0")}return bf};var e=function(be,bc,bd){if(aI&&bd!=0){var bf=new RegExp("(-?[0-9]+)([0-9]{"+bd+"})");while(bf.test(be)){be=be.replace(bf,"$1"+bc+"$2")}}return be};var aD=aD||b.cultureInfo,aW=b.patterns,a9;aF=aF||aF===0?aF:aD[a8+"decimaldigits"];a3=a3!==a9?a3:aD[a8+"decimalseparator"];aI=aI!==a9?aI:aD[a8+"groupseparator"];aJ=aJ||aJ==0?aJ:aD[a8+"groupsize"];aR=aR||aR===0?aR:aD[a8+"negative"];aX=aX||aX===0?aX:aD[a8+"positive"];a7=a7||aD[a8+"symbol"];var aG,aO,aZ;if(aK){var a6=(a4&&aS?aS:aE).split("."),aP=a6[0],a0=a6.length>1?a6[1]:"",aN=b.lastIndexOf(a0,"0"),aM=b.lastIndexOf(a0,"#");aF=(aM>aN?aM:aN)+1}var a2=ap(aT,aF);aT=isFinite(a2)?a2:aT;if(aT.toString().toLowerCase().indexOf("e")>-1){aT=aT.toFixed(aF)}var a5=aT.toString().split(".");aO=a5[0];aO=a4?aO.replace("-",""):aO;aZ=a5.length>1?a5[1]:"";if(aG){if(!a4){aZ=bb(aZ,aG,false);aO+=aZ.slice(0,aG);aZ=aZ.substr(aG)}else{aO=bb(aO,aG+1,true);aZ=aO.slice(aG,aO.length)+aZ;aO=aO.slice(0,aG)}}var a1=aZ.length;if(aF<1||(aK&&aN==-1&&a1===0)){aZ=""}else{aZ=a1>aF?aZ.slice(0,aF):bb(aZ,aF,false)}var aY;if(aK){if(aO==0){aO=""}aO=N(ao(aO),ao(aP),true).replace(/,/g,"");aO=aP.indexOf(",")!=-1?e(aO,aI,aJ):aO;aZ=aZ&&a0?N(aZ,a0):"";aY=aT===0&&ba?ba:(a4&&!aS?"-":"")+aO+(aZ.length>0?a3+aZ:"")}else{aO=e(aO,aI,aJ);aW=aW[a8];var aV=a4?aW.negative[aR]:a7?aW.positive[aX]:null;var aU=aO+(aZ.length>0?a3+aZ:"");aY=aV?aV.replace("n",aU).replace("*",a7):aU}return aY};a.extend(b.formatters,{date:b.datetime.format,number:b.formatNumber});b.scripts=[];var R=[];function an(aD,e){var aF=b.scripts;aD=a.grep(aD,function(aG){aG=aG.toLowerCase().replace(".min","");if(aG.indexOf("jquery-")>-1||(aG.indexOf("jquery.validate")>-1&&a.fn.validate)||aG.indexOf("telerik.common")>-1){return false}var aI=false;for(var aH=0;aH<aF.length;aH++){var aJ=aF[aH];if(aG.indexOf(aJ)>-1){aI=true;break}}return !aI});var aE=function(aG){if(aG){a.ajax({url:aG,dataType:"script",cache:!a.browser.msie,success:function(){aE(aD.shift())}})}else{e();R.shift();if(R.length){R[0]()}}};aE(aD.shift())}b.load=function(aD,e){R.push(function(){an(aD,e)});if(R.length==1){an(aD,e)}};b.stringBuilder.prototype={cat:function(e){this.buffer.push(e);return this},rep:function(aE,e){for(var aD=0;aD<e;aD++){this.cat(aE)}return this},catIf:function(){var e=arguments;if(e[e.length-1]){for(var aD=0,aE=e.length-1;aD<aE;aD++){this.cat(e[aD])}}return this},string:function(){return this.buffer.join("")}};b.isTouch="ontouchstart" in window;var Y="mousemove",au="mousedown",y="mouseup";if(b.isTouch){Y="touchmove";au="touchstart";y="touchend"}a.extend(a.fn,{tScrollable:function(e){a(this).each(function(){if(b.isTouch||(e&&e.force)){new aq(this)}})}});function aq(e){this.element=e;this.wrapper=a(e);this._horizontalScrollbar=a('<div class="t-touch-scrollbar" />');this._verticalScrollbar=this._horizontalScrollbar.clone();this._scrollbars=this._horizontalScrollbar.add(this._verticalScrollbar);this._startProxy=a.proxy(this._start,this);this._stopProxy=a.proxy(this._stop,this);this._dragProxy=a.proxy(this._drag,this);this._create()}b.touchLocation=function(aD){return{idx:0,x:aD.pageX,y:aD.pageY}};b.eventTarget=function(aD){return aD.target};b.eventCurrentTarget=function(aD){return aD.currentTarget};if(b.isTouch){b.touchLocation=function(aE,aF){var aD=aE.changedTouches||aE.originalEvent.changedTouches;if(aF){var aG=null;x(aD,function(e,aH){if(aF==aH.identifier){aG={idx:aH.identifier,x:aH.pageX,y:aH.pageY}}});return aG}else{if(aE.type in {touchstart:{},touchmove:{},touchend:{},touchcancel:{}}){return{idx:aD[0].identifier,x:aD[0].pageX,y:aD[0].pageY}}else{return{idx:0,x:aE.pageX,y:aE.pageY}}}};b.eventTarget=function(aD){var aE="originalEvent" in aD?aD.originalEvent.changedTouches:"changedTouches" in aD?aD.changedTouches:null;return aE?document.elementFromPoint(aE[0].clientX,aE[0].clientY):null};b.eventCurrentTarget=b.eventTarget}b.zoomLevel=function(){return b.isTouch?(document.documentElement.clientWidth/window.innerWidth):1};aq.prototype={_create:function(){this.wrapper.css("overflow","hidden").bind(au,a.proxy(this._wait,this))},_wait:function(aD){var aE=b.touchLocation(aD);this.start={x:aE.x+this.wrapper.scrollLeft(),y:aE.y+this.wrapper.scrollTop()};a(document).bind(Y,this._startProxy).bind(y,this._stopProxy)},_start:function(aE){var aD=b.touchLocation(aE);this._dragged=false;if(this.start.x-aD.x>10||this.start.y-aD.y>10){aE.preventDefault();this._dragged=true;a(document).unbind(Y,this._startProxy).bind(Y,this._dragProxy);var aJ=this.wrapper.innerWidth(),aF=this.wrapper.innerHeight(),aG=this.wrapper.offset(),aI=this.wrapper.attr("scrollWidth"),aH=this.wrapper.attr("scrollHeight");if(aI>aJ){this._horizontalScrollbar.appendTo(document.body).css({width:Math.floor((aJ/aI)*aJ),left:this.wrapper.scrollLeft()+aG.left+parseInt(this.wrapper.css("borderLeftWidth")),top:aG.top+this.wrapper.innerHeight()+parseInt(this.wrapper.css("borderTopWidth"))-this._horizontalScrollbar.outerHeight()})}if(aH>aF){this._verticalScrollbar.appendTo(document.body).css({height:Math.floor((aF/aH)*aF),top:this.wrapper.scrollTop()+aG.top+parseInt(this.wrapper.css("borderTopWidth")),left:aG.left+this.wrapper.innerWidth()+parseInt(this.wrapper.css("borderLeftWidth"))-this._verticalScrollbar.outerWidth()})}this._scrollbars.stop().fadeTo(200,0.5)}},_drag:function(aE){if(!this._dragged){aE.preventDefault()}var aD=b.touchLocation(aE),aH=this.wrapper.offset(),aI=aH.left+parseInt(this.wrapper.css("borderLeftWidth")),aJ=aH.top+parseInt(this.wrapper.css("borderTopWidth")),aF=this.start.x-aD.x,aL=this.start.y-aD.y,aG=Math.max(aI,aI+aF),aK=Math.max(aJ,aJ+aL);aG=Math.min(aI+this.wrapper.innerWidth()-this._horizontalScrollbar.outerWidth()-this._horizontalScrollbar.outerHeight(),aG);aK=Math.min(aJ+this.wrapper.innerHeight()-this._verticalScrollbar.outerHeight()-this._verticalScrollbar.outerWidth(),aK);this._horizontalScrollbar.css("left",aG);this._verticalScrollbar.css("top",aK);this.wrapper.scrollLeft(aF).scrollTop(aL)},_stop:function(){a(document).unbind(Y,this._startProxy).unbind(Y,this._dragProxy).unbind(y,this._stopProxy);this._scrollbars.stop().fadeTo(400,0)}};var af=function(aD,aF,aE){if(aF.length==0&&aE){aE();return null}var e=aD.list.length;return function(){if(--e==0&&aE){aE()}}};a.extend(b.fx,{_wrap:function(e){if(!e.parent().hasClass("t-animation-container")){e.wrap(a("<div/>").addClass("t-animation-container").css({width:e.outerWidth(),height:e.outerHeight()}))}return e.parent()},play:function(aE,aJ,aI,aF){var e=af(aE,aJ,aF);if(e===null){return}aJ.stop(false,true);for(var aG=0,aH=aE.list.length;aG<aH;aG++){var aD=new b.fx[aE.list[aG].name](aJ);if(!aJ.data("effect-"+aG)){aD.play(a.extend(aE.list[aG],{openDuration:aE.openDuration,closeDuration:aE.closeDuration},aI),e);aJ.data("effect-"+aG,aD)}}},rewind:function(aE,aI,aH,aF){var e=af(aE,aI,aF);if(e===null){return}for(var aG=aE.list.length-1;aG>=0;aG--){var aD=aI.data("effect-"+aG)||new b.fx[aE.list[aG].name](aI);aD.rewind(a.extend(aE.list[aG],{openDuration:aE.openDuration,closeDuration:aE.closeDuration},aH),e);aI.data("effect-"+aG,null)}}});b.fx.toggle=function(e){this.element=e.stop(false,true)};b.fx.toggle.prototype={play:function(aD,e){this.element.show();if(e){e()}},rewind:function(aD,e){this.element.hide();if(e){e()}}};b.fx.toggle.defaults=function(){return{list:[{name:"toggle"}]}};b.fx.slide=function(e){this.element=e;this.animationContainer=b.fx._wrap(e)};b.fx.slide.prototype={play:function(aI,aG){var aE=this.animationContainer;this.element.css("display","block").stop();aE.css({display:"block",overflow:"hidden"});var aJ=this.element.outerWidth();var aH=this.element.outerHeight();var e=aI.direction=="bottom"?"marginTop":"marginLeft";var aD=aI.direction=="bottom"?-aH:-aJ;aE.css({width:aJ,height:aH});var aF={};aF[e]=0;this.element.css("width",this.element.width()).each(function(){this.style.cssText=this.style.cssText}).css(e,aD).animate(aF,{queue:false,duration:aI.openDuration,easing:"linear",complete:function(){aE.css("overflow","");if(aG){aG()}}})},rewind:function(aF,aE){var aD=this.animationContainer;this.element.stop(false,true);aD.css({overflow:"hidden"});var e;switch(aF.direction){case"bottom":e={marginTop:-this.element.outerHeight()};break;case"right":e={marginLeft:-this.element.outerWidth()};break}this.element.animate(e,{queue:false,duration:aF.closeDuration,easing:"linear",complete:function(){aD.css({display:"none",overflow:""});if(aE){aE()}}})}};b.fx.slide.defaults=function(){return{list:[{name:"slide"}],openDuration:"fast",closeDuration:"fast"}};b.fx.property=function(e){this.element=e};b.fx.property.prototype={_animate:function(aG,aD,aH,aE){var aI={overflow:"hidden"},aF={},e=this.element;a.each(aG,function(aJ,aK){var aL;switch(aK){case"height":case"width":aL=e[aK]();break;case"opacity":aL=1;break;default:aL=e.css(aK);break}aI[aK]=aH?aL:0;aF[aK]=aH?0:aL});e.css(aI).show().animate(aF,{queue:false,duration:aD,easing:"linear",complete:function(){if(aH){e.hide()}a.each(aF,function(aJ){aF[aJ]=""});e.css(a.extend({overflow:""},aF));if(aE){aE()}}})},play:function(aD,e){this._animate(aD.properties,aD.openDuration,false,e)},rewind:function(aD,e){this._animate(aD.properties,aD.closeDuration,true,e)}};b.fx.property.defaults=function(){return{list:[{name:"property",properties:arguments}],openDuration:"fast",closeDuration:"fast"}};a(document).ready(function(){if(a.browser.msie&&typeof(Sys)!="undefined"&&typeof(Sys.Mvc)!="undefined"&&typeof(Sys.Mvc.FormContext)!="undefined"){var e=function(aD,aE){return a.grep(aD.getElementsByTagName("*"),function(aF){return aF.name==aE})};if(Sys.Mvc.FormContext){Sys.Mvc.FormContext.$F=Sys.Mvc.FormContext._getFormElementsWithName=e}}});var D=a.extend,ai=a.proxy,aw=a.type,P=a.isFunction,Q=a.isPlainObject,O=a.isEmptyObject,x=a.each,Z=a.noop;function B(){this._isPrevented=false}B.prototype={preventDefault:function(){this._isPrevented=true},isDefaultPrevented:function(){return this._isPrevented}};function i(){}i.extend=function(aE){var e=function(){},aH=this,aF=aE&&aE.init?aE.init:function(){aH.apply(this,arguments)},aG;e.prototype=aH.prototype;aG=aF.fn=aF.prototype=D(new e,aE);for(var aD in aG){if(typeof aG[aD]==="object"){aG[aD]=D(true,{},e.prototype[aD],aE[aD])}}aG.constructor=aF;aF.extend=aH.extend;return aF};a.telerik.Class=i;var ac=i.extend({init:function(){this._events={}},bind:function(e,aF){var aI=this,aG,aD=a.isArray(e)?e:[e],aH,aE;for(aG=0,aH=aD.length;aG<aH;aG++){e=aD[aG];handler=a.isFunction(aF)?aF:aF[e];if(handler){aE=aI._events[e]||[];aE.push(handler);aI._events[e]=aE}}return aI},trigger:function(aD,aH){var aI=this,aE=aI._events[aD],e=D(aH,new B()),aF,aG;if(aE){for(aF=0,aG=aE.length;aF<aG;aF++){aE[aF].call(aI,e)}}return e.isDefaultPrevented()},unbind:function(e,aE){var aH=this,aD=aH._events[e],aF,aG;if(aD){if(aE){for(aF=0,aG=aD.length;aF<aG;aF++){if(aD[aF]===aE){aD.splice(aF,1)}}}else{aH._events[e]=[]}}return aH}});var j={selector:function(aD){if(a.isFunction(aD)){return aD}else{var e=H(aD);return function(aF){var aG=e(aF);if(typeof aG==="string"){var aE=/^\/Date\((.*?)\)\/$/.exec(aG);if(aE){aG=new Date(parseInt(aE[1]));return aG}}return aG}}},asc:function(e){var aD=this.selector(e);return function(aE,aF){aE=aD(aE);aF=aD(aF);return aE>aF?1:(aE<aF?-1:0)}},desc:function(e){var aD=this.selector(e);return function(aE,aF){aE=aD(aE);aF=aD(aF);return aE<aF?1:(aE>aF?-1:0)}},create:function(e){return j[e.dir.toLowerCase()](e.field)},combine:function(e){return function(aD,aE){var aH=e[0](aD,aE),aF,aG;for(aF=1,aG=e.length;aF<aG;aF++){aH=aH||e[aF](aD,aE)}return aH}}};var ae=(function(){var aF=/(?=['\\])/g;var e=/^\/Date\((.*?)\)\/$/;function aE(aG){return aG.replace(aF,"\\")}function aD(aK,aG,aH,aJ){var aI;if(aH!=null){if(typeof aH==="string"){aH=aE(aH);aI=e.exec(aH);if(aI){aH=new Date(+aI[1])}else{if(aJ){aH="'"+aH.toLowerCase()+"'";aG=aG+".toLowerCase()"}else{aH="'"+aH+"'"}}}if(aH.getTime){aG="("+aG+"?("+aG+".getTime ? "+aG+".getTime(): new Date(+(/^\\/Date\\((.*?)\\)\\/$/.exec("+aG+"))[1]).getTime()):"+aG+")";aH=aH.getTime()}}return aG+" "+aK+" "+aH}return{eq:function(aG,aH,aI){return aD("==",aG,aH,aI)},neq:function(aG,aH,aI){return aD("!=",aG,aH,aI)},gt:function(aG,aH,aI){return aD(">",aG,aH,aI)},gte:function(aG,aH,aI){return aD(">=",aG,aH,aI)},lt:function(aG,aH,aI){return aD("<",aG,aH,aI)},lte:function(aG,aH,aI){return aD("<=",aG,aH,aI)},startswith:function(aG,aH,aI){if(aI){aG="("+aG+" || '').toLowerCase()";if(aH){aH=aH.toLowerCase()}}if(aH){aH=aE(aH)}return aG+".lastIndexOf('"+aH+"', 0) == 0"},endswith:function(aG,aH,aI){if(aI){aG="("+aG+" || '').toLowerCase()";if(aH){aH=aH.toLowerCase()}}if(aH){aH=aE(aH)}return aG+".lastIndexOf('"+aH+"') == "+aG+".length - "+(aH||"").length},contains:function(aG,aH,aI){if(aI){aG="("+aG+" || '').toLowerCase()";if(aH){aH=aH.toLowerCase()}}if(aH){aH=aE(aH)}return aG+".indexOf('"+aH+"') >= 0"},doesnotcontain:function(aG,aH,aI){if(aI){aG="("+aG+" || '').toLowerCase()";if(aH){aH=aH.toLowerCase()}}if(aH){aH=aE(aH)}return aG+".indexOf('"+aH+"') == -1"}}})();var aj=function(e){return new aj.fn.init(e)};var ad={"==":"eq",equals:"eq",isequalto:"eq",equalto:"eq",equal:"eq","!=":"neq",ne:"neq",notequals:"neq",isnotequalto:"neq",notequalto:"neq",notequal:"neq","<":"lt",islessthan:"lt",lessthan:"lt",less:"lt","<=":"lte",le:"lte",islessthanorequalto:"lte",lessthanequal:"lte",">":"gt",isgreaterthan:"gt",greaterthan:"gt",greater:"gt",">=":"gte",isgreaterthanorequalto:"gte",greaterthanequal:"gte",ge:"gte",substringof:"contains",notsubstringof:"doesnotcontain"};function ab(e){var aF,aG,aD,aH,aE=e.filters;if(aE){for(aF=0,aG=aE.length;aF<aG;aF++){aD=aE[aF];aH=aD.operator;if(aH&&typeof aH==="string"){aD.operator=ad[aH.toLowerCase()]||aH}ab(aD)}}}function aa(e){if(e&&!O(e)){if(a.isArray(e)||!e.filters){e={logic:"and",filters:a.isArray(e)?e:[e]}}ab(e);return e}}aj.normalizeFilter=aa;aj.filterExpr=function(aD){var aE=[],aL={and:" && ",or:" || "},aJ,aK,aH,e,aG=[],aN=[],aF,aM,aI=aD.filters;for(aJ=0,aK=aI.length;aJ<aK;aJ++){aH=aI[aJ];aF=aH.field;aM=aH.operator;if(aH.filters){e=aj.filterExpr(aH);aH=e.expression.replace(/__o\[(\d+)\]/g,function(aP,aO){aO=+aO;return"__o["+(aN.length+aO)+"]"}).replace(/__f\[(\d+)\]/g,function(aP,aO){aO=+aO;return"__f["+(aG.length+aO)+"]"});aN.push.apply(aN,e.operators);aG.push.apply(aG,e.fields)}else{if(typeof aF==="function"){e="__f["+aG.length+"](d)";aG.push(aF)}else{e=b.expr(aF,true)}if(typeof aM==="function"){aH="__o["+aN.length+"]("+e+", "+aH.value+")";aN.push(aM)}else{aH=ae[(aM||"eq").toLowerCase()](e,aH.value,aH.ignoreCase!==undefined?aH.ignoreCase:true)}}aE.push(aH)}return{expression:"("+aE.join(aL[aD.logic])+")",fields:aG,operators:aN}};b.query=aj;aj.expandSort=function(aF,aE){var e=typeof aF==="string"?{field:aF,dir:aE}:aF,aD=a.isArray(e)?e:(e!==undefined?[e]:[]);return a.grep(aD,function(aG){return !!aG.dir})};aj.expandAggregates=function(e){return e=a.isArray(e)?e:[e]};aj.expandGroup=function(aF,aE){var e=typeof aF==="string"?{field:aF,dir:aE}:aF,aD=a.isArray(e)?e:(e!==undefined?[e]:[]);return a.map(aD,function(aG){return{field:aG.field,dir:aG.dir||"asc",aggregates:aG.aggregates}})};aj.fn=aj.prototype={init:function(e){this.data=e||[];return this},toArray:function(){return this.data},skip:function(e){return new aj(this.data.slice(e))},take:function(e){return new aj(this.data.slice(0,e))},orderBy:function(aE){var aD=this.data.slice(0),e=a.isFunction(aE)||!aE?j.asc(aE):aE.compare;return new aj(aD.sort(e))},orderByDescending:function(e){return new aj(this.data.slice(0).sort(j.desc(e)))},sort:function(aF,aE){var aG,aH,aD=aj.expandSort(aF,aE),e=[];if(aD.length){for(aG=0,aH=aD.length;aG<aH;aG++){e.push(j.create(aD[aG]))}return this.orderBy({compare:j.combine(e)})}return this},filter:function(aF){var aI,aD,aJ,e,aL,aE=this.data,aG,aK,aM=[],aH;aF=aa(aF);if(!aF||aF.filters.length===0){return this}e=aj.filterExpr(aF);aG=e.fields;aK=e.operators;aL=aH=new Function("d, __f, __o","return "+e.expression);if(aG.length||aK.length){aH=function(aN){return aL(aN,aG,aK)}}for(aI=0,aJ=aE.length;aI<aJ;aI++){aD=aE[aI];if(aH(aD)){aM.push(aD)}}return new aj(aM)},where:function(e){return aj(E(this.data,e))},select:function(e){return aj(U(this.data,e))},concat:function(e){return aj(this.data.concat(e.data))},count:function(){return this.data.length},any:function(aE){if(a.isFunction(aE)){for(var e=0,aD=this.data.length;e<aD;e++){if(aE(this.data[e],e)){return true}}return false}return !!this.data.length},group:function(aE,e){aE=aj.expandGroup(aE||[]);e=e||this.data;var aG=this,aF=new aj(aG.data),aD;if(aE.length>0){aD=aE[0];aF=aF.groupBy(aD).select(function(aI){var aH=new aj(e).filter([{field:aI.field,operator:"eq",value:aI.value}]);return{field:aI.field,value:aI.value,items:aE.length>1?new aj(aI.items).group(aE.slice(1),aH.toArray()).toArray():aI.items,hasSubgroups:aE.length>1,aggregates:aH.aggregate(aD.aggregates)}})}return aF},groupBy:function(aF){if(O(aF)||!this.data.length){return new aj([])}var aG=aF.field,aN=this.sort(aG,aF.dir||"asc").toArray(),e=c(aG),aK,aI=e.get(aN[0],aG),aD={},aH={field:aG,value:aI,items:[]},aE,aJ,aL,aM=[aH];for(aJ=0,aL=aN.length;aJ<aL;aJ++){aK=aN[aJ];aE=e.get(aK,aG);if(!I(aI,aE)){aI=aE;aH={field:aG,value:aI,items:[]};aM.push(aH)}aH.items.push(aK)}return new aj(aM)},aggregate:function(e){var aD,aE,aF={};for(aD=0,aE=this.data.length;aD<aE;aD++){f(aF,e,this.data[aD],aD,aE)}return aF}};function I(e,aD){if(e&&e.getTime&&aD&&aD.getTime){return e.getTime()===aD.getTime()}return e===aD}function f(e,aE,aK,aJ,aM){aE=aE||[];var aI,aD,aH,aG,aL=aE.length;for(aI=0;aI<aL;aI++){aD=aE[aI];aH=aD.aggregate;var aF=aD.field;e[aF]=e[aF]||{};e[aF][aH]=F[aH.toLowerCase()](e[aF][aH],aK,c(aF),aJ,aM)}}var F={sum:function(aD,aE,e){return aD=(aD||0)+e.get(aE)},count:function(aD,aE,e){return(aD||0)+1},average:function(aD,aF,e,aE,aG){aD=(aD||0)+e.get(aF);if(aE==aG-1){aD=aD/aG}return aD},max:function(aD,aE,e){var aD=(aD||0),aF=e.get(aE);if(aD<aF){aD=aF}return aD},min:function(aD,aE,e){var aF=e.get(aE),aD=(aD||aF);if(aD>aF){aD=aF}return aD}};aj.fn.init.prototype=aj.fn;var aw=a.type,ay="UPDATED",ag="PRISTINE",m="CREATED",v="DESTROYED";function z(aD,aF){if(aD===aF){return true}var aE=aw(aD),aG=aw(aF),e;if(aE!==aG){return false}if(aE==="date"){return aD.getTime()===aF.getTime()}if(aE!=="object"&&aE!=="array"){return false}for(e in aD){if(!z(aD[e],aF[e])){return false}}return true}var C=function(e,aD){e=e||"";if(e&&e.charAt(0)!=="["){e="."+e}if(aD){e=aC(e.split("."))}else{e="d"+e}return e},H=function(e,aD){return new Function("d","return "+C(e,aD))},ar=function(e){return new Function("d,value","d."+e+"=value")},c=function(e){return{get:H(e),set:ar(e)}};var aC=function(aH){var aI="d",aE,aD,aF,aG,e=1;for(aD=0,aF=aH.length;aD<aF;aD++){aG=aH[aD];if(aG!==""){aE=aG.indexOf("[");if(aE!=0){if(aE==-1){aG="."+aG}else{e++;aG="."+aG.substring(0,aE)+" || {})"+aG.substring(aE)}}e++;aI+=aG+((aD<aF-1)?" || {})":")")}}return new Array(e).join("(")+aI};var X=ac.extend({init:function(e){var aD=this;ac.fn.init.call(aD);aD.state=ag;aD._accessors={};aD._modified=false;aD.data=D(true,{},e);aD.pristine=D(true,{},e);if(aD.id()===undefined){aD.state=m;aD.data.__id=aD.guid()}},guid:function(){var aD="",e,aE;for(e=0;e<32;e++){aE=Math.random()*16|0;if(e==8||e==12||e==16||e==20){aD+="-"}aD+=(e==12?4:(e==16?(aE&3|8):aE)).toString(16)}return aD},accessor:function(aD){var e=this._accessors;return e[aD]=e[aD]||c(aD)},get:function(aD){var aE=this,e=aE.accessor(aD);return e.get(aE.data)},set:function(aE,aG){var aF=this,aD,aH={},e;if(typeof aE==="string"){aH[aE]=aG}else{aH=aE}aF._modified=false;for(aD in aH){e=aF.accessor(aD);aG=aH[aD];if(!z(aG,e.get(aF.data))){e.set(aF.data,aG);aF._modified=true}}if(aF._modified){aF.state=aF.isNew()?m:ay;aF.trigger("change")}},isNew:function(){return this.state===m},destroy:function(){this.state=v},changes:function(){var aE=null,aD,aG=this,e=aG.data,aF=aG.pristine;for(aD in e){if(aD!=="__id"&&!z(aF[aD],e[aD])){aE=aE||{};aE[aD]=e[aD]}}return aE}});X.define=function(aF){var aE,aG=aF||{},aD=aG.id||"id",aH,e;if(a.isFunction(aD)){e=aD;aH=aD}else{e=H(aD);aH=ar(aD)}aD=function(aI,aJ){if(aJ===undefined){return aI.__id||e(aI)}else{aH(aI,aJ)}};aG.id=function(aI){return aD(this.data,aI)};aE=X.extend(aG);aE.id=aD;return aE};X.UPDATED=ay;X.PRISTINE=ag;X.CREATED=m;X.DESTROYED=v;var l="create",ak="read",ax="update",u="destroy",h="change",A="error",n=[l,ak,ax,u],K=function(e){return e};function ah(e,aF){var aI=new aj(e),aF=aF||{},aG=aF.page,aH=aF.pageSize,aE=aF.group,aJ=aj.expandSort(aF.sort).concat(aj.expandGroup(aE||[])),aK,aD=aF.filter;if(aD){aI=aI.filter(aD);aK=aI.toArray().length}if(aJ){aI=aI.sort(aJ)}if(aG!==undefined&&aH!==undefined){aI=aI.skip((aG-1)*aH).take(aH)}if(aE){aI=aI.group(aE,e)}return{total:aK,data:aI.toArray()}}function g(aD,aF){var aG=new aj(aD),aF=aF||{},e=aF.aggregates,aE=aF.filter;if(aE){aG=aG.filter(aE)}return aG.aggregate(e)}var T=i.extend({init:function(e){this.data=e.data},read:function(e){e.success(this.data)},update:Z});var am=i.extend({init:function(e){var aD=this;e=aD.options=D({},aD.options,e);x(n,function(aE,aF){if(typeof e[aF]==="string"){e[aF]={url:e[aF]}}});aD.cache=e.cache?d.create(e.cache):{find:Z,add:Z};aD.dialect=e.dialect},options:{dialect:{read:K,update:K,destroy:K,create:K}},create:function(e){a.ajax(this.setup(e,l))},read:function(aE){var aH=this,aG,aD,aF,e=aH.cache;aE=aH.setup(aE,ak);aG=aE.success||Z;aD=aE.error||Z;aF=e.find(aE.data);if(aF!==undefined){aG(aF)}else{aE.success=function(aI){e.add(aE.data,aI);aG(aI)};a.ajax(aE)}},update:function(e){a.ajax(this.setup(e,ax))},destroy:function(e){a.ajax(this.setup(e,u))},setup:function(aE,aG){aE=aE||{};var aF=this,aD=aF.options[aG],e=P(aD.data)?aD.data():aD.data;aE=D(true,{},aD,aE);aE.data=aF.dialect[aG](D(e,aE.data));return aE}});d.create=function(e){var aD={inmemory:function(){return new d()},localstorage:function(){return new S()}};if(Q(e)&&P(e.find)){return e}if(e===true){return new d()}return aD[e]()};function d(){this._store={}}d.prototype={add:function(aD,e){if(aD!==undefined){this._store[stringify(aD)]=e}},find:function(e){return this._store[stringify(e)]},clear:function(){this._store={}},remove:function(e){delete this._store[stringify(e)]}};function S(){this._store=window.localStorage}S.prototype={add:function(aD,e){if(aD!=undefined){this._store.setItem(stringify(aD),stringify(e))}},find:function(e){return a.parseJSON(this._store.getItem(stringify(e)))},clear:function(){this._store.clear()},remove:function(e){this._store.removeItem(stringify(e))}};var p=ac.extend({init:function(aE){var aF=this,e,aD,aG;aE=aF.options=D({},aF.options,aE);D(aF,{_map:{},_models:{},_data:[],_view:[],_pageSize:aE.pageSize,_page:aE.page||(aE.pageSize?1:undefined),_sort:aE.sort,_filter:aE.filter,_group:aE.group,_aggregates:aE.aggregates});ac.fn.init.call(aF);aD=aE.model;aG=aE.transport;if(aD===undefined){aD={}}else{if(Q(aD)){aE.model=aD=X.define(aD)}}e=aD.id;aF._deserializer=D({data:K,total:function(aH){return aH.length},status:function(aH){return aH.status},groups:function(aH){return aH},aggregates:function(aH){return{}}},aE.deserializer);if(aG){aF.transport=P(aG.read)?aG:new am(aG)}else{aF.transport=new T({data:aE.data})}if(e){aF.find=function(aH){return aF._data[aF._map[aH]]};aF.id=function(aH){return e(aH)}}else{aF.find=aF.at}aF.bind([A,h,l,u,ax],aE)},options:{data:[],serverSorting:false,serverPaging:false,serverFiltering:false,serverGrouping:false,serverAggregates:false,autoSync:false,sendAllFields:true,batch:{mode:"multiple"}},model:function(e){var aE=this,aD=e&&aE._models[e];if(!aD){aD=new aE.options.model(aE.find(e));aE._models[aD.id()]=aD;aD.bind(h,function(){aE.trigger(ax,{model:aD})})}return aD},_idMap:function(e){var aH=this,aD=aH.id,aE,aF,aG={};if(aD){for(aE=0,aF=e.length;aE<aF;aE++){aG[aD(e[aE])]=aE}}aH._map=aG},_byState:function(aH,aG){var aE=this._models,aF=[],aD,aG=aG||K,e;for(e in aE){aD=aE[e];if(aD.state===aH){aF.push(aG(aD))}}return aF},_createdModels:function(){return this._byState(X.CREATED,function(e){return e.data})},_updatedModels:function(){var aD=this,e=aD.options.sendAllFields;return aD._byState(X.UPDATED,function(aE){if(e){return aE.data}return aE.changes()})},_destroyedModels:function(){var aD=this,e=aD.options;return aD._byState(X.DESTROYED,function(aF){var aE={};if(e.sendAllFields){return aF.data}e.model.id(aE,aF.id());return aE})},sync:function(){var aH=this,aJ,aD,aE,e=aH.options.batch,aF,aI=aH.transport,aG=aH._promises=[];aJ=aH._updatedModels();aD=aH._createdModels();aE=aH._destroyedModels();if(e===false){aF="multiple"}else{if((e.mode||"multiple")==="multiple"){aF="single"}}if(aF){aH._send(aD,ai(aI.create,aI),aF);aH._send(aJ,ai(aI.update,aI),aF);aH._send(aE,ai(aI.destroy,aI),aF)}else{aH._send({created:aD,updated:aJ,destroyed:aE},ai(aI.update,aI),"single")}a.when.apply(null,aG).then(function(){aH.trigger(h)})},_syncSuccess:function(aG,e){var aJ=this,aI,aH,aF=aJ._models,aE=aJ._map,aD=aJ._deserializer;if(!aD.status(e)){return aJ.error({data:aG})}a.each(aG,function(aK,aL){delete aF[aJ.id(aL)]});e=aD.data(e);a.each(e,function(aK,aL){aI=aG[aK];if(aI){aH=aJ.id(aI);aK=aE[aH];if(aK>=0){aJ._data[aK]=aL}}});aJ._idMap(aJ._data)},_syncError:function(aD,e){this.error({data:aD})},_send:function(e,aF,aG){var aJ=this,aE,aH=aJ._promises,aI=ai(aJ._syncSuccess,aJ,e),aD=ai(aJ._syncError,aJ,e);if(e.length==0){return}if(aG==="multiple"){for(aE=0,length=e.length;aE<length;aE++){aH.push(aF({data:e[aE],success:aI,error:aD}))}}else{aH.push(aF({data:e,success:aI,error:aD}))}return aH},create:function(aD,aG){var aF=this,e=aF._data,aE=aF.model();if(typeof aD!=="number"){aG=aD;aD=undefined}aE.set(aG);aD=aD!==undefined?aD:e.length;e.splice(aD,0,aE.data);aF._idMap(e);aF.trigger(l,{model:aE});return aE},read:function(e){var aE=this,aD=D(e,{page:aE._page,pageSize:aE._pageSize,sort:aE._sort,filter:aE._filter,group:aE._group,aggregates:aE._aggregates});aE.transport.read({data:aD,success:ai(aE.success,aE),error:ai(aE.error,aE)})},update:function(e,aF){var aE=this,aD=aE.model(e);if(aD){aD.set(aF)}},destroy:function(e){var aE=this,aD=aE.model(e);if(aD){aE._data.splice(aE._map[e],1);aE._idMap(aE._data);aD.destroy();aE.trigger(u,{model:aD})}},error:function(){this.trigger(A,arguments)},success:function(e){var aH=this,aF={},aG,aI=X?aH._updatedModels():[],aD=aH.options.serverGrouping===true&&aH._group&&aH._group.length>0,aE=aH._models;aH._total=aH._deserializer.total(e);if(aH._aggregates&&aH.options.serverAggregates){aH._aggregateResult=aH._deserializer.aggregates(e)}if(aD){e=aH._deserializer.groups(e)}else{e=aH._deserializer.data(e)}aH._data=e;a.each(aI,function(){var aJ=aH.id(this);a.each(e,function(){if(aJ===aH.id(this)){delete aE[aJ]}})});if(aH.options.serverPaging!==true){aF.page=aH._page;aF.pageSize=aH._pageSize}if(aH.options.serverSorting!==true){aF.sort=aH._sort}if(aH.options.serverFiltering!==true){aF.filter=aH._filter}if(aH.options.serverGrouping!==true){aF.group=aH._group}if(aH.options.serverAggregates!==true){aF.aggregates=aH._aggregates;aH._aggregateResult=g(e,aF)}aG=ah(e,aF);aH._view=aG.data;if(aG.total!==undefined&&!aH.options.serverFiltering){aH._total=aG.total}aH._idMap(e);aH.trigger(h)},changes:function(e){var aE=this,aD=aE._models[e];if(aD&&aD.state===X.UPDATED){return aD.changes()}},hasChanges:function(e){var aF=this,aD,aE=aF._models,e;if(e===undefined){for(e in aE){if(aE[e].state!==X.PRISTINE){return true}}return false}aD=aE[e];return !!aD&&aD.state===X.UPDATED},at:function(e){return this._data[e]},data:function(e){if(e!==undefined){this._data=e}else{return this._data}},view:function(){return this._view},query:function(e){var aF=this,e=e,aE,aD=aF.options.serverSorting||aF.options.serverPaging||aF.options.serverFiltering||aF.options.serverGrouping||aF.options.serverAggregates;if(e!==undefined){aF._pageSize=e.pageSize;aF._page=e.page;aF._sort=e.sort;aF._filter=e.filter;aF._group=e.group;aF._aggregates=e.aggregates;if(e.sort){aF._sort=e.sort=aj.expandSort(e.sort)}if(e.filter){aF._filter=e.filter=aa(e.filter)}if(e.group){aF._group=e.group=aj.expandGroup(e.group)}if(e.aggregates){aF._aggregates=e.aggregates=aj.expandAggregates(e.aggregates)}}if(aD||(aF._data===undefined||aF._data.length==0)){aF.read(e)}else{aE=ah(aF._data,e);if(aE.total!==undefined&&!aF.options.serverFiltering){aF._total=aE.total}aF._view=aE.data;aF._aggregateResult=g(aF._data,e);aF.trigger(h)}},fetch:function(){var e=this;e.query({page:e.page(),pageSize:e.pageSize(),sort:e.sort(),filter:e.filter(),group:e.group(),aggregate:e.aggregate()})},page:function(aD){var e=this;if(aD!==undefined){aD=Math.max(Math.min(Math.max(aD,1),e._totalPages()),1);e.query({page:aD,pageSize:e.pageSize(),sort:e.sort(),filter:e.filter(),group:e.group(),aggregates:e.aggregate()});return}return e._page},pageSize:function(aD){var e=this;if(aD!==undefined){e.query({page:e.page(),pageSize:aD,sort:e.sort(),filter:e.filter(),group:e.group(),aggregates:e.aggregate()});return}return e._pageSize},sort:function(aD){var e=this;if(aD!==undefined){e.query({page:e.page(),pageSize:e.pageSize(),sort:aD,filter:e.filter(),group:e.group(),aggregates:e.aggregate()});return}return this._sort},filter:function(aD){var e=this;if(aD!==undefined){e.query({page:e.page(),pageSize:e.pageSize(),sort:e.sort(),filter:aD,group:e.group(),aggregates:e.aggregate()});return}return e._filter},group:function(aD){var e=this;if(aD!==undefined){e.query({page:e.page(),pageSize:e.pageSize(),sort:e.sort(),filter:e.filter(),group:aD,aggregates:e.aggregate()});return}return e._group},total:function(){return this._total},aggregate:function(aD){var e=this;if(aD!==undefined){e.query({page:e.page(),pageSize:e.pageSize(),sort:e.sort(),filter:aD,group:e.group(),aggregates:aD});return}return e._aggregates},aggregates:function(){return this._aggregateResult},_totalPages:function(){var aD=this,e=aD.pageSize()||aD.total();return Math.ceil((aD.total()||0)/e)}});p.create=function(aF){aF=a.isArray(aF)?{data:aF}:aF;var aD=aF||{},e=aD.data,aE=aD.fields,aH=aD.table,aG=aD.select;if(aE){if(!e){if(aH){e=M(aH,aE)}else{if(aG){e=L(aG,aE)}}}else{if(aG){al(e,aG,aE)}}}aD.data=e;return aD instanceof p?aD:new p(aD)};function L(aJ,aD){var aH=a(aJ)[0].children,aG,aF,e=[],aI,aE;for(aG=0,aF=aH.length;aG<aF;aG++){aI={};aE=aH[aG];aI[aD[0].field]=aE.text;aI[aD[1].field]=aE.value;e.push(aI)}return e}function al(e,aL,aE){var aF=H(aE[0].field),aG=H(aE[1].field),aI=e.length,aK=[],aH=0;for(;aH<aI;aH++){var aJ="<option",aD=e[aH],aM=aF(aD),aN=aG(aD);if(aN||aN===0){aJ+=" value="+aN}aJ+=">";if(aM||aM===0){aJ+=aM}aJ+="</option>";aK.push(aJ)}aL.html(aK.join(""))}function M(aN,aI){var aO=a(aN)[0].tBodies[0],aM=aO?aO.rows:[],aL,aK,aH,aG=aI.length,aE=[],aD,aJ,e,aF;for(aL=0,aK=aM.length;aL<aK;aL++){aJ={};aF=true;aD=aM[aL].cells;for(aH=0;aH<aG;aH++){e=aD[aH];if(e.nodeName.toLowerCase()!=="th"){aF=false;aJ[aI[aH].field]=e.innerHTML}}if(!aF){aE.push(aJ)}}return aE}b.DataSource=p;b.Model=X;b.getter=H;b.setter=ar;b.expr=C;var av={paramName:"data",useWithBlock:true,begin:"<#",end:"#>",render:function(aG,e){var aE,aF,aD="";for(aE=0,aF=e.length;aE<aF;aE++){aD+=aG(e[aE])}return aD},compile:function(aL,aH){var aK=D({},this,aH),aI=aK.paramName,e=aK.begin,aE=aK.end,aM=aK.useWithBlock,aG="var o='',e = $.telerik.htmlEncode;",aD=/\${([^}]*)}/g,aF=new RegExp(e+"=(.+?)"+aE,"g"),aJ=new RegExp("'(?=[^"+aE[0]+"]*"+aE+")","g");aG+=aM?"with("+aI+"){":"";aG+="o+='";aG+=aL.replace(/[\r\t\n]/g," ").replace(aJ,"\t").split("'").join("\\'").split("\t").join("'").replace(aD,"';o+=e($1);o+='").replace(aF,"';o+=$1;o+='").split(e).join("';").split(aE).join("o+='");aG+=aM?"'}":"';";aG+="return o;";return new Function(aI,aG)}};function J(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}a.telerik.template=a.proxy(av.compile,av);a.telerik.htmlEncode=J;var k=ac.extend({init:function(e,aD){var aE=this;ac.fn.init.call(aE);aE.element=a(e);aE.options=D(true,{},aE.options,aD)}});a.telerik.Component=k;function s(e){var aD=1,aE=arguments.length;for(aD=1;aD<aE;aD++){t(e,arguments[aD])}return e}function t(e,aH){var aE,aG,aF,aD;for(aE in aH){aG=aH[aE];aF=typeof aG;if(aF==="object"&&aG!==null&&aG.constructor!==Array){aD=e[aE];if(typeof(aD)==="object"){e[aE]=aD||{}}else{e[aE]={}}t(e[aE],aG)}else{if(aF!=="undefined"){e[aE]=aG}}}return e}a.telerik.deepExtend=s})(jQuery);
/// <reference path="jquery-1.4.4.js" />
/// <reference path="jquery.validate.js" />

/*!
** Unobtrusive validation support library for jQuery and jQuery Validate
** Copyright (C) Microsoft Corporation. All rights reserved.
*/

/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: false */
/*global document: false, jQuery: false */

(function ($) {
    var $jQval = $.validator,
        adapters,
        data_validation = "unobtrusiveValidation";

    function setValidationValues(options, ruleName, value) {
        options.rules[ruleName] = value;
        if (options.message) {
            options.messages[ruleName] = options.message;
        }
    }

    function splitAndTrim(value) {
        return value.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g);
    }

    function getModelPrefix(fieldName) {
        return fieldName.substr(0, fieldName.lastIndexOf(".") + 1);
    }

    function appendModelPrefix(value, prefix) {
        if (value.indexOf("*.") === 0) {
            value = value.replace("*.", prefix);
        }
        return value;
    }

    function onError(error, inputElement) {  // 'this' is the form element
        var container = $(this).find("[data-valmsg-for='" + inputElement[0].name + "']"),
            replace = $.parseJSON(container.attr("data-valmsg-replace")) !== false;

        container.removeClass("field-validation-valid").addClass("field-validation-error");
        error.data("unobtrusiveContainer", container);

        if (replace) {
            container.empty();
            error.removeClass("input-validation-error").appendTo(container);
        }
        else {
            error.hide();
        }
    }

    function onErrors(form, validator) {  // 'this' is the form element
        var container = $(this).find("[data-valmsg-summary=true]"),
            list = container.find("ul");

        if (list && list.length && validator.errorList.length) {
            list.empty();
            container.addClass("validation-summary-errors").removeClass("validation-summary-valid");

            $.each(validator.errorList, function () {
                $("<li />").html(this.message).appendTo(list);
            });
        }
    }

    function onSuccess(error) {  // 'this' is the form element
        var container = error.data("unobtrusiveContainer"),
            replace = $.parseJSON(container.attr("data-valmsg-replace"));

        if (container) {
            container.addClass("field-validation-valid").removeClass("field-validation-error");
            error.removeData("unobtrusiveContainer");

            if (replace) {
                container.empty();
            }
        }
    }

    function validationInfo(form) {
        var $form = $(form),
            result = $form.data(data_validation);

        if (!result) {
            result = {
                options: {  // options structure passed to jQuery Validate's validate() method
                    errorClass: "input-validation-error",
                    errorElement: "span",
                    errorPlacement: $.proxy(onError, form),
                    invalidHandler: $.proxy(onErrors, form),
                    messages: {},
                    rules: {},
                    success: $.proxy(onSuccess, form)
                },
                attachValidation: function () {
                    $form.validate(this.options);
                },
                validate: function () {  // a validation function that is called by unobtrusive Ajax
                    $form.validate();
                    return $form.valid();
                }
            };
            $form.data(data_validation, result);
        }

        return result;
    }

    $jQval.unobtrusive = {
        adapters: [],

        parseElement: function (element, skipAttach) {
            /// <summary>
            /// Parses a single HTML element for unobtrusive validation attributes.
            /// </summary>
            /// <param name="element" domElement="true">The HTML element to be parsed.</param>
            /// <param name="skipAttach" type="Boolean">[Optional] true to skip attaching the
            /// validation to the form. If parsing just this single element, you should specify true.
            /// If parsing several elements, you should specify false, and manually attach the validation
            /// to the form when you are finished. The default is false.</param>
            var $element = $(element),
                form = $element.parents("form")[0],
                valInfo, rules, messages;

            if (!form) {  // Cannot do client-side validation without a form
                return;
            }

            valInfo = validationInfo(form);
            valInfo.options.rules[element.name] = rules = {};
            valInfo.options.messages[element.name] = messages = {};

            $.each(this.adapters, function () {
                var prefix = "data-val-" + this.name,
                    message = $element.attr(prefix),
                    paramValues = {};

                if (message !== undefined) {  // Compare against undefined, because an empty message is legal (and falsy)
                    prefix += "-";

                    $.each(this.params, function () {
                        paramValues[this] = $element.attr(prefix + this);
                    });

                    this.adapt({
                        element: element,
                        form: form,
                        message: message,
                        params: paramValues,
                        rules: rules,
                        messages: messages
                    });
                }
            });

            jQuery.extend(rules, { "__dummy__": true });

            if (!skipAttach) {
                valInfo.attachValidation();
            }
        },

        parse: function (selector) {
            /// <summary>
            /// Parses all the HTML elements in the specified selector. It looks for input elements decorated
            /// with the [data-val=true] attribute value and enables validation according to the data-val-*
            /// attribute values.
            /// </summary>
            /// <param name="selector" type="String">Any valid jQuery selector.</param>
            $(selector).find(":input[data-val=true]").each(function () {
                $jQval.unobtrusive.parseElement(this, true);
            });

            $("form").each(function () {
                var info = validationInfo(this);
                if (info) {
                    info.attachValidation();
                }
            });
        }
    };

    adapters = $jQval.unobtrusive.adapters;

    adapters.add = function (adapterName, params, fn) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="params" type="Array" optional="true">[Optional] An array of parameter names (strings) that will
        /// be extracted from the data-val-nnnn-mmmm HTML attributes (where nnnn is the adapter name, and
        /// mmmm is the parameter name).</param>
        /// <param name="fn" type="Function">The function to call, which adapts the values from the HTML
        /// attributes into jQuery Validate rules and/or messages.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        if (!fn) {  // Called with no params, just a function
            fn = params;
            params = [];
        }
        this.push({ name: adapterName, params: params, adapt: fn });
        return this;
    };

    adapters.addBool = function (adapterName, ruleName) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation rule has no parameter values.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="ruleName" type="String" optional="true">[Optional] The name of the jQuery Validate rule. If not provided, the value
        /// of adapterName will be used instead.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, function (options) {
            setValidationValues(options, ruleName || adapterName, true);
        });
    };

    adapters.addMinMax = function (adapterName, minRuleName, maxRuleName, minMaxRuleName, minAttribute, maxAttribute) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation has three potential rules (one for min-only, one for max-only, and
        /// one for min-and-max). The HTML parameters are expected to be named -min and -max.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="minRuleName" type="String">The name of the jQuery Validate rule to be used when you only
        /// have a minimum value.</param>
        /// <param name="maxRuleName" type="String">The name of the jQuery Validate rule to be used when you only
        /// have a maximum value.</param>
        /// <param name="minMaxRuleName" type="String">The name of the jQuery Validate rule to be used when you
        /// have both a minimum and maximum value.</param>
        /// <param name="minAttribute" type="String" optional="true">[Optional] The name of the HTML attribute that
        /// contains the minimum value. The default is "min".</param>
        /// <param name="maxAttribute" type="String" optional="true">[Optional] The name of the HTML attribute that
        /// contains the maximum value. The default is "max".</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, [minAttribute || "min", maxAttribute || "max"], function (options) {
            var min = options.params.min,
                max = options.params.max;

            if (min && max) {
                setValidationValues(options, minMaxRuleName, [min, max]);
            }
            else if (min) {
                setValidationValues(options, minRuleName, min);
            }
            else if (max) {
                setValidationValues(options, maxRuleName, max);
            }
        });
    };

    adapters.addSingleVal = function (adapterName, attribute, ruleName) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation rule has a single value.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute(where nnnn is the adapter name).</param>
        /// <param name="attribute" type="String">[Optional] The name of the HTML attribute that contains the value.
        /// The default is "val".</param>
        /// <param name="ruleName" type="String" optional="true">[Optional] The name of the jQuery Validate rule. If not provided, the value
        /// of adapterName will be used instead.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, [attribute || "val"], function (options) {
            setValidationValues(options, ruleName || adapterName, options.params[attribute]);
        });
    };

    $jQval.addMethod("__dummy__", function (value, element, params) {
        return true;
    });

    $jQval.addMethod("regex", function (value, element, params) {
        var match;
        if (this.optional(element)) {
            return true;
        }

        match = new RegExp(params).exec(value);
        return (match && (match.index === 0) && (match[0].length === value.length));
    });

    adapters.addSingleVal("accept", "exts").addSingleVal("regex", "pattern");
    adapters.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    adapters.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    adapters.add("equalto", ["other"], function (options) {
        var prefix = getModelPrefix(options.element.name),
            other = options.params.other,
            fullOtherName = appendModelPrefix(other, prefix),
            element = $(options.form).find(":input[name=" + fullOtherName + "]")[0];

        setValidationValues(options, "equalTo", element);
    });
    adapters.add("required", function (options) {
        // jQuery Validate equates "required" with "mandatory" for checkbox elements
        if (options.element.tagName.toUpperCase() !== "INPUT" || options.element.type.toUpperCase() !== "CHECKBOX") {
            setValidationValues(options, "required", true);
        }
    });
    adapters.add("remote", ["url", "type", "additionalfields"], function (options) {
        var value = {
            url: options.params.url,
            type: options.params.type || "GET",
            data: {}
        },
            prefix = getModelPrefix(options.element.name);

        $.each(splitAndTrim(options.params.additionalfields || options.element.name), function (i, fieldName) {
            var paramName = appendModelPrefix(fieldName, prefix);
            value.data[paramName] = function () {
                return $(options.form).find(":input[name='" + paramName + "']").val();
            };
        });

        setValidationValues(options, "remote", value);
    });

    $(function () {
        $jQval.unobtrusive.parse(document);
    });
}(jQuery));
/*
 * jQuery UI Effects 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
;jQuery.effects || (function($, undefined) {

$.effects = {};



/******************************************************************************/
/****************************** COLOR ANIMATIONS ******************************/
/******************************************************************************/

// override the animation for color styles
$.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor',
	'borderRightColor', 'borderTopColor', 'borderColor', 'color', 'outlineColor'],
function(i, attr) {
	$.fx.step[attr] = function(fx) {
		if (!fx.colorInit) {
			fx.start = getColor(fx.elem, attr);
			fx.end = getRGB(fx.end);
			fx.colorInit = true;
		}

		fx.elem.style[attr] = 'rgb(' +
			Math.max(Math.min(parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0], 10), 255), 0) + ',' +
			Math.max(Math.min(parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1], 10), 255), 0) + ',' +
			Math.max(Math.min(parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2], 10), 255), 0) + ')';
	};
});

// Color Conversion functions from highlightFade
// By Blair Mitchelmore
// http://jquery.offput.ca/highlightFade/

// Parse strings looking for color tuples [255,255,255]
function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
				return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
				return [parseInt(result[1],10), parseInt(result[2],10), parseInt(result[3],10)];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
				return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
				return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
				return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Look for rgba(0, 0, 0, 0) == transparent in Safari 3
		if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
				return colors['transparent'];

		// Otherwise, we're most likely dealing with a named color
		return colors[$.trim(color).toLowerCase()];
}

function getColor(elem, attr) {
		var color;

		do {
				color = $.curCSS(elem, attr);

				// Keep going until we find an element that has color, or we hit the body
				if ( color != '' && color != 'transparent' || $.nodeName(elem, "body") )
						break;

				attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
};

// Some named colors to work with
// From Interface by Stefan Petre
// http://interface.eyecon.ro/

var colors = {
	aqua:[0,255,255],
	azure:[240,255,255],
	beige:[245,245,220],
	black:[0,0,0],
	blue:[0,0,255],
	brown:[165,42,42],
	cyan:[0,255,255],
	darkblue:[0,0,139],
	darkcyan:[0,139,139],
	darkgrey:[169,169,169],
	darkgreen:[0,100,0],
	darkkhaki:[189,183,107],
	darkmagenta:[139,0,139],
	darkolivegreen:[85,107,47],
	darkorange:[255,140,0],
	darkorchid:[153,50,204],
	darkred:[139,0,0],
	darksalmon:[233,150,122],
	darkviolet:[148,0,211],
	fuchsia:[255,0,255],
	gold:[255,215,0],
	green:[0,128,0],
	indigo:[75,0,130],
	khaki:[240,230,140],
	lightblue:[173,216,230],
	lightcyan:[224,255,255],
	lightgreen:[144,238,144],
	lightgrey:[211,211,211],
	lightpink:[255,182,193],
	lightyellow:[255,255,224],
	lime:[0,255,0],
	magenta:[255,0,255],
	maroon:[128,0,0],
	navy:[0,0,128],
	olive:[128,128,0],
	orange:[255,165,0],
	pink:[255,192,203],
	purple:[128,0,128],
	violet:[128,0,128],
	red:[255,0,0],
	silver:[192,192,192],
	white:[255,255,255],
	yellow:[255,255,0],
	transparent: [255,255,255]
};



/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/

var classAnimationActions = ['add', 'remove', 'toggle'],
	shorthandStyles = {
		border: 1,
		borderBottom: 1,
		borderColor: 1,
		borderLeft: 1,
		borderRight: 1,
		borderTop: 1,
		borderWidth: 1,
		margin: 1,
		padding: 1
	};

function getElementStyles() {
	var style = document.defaultView
			? document.defaultView.getComputedStyle(this, null)
			: this.currentStyle,
		newStyle = {},
		key,
		camelCase;

	// webkit enumerates style porperties
	if (style && style.length && style[0] && style[style[0]]) {
		var len = style.length;
		while (len--) {
			key = style[len];
			if (typeof style[key] == 'string') {
				camelCase = key.replace(/\-(\w)/g, function(all, letter){
					return letter.toUpperCase();
				});
				newStyle[camelCase] = style[key];
			}
		}
	} else {
		for (key in style) {
			if (typeof style[key] === 'string') {
				newStyle[key] = style[key];
			}
		}
	}
	
	return newStyle;
}

function filterStyles(styles) {
	var name, value;
	for (name in styles) {
		value = styles[name];
		if (
			// ignore null and undefined values
			value == null ||
			// ignore functions (when does this occur?)
			$.isFunction(value) ||
			// shorthand styles that need to be expanded
			name in shorthandStyles ||
			// ignore scrollbars (break in IE)
			(/scrollbar/).test(name) ||

			// only colors or values that can be converted to numbers
			(!(/color/i).test(name) && isNaN(parseFloat(value)))
		) {
			delete styles[name];
		}
	}
	
	return styles;
}

function styleDifference(oldStyle, newStyle) {
	var diff = { _: 0 }, // http://dev.jquery.com/ticket/5459
		name;

	for (name in newStyle) {
		if (oldStyle[name] != newStyle[name]) {
			diff[name] = newStyle[name];
		}
	}

	return diff;
}

$.effects.animateClass = function(value, duration, easing, callback) {
	if ($.isFunction(easing)) {
		callback = easing;
		easing = null;
	}

	return this.queue(function() {
		var that = $(this),
			originalStyleAttr = that.attr('style') || ' ',
			originalStyle = filterStyles(getElementStyles.call(this)),
			newStyle,
			className = that.attr('class');

		$.each(classAnimationActions, function(i, action) {
			if (value[action]) {
				that[action + 'Class'](value[action]);
			}
		});
		newStyle = filterStyles(getElementStyles.call(this));
		that.attr('class', className);

		that.animate(styleDifference(originalStyle, newStyle), {
			queue: false,
			duration: duration,
			easing: easing,
			complete: function() {
				$.each(classAnimationActions, function(i, action) {
					if (value[action]) { that[action + 'Class'](value[action]); }
				});
				// work around bug in IE by clearing the cssText before setting it
				if (typeof that.attr('style') == 'object') {
					that.attr('style').cssText = '';
					that.attr('style').cssText = originalStyleAttr;
				} else {
					that.attr('style', originalStyleAttr);
				}
				if (callback) { callback.apply(this, arguments); }
				$.dequeue( this );
			}
		});
	});
};

$.fn.extend({
	_addClass: $.fn.addClass,
	addClass: function(classNames, speed, easing, callback) {
		return speed ? $.effects.animateClass.apply(this, [{ add: classNames },speed,easing,callback]) : this._addClass(classNames);
	},

	_removeClass: $.fn.removeClass,
	removeClass: function(classNames,speed,easing,callback) {
		return speed ? $.effects.animateClass.apply(this, [{ remove: classNames },speed,easing,callback]) : this._removeClass(classNames);
	},

	_toggleClass: $.fn.toggleClass,
	toggleClass: function(classNames, force, speed, easing, callback) {
		if ( typeof force == "boolean" || force === undefined ) {
			if ( !speed ) {
				// without speed parameter;
				return this._toggleClass(classNames, force);
			} else {
				return $.effects.animateClass.apply(this, [(force?{add:classNames}:{remove:classNames}),speed,easing,callback]);
			}
		} else {
			// without switch parameter;
			return $.effects.animateClass.apply(this, [{ toggle: classNames },force,speed,easing]);
		}
	},

	switchClass: function(remove,add,speed,easing,callback) {
		return $.effects.animateClass.apply(this, [{ add: add, remove: remove },speed,easing,callback]);
	}
});



/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

$.extend($.effects, {
	version: "1.8.16",

	// Saves a set of properties in a data storage
	save: function(element, set) {
		for(var i=0; i < set.length; i++) {
			if(set[i] !== null) element.data("ec.storage."+set[i], element[0].style[set[i]]);
		}
	},

	// Restores a set of previously saved properties from a data storage
	restore: function(element, set) {
		for(var i=0; i < set.length; i++) {
			if(set[i] !== null) element.css(set[i], element.data("ec.storage."+set[i]));
		}
	},

	setMode: function(el, mode) {
		if (mode == 'toggle') mode = el.is(':hidden') ? 'show' : 'hide'; // Set for toggle
		return mode;
	},

	getBaseline: function(origin, original) { // Translates a [top,left] array into a baseline value
		// this should be a little more flexible in the future to handle a string & hash
		var y, x;
		switch (origin[0]) {
			case 'top': y = 0; break;
			case 'middle': y = 0.5; break;
			case 'bottom': y = 1; break;
			default: y = origin[0] / original.height;
		};
		switch (origin[1]) {
			case 'left': x = 0; break;
			case 'center': x = 0.5; break;
			case 'right': x = 1; break;
			default: x = origin[1] / original.width;
		};
		return {x: x, y: y};
	},

	// Wraps the element around a wrapper that copies position properties
	createWrapper: function(element) {

		// if the element is already wrapped, return it
		if (element.parent().is('.ui-effects-wrapper')) {
			return element.parent();
		}

		// wrap the element
		var props = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				'float': element.css('float')
			},
			wrapper = $('<div></div>')
				.addClass('ui-effects-wrapper')
				.css({
					fontSize: '100%',
					background: 'transparent',
					border: 'none',
					margin: 0,
					padding: 0
				}),
			active = document.activeElement;

		element.wrap(wrapper);

		// Fixes #7595 - Elements lose focus when wrapped.
		if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
			$( active ).focus();
		}
		
		wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually loose the reference to the wrapped element

		// transfer positioning properties to the wrapper
		if (element.css('position') == 'static') {
			wrapper.css({ position: 'relative' });
			element.css({ position: 'relative' });
		} else {
			$.extend(props, {
				position: element.css('position'),
				zIndex: element.css('z-index')
			});
			$.each(['top', 'left', 'bottom', 'right'], function(i, pos) {
				props[pos] = element.css(pos);
				if (isNaN(parseInt(props[pos], 10))) {
					props[pos] = 'auto';
				}
			});
			element.css({position: 'relative', top: 0, left: 0, right: 'auto', bottom: 'auto' });
		}

		return wrapper.css(props).show();
	},

	removeWrapper: function(element) {
		var parent,
			active = document.activeElement;
		
		if (element.parent().is('.ui-effects-wrapper')) {
			parent = element.parent().replaceWith(element);
			// Fixes #7595 - Elements lose focus when wrapped.
			if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
				$( active ).focus();
			}
			return parent;
		}
			
		return element;
	},

	setTransition: function(element, list, factor, value) {
		value = value || {};
		$.each(list, function(i, x){
			unit = element.cssUnit(x);
			if (unit[0] > 0) value[x] = unit[0] * factor + unit[1];
		});
		return value;
	}
});


function _normalizeArguments(effect, options, speed, callback) {
	// shift params for method overloading
	if (typeof effect == 'object') {
		callback = options;
		speed = null;
		options = effect;
		effect = options.effect;
	}
	if ($.isFunction(options)) {
		callback = options;
		speed = null;
		options = {};
	}
        if (typeof options == 'number' || $.fx.speeds[options]) {
		callback = speed;
		speed = options;
		options = {};
	}
	if ($.isFunction(speed)) {
		callback = speed;
		speed = null;
	}

	options = options || {};

	speed = speed || options.duration;
	speed = $.fx.off ? 0 : typeof speed == 'number'
		? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;

	callback = callback || options.complete;

	return [effect, options, speed, callback];
}

function standardSpeed( speed ) {
	// valid standard speeds
	if ( !speed || typeof speed === "number" || $.fx.speeds[ speed ] ) {
		return true;
	}
	
	// invalid strings - treat as "normal" speed
	if ( typeof speed === "string" && !$.effects[ speed ] ) {
		return true;
	}
	
	return false;
}

$.fn.extend({
	effect: function(effect, options, speed, callback) {
		var args = _normalizeArguments.apply(this, arguments),
			// TODO: make effects take actual parameters instead of a hash
			args2 = {
				options: args[1],
				duration: args[2],
				callback: args[3]
			},
			mode = args2.options.mode,
			effectMethod = $.effects[effect];
		
		if ( $.fx.off || !effectMethod ) {
			// delegate to the original method (e.g., .show()) if possible
			if ( mode ) {
				return this[ mode ]( args2.duration, args2.callback );
			} else {
				return this.each(function() {
					if ( args2.callback ) {
						args2.callback.call( this );
					}
				});
			}
		}
		
		return effectMethod.call(this, args2);
	},

	_show: $.fn.show,
	show: function(speed) {
		if ( standardSpeed( speed ) ) {
			return this._show.apply(this, arguments);
		} else {
			var args = _normalizeArguments.apply(this, arguments);
			args[1].mode = 'show';
			return this.effect.apply(this, args);
		}
	},

	_hide: $.fn.hide,
	hide: function(speed) {
		if ( standardSpeed( speed ) ) {
			return this._hide.apply(this, arguments);
		} else {
			var args = _normalizeArguments.apply(this, arguments);
			args[1].mode = 'hide';
			return this.effect.apply(this, args);
		}
	},

	// jQuery core overloads toggle and creates _toggle
	__toggle: $.fn.toggle,
	toggle: function(speed) {
		if ( standardSpeed( speed ) || typeof speed === "boolean" || $.isFunction( speed ) ) {
			return this.__toggle.apply(this, arguments);
		} else {
			var args = _normalizeArguments.apply(this, arguments);
			args[1].mode = 'toggle';
			return this.effect.apply(this, args);
		}
	},

	// helper functions
	cssUnit: function(key) {
		var style = this.css(key), val = [];
		$.each( ['em','px','%','pt'], function(i, unit){
			if(style.indexOf(unit) > 0)
				val = [parseFloat(style), unit];
		});
		return val;
	}
});



/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
$.easing.jswing = $.easing.swing;

$.extend($.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert($.easing.default);
		return $.easing[$.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

})(jQuery);

/*
 * jQuery UI Effects Blind 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.blind = function(o) {

	return this.queue(function() {

		// Create element
		var el = $(this), props = ['position','top','bottom','left','right'];

		// Set options
		var mode = $.effects.setMode(el, o.options.mode || 'hide'); // Set Mode
		var direction = o.options.direction || 'vertical'; // Default direction

		// Adjust
		$.effects.save(el, props); el.show(); // Save & Show
		var wrapper = $.effects.createWrapper(el).css({overflow:'hidden'}); // Create Wrapper
		var ref = (direction == 'vertical') ? 'height' : 'width';
		var distance = (direction == 'vertical') ? wrapper.height() : wrapper.width();
		if(mode == 'show') wrapper.css(ref, 0); // Shift

		// Animation
		var animation = {};
		animation[ref] = mode == 'show' ? distance : 0;

		// Animate
		wrapper.animate(animation, o.duration, o.options.easing, function() {
			if(mode == 'hide') el.hide(); // Hide
			$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
			if(o.callback) o.callback.apply(el[0], arguments); // Callback
			el.dequeue();
		});

	});

};

})(jQuery);

/*
 * jQuery UI Effects Clip 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.clip = function(o) {

	return this.queue(function() {

		// Create element
		var el = $(this), props = ['position','top','bottom','left','right','height','width'];

		// Set options
		var mode = $.effects.setMode(el, o.options.mode || 'hide'); // Set Mode
		var direction = o.options.direction || 'vertical'; // Default direction

		// Adjust
		$.effects.save(el, props); el.show(); // Save & Show
		var wrapper = $.effects.createWrapper(el).css({overflow:'hidden'}); // Create Wrapper
		var animate = el[0].tagName == 'IMG' ? wrapper : el;
		var ref = {
			size: (direction == 'vertical') ? 'height' : 'width',
			position: (direction == 'vertical') ? 'top' : 'left'
		};
		var distance = (direction == 'vertical') ? animate.height() : animate.width();
		if(mode == 'show') { animate.css(ref.size, 0); animate.css(ref.position, distance / 2); } // Shift

		// Animation
		var animation = {};
		animation[ref.size] = mode == 'show' ? distance : 0;
		animation[ref.position] = mode == 'show' ? 0 : distance / 2;

		// Animate
		animate.animate(animation, { queue: false, duration: o.duration, easing: o.options.easing, complete: function() {
			if(mode == 'hide') el.hide(); // Hide
			$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
			if(o.callback) o.callback.apply(el[0], arguments); // Callback
			el.dequeue();
		}});

	});

};

})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright � 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,e,f,g,h){return jQuery.easing[jQuery.easing.def](a,e,f,g,h)},easeInQuad:function(a,e,f,g,h){return g*(e/=h)*e+f},easeOutQuad:function(a,e,f,g,h){return -g*(e/=h)*(e-2)+f},easeInOutQuad:function(a,e,f,g,h){if((e/=h/2)<1){return g/2*e*e+f}return -g/2*((--e)*(e-2)-1)+f},easeInCubic:function(a,e,f,g,h){return g*(e/=h)*e*e+f},easeOutCubic:function(a,e,f,g,h){return g*((e=e/h-1)*e*e+1)+f},easeInOutCubic:function(a,e,f,g,h){if((e/=h/2)<1){return g/2*e*e*e+f}return g/2*((e-=2)*e*e+2)+f},easeInQuart:function(a,e,f,g,h){return g*(e/=h)*e*e*e+f},easeOutQuart:function(a,e,f,g,h){return -g*((e=e/h-1)*e*e*e-1)+f},easeInOutQuart:function(a,e,f,g,h){if((e/=h/2)<1){return g/2*e*e*e*e+f}return -g/2*((e-=2)*e*e*e-2)+f},easeInQuint:function(a,e,f,g,h){return g*(e/=h)*e*e*e*e+f},easeOutQuint:function(a,e,f,g,h){return g*((e=e/h-1)*e*e*e*e+1)+f},easeInOutQuint:function(a,e,f,g,h){if((e/=h/2)<1){return g/2*e*e*e*e*e+f}return g/2*((e-=2)*e*e*e*e+2)+f},easeInSine:function(a,e,f,g,h){return -g*Math.cos(e/h*(Math.PI/2))+g+f},easeOutSine:function(a,e,f,g,h){return g*Math.sin(e/h*(Math.PI/2))+f},easeInOutSine:function(a,e,f,g,h){return -g/2*(Math.cos(Math.PI*e/h)-1)+f},easeInExpo:function(a,e,f,g,h){return(e==0)?f:g*Math.pow(2,10*(e/h-1))+f},easeOutExpo:function(a,e,f,g,h){return(e==h)?f+g:g*(-Math.pow(2,-10*e/h)+1)+f},easeInOutExpo:function(a,e,f,g,h){if(e==0){return f}if(e==h){return f+g}if((e/=h/2)<1){return g/2*Math.pow(2,10*(e-1))+f}return g/2*(-Math.pow(2,-10*--e)+2)+f},easeInCirc:function(a,e,f,g,h){return -g*(Math.sqrt(1-(e/=h)*e)-1)+f},easeOutCirc:function(a,e,f,g,h){return g*Math.sqrt(1-(e=e/h-1)*e)+f},easeInOutCirc:function(a,e,f,g,h){if((e/=h/2)<1){return -g/2*(Math.sqrt(1-e*e)-1)+f}return g/2*(Math.sqrt(1-(e-=2)*e)+1)+f},easeInElastic:function(e,l,g,h,i){var k=1.70158;var j=0;var f=h;if(l==0){return g}if((l/=i)==1){return g+h}if(!j){j=i*0.3}if(f<Math.abs(h)){f=h;var k=j/4}else{var k=j/(2*Math.PI)*Math.asin(h/f)}return -(f*Math.pow(2,10*(l-=1))*Math.sin((l*i-k)*(2*Math.PI)/j))+g},easeOutElastic:function(e,l,g,h,i){var k=1.70158;var j=0;var f=h;if(l==0){return g}if((l/=i)==1){return g+h}if(!j){j=i*0.3}if(f<Math.abs(h)){f=h;var k=j/4}else{var k=j/(2*Math.PI)*Math.asin(h/f)}return f*Math.pow(2,-10*l)*Math.sin((l*i-k)*(2*Math.PI)/j)+h+g},easeInOutElastic:function(e,l,g,h,i){var k=1.70158;var j=0;var f=h;if(l==0){return g}if((l/=i/2)==2){return g+h}if(!j){j=i*(0.3*1.5)}if(f<Math.abs(h)){f=h;var k=j/4}else{var k=j/(2*Math.PI)*Math.asin(h/f)}if(l<1){return -0.5*(f*Math.pow(2,10*(l-=1))*Math.sin((l*i-k)*(2*Math.PI)/j))+g}return f*Math.pow(2,-10*(l-=1))*Math.sin((l*i-k)*(2*Math.PI)/j)*0.5+h+g},easeInBack:function(a,e,f,g,h,i){if(i==undefined){i=1.70158}return g*(e/=h)*e*((i+1)*e-i)+f},easeOutBack:function(a,e,f,g,h,i){if(i==undefined){i=1.70158}return g*((e=e/h-1)*e*((i+1)*e+i)+1)+f},easeInOutBack:function(a,e,f,g,h,i){if(i==undefined){i=1.70158}if((e/=h/2)<1){return g/2*(e*e*(((i*=(1.525))+1)*e-i))+f}return g/2*((e-=2)*e*(((i*=(1.525))+1)*e+i)+2)+f},easeInBounce:function(a,e,f,g,h){return g-jQuery.easing.easeOutBounce(a,h-e,0,g,h)+f},easeOutBounce:function(a,e,f,g,h){if((e/=h)<(1/2.75)){return g*(7.5625*e*e)+f}else{if(e<(2/2.75)){return g*(7.5625*(e-=(1.5/2.75))*e+0.75)+f}else{if(e<(2.5/2.75)){return g*(7.5625*(e-=(2.25/2.75))*e+0.9375)+f}else{return g*(7.5625*(e-=(2.625/2.75))*e+0.984375)+f}}}},easeInOutBounce:function(a,e,f,g,h){if(e<h/2){return jQuery.easing.easeInBounce(a,e*2,0,g,h)*0.5+f}return jQuery.easing.easeOutBounce(a,e*2-h,0,g,h)*0.5+g*0.5+f}});
/* jQuery Carousel 0.9.8
Copyright 2010 Thomas Lanciaux and Pierre Bertet.
This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/
/*
ChangeLog:
2012/07/02: Modified by D.L. Involve other effects.
*/
/// <reference path="jquery-1.7.2-vsdoc.js" />

;(function($){
	
	$.fn.carousel = function(params){
		
		var params = $.extend({
			direction: "horizontal",
			loop: false,
			dispItems: 1,
			pagination: false,
			paginationPosition: "inside",
			nextBtn: '<input type="button" value="Next" />',
			prevBtn: '<input type="button" value="Previous" />',
			btnsPosition: "inside",
			nextBtnInsert: "insertAfter",
			prevBtnInsert: "insertBefore",
			nextBtnInsertFn: false,
			prevBtnInsertFn: false,
			autoSlide: false,
			autoSlideInterval: 3000,
			delayAutoSlide: false,
			combinedClasses: false,
			effect: "slide",
			slideEasing: "swing",
			animSpeed: 300,
			equalWidths: "true",
			verticalMargin: 0,
			callback: function () {}, 
			useAddress: false,
			adressIdentifier: "carousel",
			tabLabel: function (tabNum) { return tabNum; },
			showEmptyItems: true,
			ajaxMode:false,
			ajaxUrl:"",
			stopSlideBtn: false,
			stopSlideTextPause: "Pause",
			stopSlideTextPlay: "Play",
      addPageCallback: null, 
      dispItemSelector: "li"
		}, params);
		
		// Buttons position
		if (params.btnsPosition == "outside"){
			params.prevBtnInsert = "insertBefore";
			params.nextBtnInsert = "insertAfter";
		}
		
		// Slide delay
		params.delayAutoSlide = 0 + params.delayAutoSlide;

    
		
		return this.each(function(){
			
			// Env object
			var env = {
				$elts: {},
				params: params,
				launchOnLoad: []
			};
					
			// Carousel main container
			env.$elts.carousel = $(this).addClass("js");
			
			// Carousel content
			env.$elts.content = $(this).children().css({position: "absolute", "top": 0});
			
			// Content wrapper
			env.$elts.wrap = env.$elts.content.wrap('<div class="carousel-wrap"></div>').parent().css({overflow: "hidden", position: "relative"});
			
			// env.steps object
			env.steps = {
				first: 0, // First step
				count: env.$elts.content.children().length // Items count
			};
			
			// Loader 
			env.$elts.loader = $('<div class="loader"></div>').css({'position':'absolute'});
			
			// Last visible step
			env.steps.last = env.steps.count - 1;
			
			// Pagination
			if (env.params.pagination) {
				initPagination(env, env.params.addPageCallback);
			}
			
			// Prev Button
			if ($.isFunction(env.params.prevBtnInsertFn)) {
				env.$elts.prevBtn = env.params.prevBtnInsertFn(env.$elts);
			} else { 
				if (params.btnsPosition == "outside"){
					env.$elts.prevBtn = $(params.prevBtn)[params.prevBtnInsert](env.$elts.carousel);
				} else {
					env.$elts.prevBtn = $(params.prevBtn)[params.prevBtnInsert](env.$elts.wrap);
				}
			}
			
			// Next Button
			if ($.isFunction(env.params.nextBtnInsertFn)) {
				env.$elts.nextBtn = env.params.nextBtnInsertFn(env.$elts);
			} else {
				if (params.btnsPosition == "outside"){
					env.$elts.nextBtn = $(params.nextBtn)[params.nextBtnInsert](env.$elts.carousel);
				} else {
					env.$elts.nextBtn = $(params.nextBtn)[params.nextBtnInsert](env.$elts.wrap);
				}
			}
			
			// Add buttons classes / data
			env.$elts.nextBtn.addClass("carousel-control next carousel-next");
			env.$elts.prevBtn.addClass("carousel-control previous carousel-previous");
			
			// Last items to load in ajaxMode var
			env.lastItemsToLoad;
			
			// Bind events on next / prev buttons
			initButtonsEvents(env);
			
			// Bind events on focus for keyboard control
			env.$elts.carousel.attr('tabindex',0).add(env.$elts.carousel.children()).bind({
				focus : function(e){
					$(document).bind('keypress', function(e){
						switch (e.keyCode) {
							case 39 : env.$elts.nextBtn.click(); break;
							case 37 : env.$elts.prevBtn.click(); break;
						}
						switch (e.charCode) {
							case 110 : env.$elts.nextBtn.click(); break;
							case 112 : env.$elts.prevBtn.click(); break;
						}
					});
				}, 
				blur : function(){
					$(document).unbind('keypress');
				}
			});
			
			// Address plugin
			initAddress(env);
			
      // for our customize
      env.resumeAutoSlide = function() { initAutoSlide(env); };
      // end for our customize

			// On document load...
			$(function(){
				
				// Launch carousel initialization
				initCarousel(env);
				
				// Launch function added to "document ready" event
				$.each(env.launchOnLoad, function(i,fn){
					fn();
				});
				
				// Launch autoslide
				if (env.params.autoSlide){
					initAutoSlide(env);
				}
				
				// Control Slide Button
				if(params.stopSlideBtn == true){
					env.$elts.stopSlideBtn = $('<button type="button" class="slide-control play">'+params.stopSlideTextPause+'</button>');
					createBtnStopAutoslide(env);
				}
				
			});
			
		});
		
	};
	
	// Init carousel dimensions
	function initCarousel(env){
		//Set max Height with the highest element
		var $items = env.$elts.content.children();
		var $maxHeight = 0;
		
		$items.each(function () {
			$item = $(this);
			$itemHeight = $item.outerHeight();
			if ($itemHeight > $maxHeight) {
				$maxHeight = $itemHeight;
			}
		});
		if (env.params.verticalMargin > 0) {
			$maxHeight = $maxHeight + env.params.verticalMargin;
		}
		
		$items.height($maxHeight);
		// First item
		var $firstItem = env.$elts.content.children(":first");
		
		// Width 1/1 : Get default item width
		env.itemWidth = $firstItem.outerWidth();
		
		// Width 2/3 : Define content width
		if (env.params.direction == "vertical"){
			env.contentWidth = env.itemWidth;
			
		} else {
			
			if (env.params.equalWidths) {
				env.contentWidth = env.itemWidth * env.steps.count;
				
			} else {
				env.contentWidth = (function(){
						var totalWidth = 0;
						
						env.$elts.content.children().each(function(){
							totalWidth += $(this).outerWidth();
						});
						
						return totalWidth;
					})();
			}
		}
		
		// Width 3/3 : Set content width to container
		env.$elts.content.width(env.contentWidth);
		
		// Height 1/2 : Get default item height
		env.itemHeight = $maxHeight;
		
		// Height 2/2 : Set content height to container
		if (env.params.direction == "vertical") {
			env.$elts.content.css({
				height: env.itemHeight * env.steps.count + "px"
			});
			env.$elts.content.parent().css({
				height: env.itemHeight * env.params.dispItems + "px"
			});
		} else {
			env.$elts.content.parent().css({
				height: env.itemHeight + "px"
			});
		}
		
		// Update Next / Prev buttons state
		updateButtonsState(env);
	}
	
	// Next / Prev buttons events only
	function initButtonsEvents(env){
	
		env.$elts.nextBtn.add(env.$elts.prevBtn)
			
			.bind("enable", function(){
				
				var $this = $(this)
					.unbind("click")
					.bind("click", function(){
						// Ajax init
						if(env.params.ajaxMode && $this.is('.next') && getActivePageIndex(env) == (getPageTotal(env)-1) && !env.lastItemsToLoad) {
							// Append content in ajax
							ajaxLoad(env);
							// Go to next page of the carousel
							env.$elts.content.ajaxSuccess(function() {
															
							});
						}else{							
							goToStep( env, getRelativeStep(env, ($this.is(".next")? "next" : "prev" )) );
							
							if(env.params.stopSlideBtn == true){
								env.$elts.stopSlideBtn.trigger('pause');
							} else {
								stopAutoSlide(env);
							}
						}						
					})
					.removeClass("disabled").removeAttr('disabled');
				
				// Combined classes (IE6 compatibility)
				if (env.params.combinedClasses) {
					$this.removeClass("next-disabled previous-disabled").removeAttr("disabled");
				}
			})
			.bind("disable", function(){
				
				var $this = $(this).unbind("click").addClass("disabled").attr("disabled","disabled");
				
				// Combined classes (IE6 compatibility)
				if (env.params.combinedClasses) {
					
					if ($this.is(".next")) {
						$this.addClass("next-disabled");
						
					} else if ($this.is(".previous")) {
						$this.addClass("previous-disabled");
						
					}
				}
			})
			.hover(function(){
				$(this).toggleClass("hover");
			});
	};
	
	// Pagination
	function initPagination(env, addPageCallback) {
			env.$elts.pagination = $('<div class="center-wrap"><div class="carousel-pagination"><p></p></div></div>')[((env.params.paginationPosition == "outside") ? "insertAfter" : "appendTo")](env.$elts.carousel).find("p");
			env.$elts.paginationBtns = $([]);

			env.$elts.content.children().each(function (i) {
				if (i % env.params.dispItems == 0) {
					addPage(env, i, addPageCallback);
				}
			});
			$(".carousel-pagination p a:last").css({display:"none"});
    };
	
	// Add a page in pagintion (@ the end)
	function addPage(env, firststep, addPageCallback) {
		if(env.params.pagination){
			env.$elts.paginationBtns = env.$elts.paginationBtns.add($('<a role="button"><span>' + env.params.tabLabel(env.$elts.paginationBtns.length + 1) + '</span></a>').data("firstStep", firststep))
			.appendTo(env.$elts.pagination);
			env.$elts.paginationBtns.slice(0, 1).addClass("active");
			env.$elts.paginationBtns.click(function (e) {
				goToStep(env, $(this).data("firstStep"));
				if(env.params.stopSlideBtn == true){
					env.$elts.stopSlideBtn.trigger('pause');
				} else {
					stopAutoSlide(env);
				}
			});

      if($.isFunction(addPageCallback)){
        addPageCallback(env.$elts.paginationBtns, env);
      }
		}
	}
	
	// Address plugin
	function initAddress(env) {
		
		if (env.params.useAddress && $.isFunction($.fn.address)) {
			
			$.address
				.init(function(e) {
					var pathNames = $.address.pathNames();
					if (pathNames[0] === env.params.adressIdentifier && !!pathNames[1]) {
						goToStep(env, pathNames[1]-1);
					} else {
						$.address.value('/'+ env.params.adressIdentifier +'/1');
					}
				})
				.change(function(e) {
					var pathNames = $.address.pathNames();
					if (pathNames[0] === env.params.adressIdentifier && !!pathNames[1]) {
						goToStep(env, pathNames[1]-1);
					}
				});
		} else {
			env.params.useAddress = false;
		}
	};
	
	function goToStep(env, step) {
		
		// Callback
		env.params.callback(step);
		
		// Launch animation
		step=transition(env, step);
		
		// Update first step
		env.steps.first = step;
		
		// Update buttons status
		updateButtonsState(env);
		
		// Update address (jQuery Address plugin)
		if ( env.params.useAddress ) {
			$.address.value('/'+ env.params.adressIdentifier +'/' + (step + 1));
		}
		
	};
	
	// Get next/prev step, useful for autoSlide
	function getRelativeStep(env, position) {
		if (position == "prev") {
			if (!env.params.showEmptyItems) {
				if (env.steps.first == 0) {
					return ((env.params.loop) ? (env.steps.count - env.params.dispItems) : false);
				} else {
					return Math.max(0, env.steps.first - env.params.dispItems);
				}
			} else {
				if ((env.steps.first - env.params.dispItems) >= 0) {
					return env.steps.first - env.params.dispItems;
				} else {
					return ((env.params.loop) ? (env.steps.count - env.params.dispItems) : false);
				}
			}
		} else if (position == "next") {
			if ((env.steps.first + env.params.dispItems) < env.steps.count) {
				if (!env.params.showEmptyItems) {
					return Math.min(env.steps.first + env.params.dispItems, env.steps.count - env.params.dispItems);
				} else {
					return env.steps.first + env.params.dispItems;
				}
			} else {
				return ((env.params.loop) ? 0 : false);
			}
		}
	};
	
	// Animation
	function transition(env, step) {
		var retStep=step;
		// Effect
		switch (env.params.effect){
			
			// No effect
			case "no":
				if (env.params.direction == "vertical"){
					env.$elts.content.css("top", -(env.itemHeight * step) + "px");
				} else {
					env.$elts.content.css("left", -(env.itemWidth * step) + "px");
				}
				break;
			
			// fade effect
			case "fade":
				if (env.params.direction == "vertical"){
					env.$elts.content.fadeOut(env.params.animSpeed, function(){
                              $(this).css("top", -(env.itemHeight * step) + "px").fadeIn(env.params.animSpeed);
                            });
				} else {
					env.$elts.content.fadeOut(env.params.animSpeed, function(){
                              $(this).css("left", -(env.itemWidth * step) + "px").fadeIn(env.params.animSpeed);
                            });
				}
				break;

      // slide effect
      case "slide":
				if (env.params.direction == "vertical"){
                /*
					env.$elts.content.stop().animate({
						top : -(env.itemHeight * step) + "px"
					}, env.params.animSpeed, env.params.slideEasing);
                */
                    var isLastFrame=step==env.steps.count-1;
					if(isLastFrame)
						retStep=0;
					env.$elts.content.stop().animate({
						top : -(env.itemHeight * step) + "px"
					    }, 
                        env.params.animSpeed, env.params.slideEasing,
                        function(){
						    if(isLastFrame){
						    env.$elts.content.stop().css({
							    top:"0px"
						    });						
					    }
					});
				} else {
					var isLastFrame=step==env.steps.count-1;
					if(isLastFrame)
						retStep=0;
					env.$elts.content.stop().animate({
						left : -(env.itemWidth * step) + "px"
					    }, 
                        env.params.animSpeed, env.params.slideEasing,
                        function(){
						    if(isLastFrame){
						    env.$elts.content.stop().css({
							    left:"0px"
						    });
					    }
					});
					
				/*env.$elts.content.children().each(function(i,item){
					var index=i-step;
					var imgCount=3;
					if(index<0)
					   index=imgCount+index;
					$(this).css({
						left:(env.itemWidth*index)+'px'
					});*/
					/*$(this).animate({
						left:(env.itemWidth*index)+'px'
					},env.params.animSpeed,env.params.slideEasing);*/
				//});

					
					
				}
				break;

      // opacity effect 
      case "opacity":
        var nthFrom = (env.steps.first+1);
        var nthTo = (step+1);

        if(nthFrom != nthTo){
          var tranFrom = env.$elts.content.find(env.params.dispItemSelector + ":nth-child(" + nthFrom + ")");
          var tranTo = env.$elts.content.find(env.params.dispItemSelector + ":nth-child(" + nthTo + ")");
          env.$elts.content.stop(true, true).find(env.params.dispItemSelector).stop(true, true);

          if (env.params.direction == "vertical"){
            tranTo.css({opacity: 0.0, position:"absolute", top:0, "z-index":2})
              .animate({opacity: 1.0}, env.params.animSpeed, function(){
                tranFrom.css({opacity: 0.0, "z-index":0});
                tranTo.css({"z-index": 1});
              });
          } else {
            tranTo.css({opacity: 0.0, position:"absolute", left:0, "z-index":2})
              .animate({opacity: 1.0}, env.params.animSpeed, function(){
                tranFrom.css({opacity: 0.0, "z-index":0});
                tranTo.css({"z-index": 1});
              });
          }
        }
        //console.info(log);
        break;

      default:
        var nthFrom = (env.steps.first+1);
        var nthTo = (step+1);

        if(nthFrom != nthTo){
          var tranFrom = env.$elts.content.find(env.params.dispItemSelector + ":nth-child(" + nthFrom + ")");
          var tranTo = env.$elts.content.find(env.params.dispItemSelector + ":nth-child(" + nthTo + ")");
          env.$elts.content.stop(true, true).find(env.params.dispItemSelector).stop(true, true);

          if (env.params.direction == "vertical"){
            tranFrom.hide(env.params.effect, { direction: "vertical" }, env.params.animSpeed, function(){
              tranTo.css({position:"absolute", top:0})
                    .show(env.params.effect, { direction: "vertical" }, env.params.animSpeed);
            });
				  } else {
            tranFrom.hide(env.params.effect, { direction: "horizontal" }, env.params.animSpeed, function(){
              tranTo.css({position:"absolute", left:0})
                    .show(env.params.effect, { direction: "horizontal" }, env.params.animSpeed);
            });
				  }
        }
        //console.info(log);
        break;
		}
		return retStep;
	};
	
	// Update all buttons state : disabled or not
	function updateButtonsState(env){
		
		if (getRelativeStep(env, "prev") !== false) {
			env.$elts.prevBtn.trigger("enable");
			
		} else {
			env.$elts.prevBtn.trigger("disable");
		}
		
		if (getRelativeStep(env, "next") !== false) {
			env.$elts.nextBtn.trigger("enable");
			
		} else {
			env.$elts.nextBtn.trigger("disable");
		}
		
		if (env.params.pagination){
			env.$elts.paginationBtns.removeClass("active")
			.filter(function(){ 			
				return ($(this).data("firstStep") == env.steps.first) 
			})
			.addClass("active");
		}
	};	
	
	// Launch Autoslide
	function initAutoSlide(env) {
		env.delayAutoSlide = window.setTimeout(function(){
			env.autoSlideInterval = window.setInterval(function(){
				goToStep( env, getRelativeStep(env, "next") );
			}, env.params.autoSlideInterval);
		}, env.params.delayAutoSlide);
	};
	
	// Stop autoslide
	function stopAutoSlide(env) {
		window.clearTimeout(env.delayAutoSlide);
		window.clearInterval(env.autoSlideInterval);
		env.params.delayAutoSlide = 0;
	};
	
	// Create button "stop autoslide"
	function createBtnStopAutoslide(env){
		var jButton = env.$elts.stopSlideBtn;
		
		jButton.bind({
			'play' : function(){
				initAutoSlide(env);
				jButton.removeClass('pause').addClass('play').html(env.params.stopSlideTextPause);
			}, 
			'pause' : function(){
				stopAutoSlide(env);
				jButton.removeClass('play').addClass('pause').html(env.params.stopSlideTextPlay);
			}
		});
		
		jButton.click(function(e){
			if(jButton.is('.play')){
				jButton.trigger('pause');
			} else if (jButton.is('.pause')){
				jButton.trigger('play');
			}
		});
		
		jButton.prependTo(env.$elts.wrap);
	};
	
	// Get total number of page in the carousel
	function getPageTotal(env) {
		return env.$elts.pagination.children().length;
	};
	
	function getActivePageIndex(env){
		return env.steps.first/env.params.dispItems;
	}
	
	// Load next page via Ajax
	function ajaxLoad(env) {
		// insert loader
		env.$elts.carousel.prepend(env.$elts.loader);
		
		// ajax call				
		$.ajax({
			url: env.params.ajaxUrl,
			dataType: 'json',
			success: function(data) {
				// set if the last item of the carousel have been loaded and add items to the carousel
				env.lastItemsToLoad = data.bLastItemsToLoad;
				$(env.$elts.content).append(data.shtml);
				
				// reinit count (number of items have changed after ajax call)
				env.steps = {
					first: env.steps.first + env.params.dispItems,
					count: env.$elts.content.children().length
				};
				env.steps.last = env.steps.count - 1;
				
				// rewrite carousel dimensions
				initCarousel(env);
				// rewrite/append pagination
				addPage(env,env.steps.first);
				
				// slide to next page
				goToStep( env, env.steps.first );
				if(env.params.stopSlideBtn == true){
					env.$elts.stopSlideBtn.trigger('pause');
				} else {
					stopAutoSlide(env);
				}
				
				// remove loader
				env.$elts.loader.remove();
			}
		});		
	}
	
})(jQuery);
/* ===========================================================
 * bootstrap-tooltip.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      if (this.options.trigger != 'manual') {
        eventIn  = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
        this.$element.on(eventIn, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut, this.options.selector, $.proxy(this.leave, this))
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , inside
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        inside = /in/.test(placement)

        $tip
          .remove()
          .css({ top: 0, left: 0, display: 'block' })
          .appendTo(inside ? this.$element : document.body)

        pos = this.getPosition(inside)

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        $tip
          .css(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , isHTML: function(text) {
      // html string detection logic adapted from jQuery
      return typeof text != 'string'
        || ( text.charAt(0) === "<"
          && text.charAt( text.length - 1 ) === ">"
          && text.length >= 3
        ) || /^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(text)
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.isHTML(title) ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).remove()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.remove()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.remove()
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function (inside) {
      return $.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
        width: this.$element[0].offsetWidth
      , height: this.$element[0].offsetHeight
      })
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function () {
      this[this.tip().hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover'
  , title: ''
  , delay: 0
  }

}(window.jQuery);

/* ===========================================================
 * bootstrap-popover.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function ( element, options ) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.isHTML(title) ? 'html' : 'text'](title)
      $tip.find('.popover-content > *')[this.isHTML(content) ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = $e.attr('data-content')
        || (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
  })

}(window.jQuery);
/*!

    Copyright (c) 2011 Peter van der Spek

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    
 */


(function($) {

    /**
     * Hash containing mapping of selectors to settings hashes for target selectors that should be live updated.
     *
     * @type {Object.<string, Object>}
     * @private
     */
    var liveUpdatingTargetSelectors = {};

    /**
     * Interval ID for live updater. Contains interval ID when the live updater interval is active, or is undefined
     * otherwise.
     *
     * @type {number}
     * @private
     */
    var liveUpdaterIntervalId;

    /**
     * Boolean indicating whether the live updater is running.
     *
     * @type {boolean}
     * @private
     */
    var liveUpdaterRunning = false;

    /**
     * Set of default settings.
     *
     * @type {Object.<string, string>}
     * @private
     */
    var defaultSettings = {
                ellipsis: '...',
                setTitle: 'never',
                live: false
            };

    /**
     * Perform ellipsis on selected elements.
     *
     * @param {string} selector the inner selector of elements that ellipsis may work on. Inner elements not referred to by this
     *      selector are left untouched.
     * @param {Object.<string, string>=} options optional options to override default settings.
     * @return {jQuery} the current jQuery object for chaining purposes.
     * @this {jQuery} the current jQuery object.
     */
    $.fn.ellipsis = function(selector, options) {
        var subjectElements, settings;

        subjectElements = $(this);

        // Check for options argument only.
        if (typeof selector !== 'string') {
            options = selector;
            selector = undefined;
        }

        // Create the settings from the given options and the default settings.
        settings = $.extend({}, defaultSettings, options);

        // If selector is not set, work on immediate children (default behaviour).
        settings.selector = selector;

        // Do ellipsis on each subject element.
        subjectElements.each(function() {
            var elem = $(this);

            // Do ellipsis on subject element.
            ellipsisOnElement(elem, settings);
        });

        // If live option is enabled, add subject elements to live updater. Otherwise remove from live updater.
        if (settings.live) {
            addToLiveUpdater(subjectElements.selector, settings);

        } else {
            removeFromLiveUpdater(subjectElements.selector);
        }

        // Return jQuery object for chaining.
        return this;
    };


    /**
     * Perform ellipsis on the given container.
     *
     * @param {jQuery} containerElement jQuery object containing one DOM element to perform ellipsis on.
     * @param {Object.<string, string>} settings the settings for this ellipsis operation.
     * @private
     */
    function ellipsisOnElement(containerElement, settings) {
        var containerData = containerElement.data('jqae');
        if (!containerData) containerData = {};

        // Check if wrapper div was already created and bound to the container element.
        var wrapperElement = containerData.wrapperElement;

        // If not, create wrapper element.
        if (!wrapperElement) {
            wrapperElement = containerElement.wrapInner('<div/>').find('>div');
        }

        // Check if the original wrapper element content was already bound to the wrapper element.
        var wrapperElementData = wrapperElement.data('jqae');
        if (!wrapperElementData) wrapperElementData = {};

        var wrapperOriginalContent = wrapperElementData.originalContent;

        // If so, clone the original content, re-bind the original wrapper content to the clone, and replace the
        // wrapper with the clone.
        if (wrapperOriginalContent) {
            wrapperElement = wrapperElementData.originalContent.clone(true)
                    .data('jqae', {originalContent: wrapperOriginalContent}).replaceAll(wrapperElement);

        } else {
            // Otherwise, clone the current wrapper element and bind it as original content to the wrapper element.

            wrapperElement.data('jqae', {originalContent: wrapperElement.clone(true)});
        }

        // Bind the wrapper element and current container width and height to the container element. Current container
        // width and height are stored to detect changes to the container size.
        containerElement.data('jqae', {
            wrapperElement: wrapperElement,
            containerWidth: containerElement.innerWidth(),
            containerHeight: containerElement.innerHeight()
        });


        // Normally the ellipsis characters are applied to the last non-empty text-node in the selected element. If the
        // selected element becomes empty during ellipsis iteration, the ellipsis characters cannot be applied to that
        // selected element, and must be deferred to the previous selected element. This parameter keeps track of that.
        var deferAppendEllipsis = false;

        // Loop through all selected elements in reverse order.
        var selectedElements = wrapperElement;
        if (settings.selector) selectedElements = $(wrapperElement.find(settings.selector).get().reverse());

        selectedElements.each(function() {
            var selectedElement = $(this),
                    originalText = selectedElement.text(),
                    ellipsisApplied = false;

            // Check if we can safely remove the selected element. This saves a lot of unnecessary iterations.
            if (wrapperElement.innerHeight() - selectedElement.innerHeight() > containerElement.innerHeight()) {
                selectedElement.remove();

            } else {
                // Reverse recursively remove empty elements, until the element that contains a non-empty text-node.
                removeLastEmptyElements(selectedElement);

                // If the selected element has not become empty, start ellipsis iterations on the selected element.
                if (selectedElement.contents().length) {

                    // If a deffered ellipsis is still pending, apply it now to the last text-node.
                    if (deferAppendEllipsis) {
                        getLastTextNode(selectedElement).get(0).nodeValue += settings.ellipsis;
                        deferAppendEllipsis = false;
                    }

                    // Iterate until wrapper element height is less than or equal to the container element height.
                    while (wrapperElement.innerHeight() > containerElement.innerHeight()) {
                        // Apply ellipsis on last text node, by removing one word.
                        ellipsisApplied = ellipsisOnLastTextNode(selectedElement);

                        // If ellipsis was succesfully applied, remove any remaining empty last elements and append the
                        // ellipsis characters.
                        if (ellipsisApplied) {
                            removeLastEmptyElements(selectedElement);

                            // If the selected element is not empty, append the ellipsis characters.
                            if (selectedElement.contents().length) {
                                getLastTextNode(selectedElement).get(0).nodeValue += settings.ellipsis;

                            } else {
                                // If the selected element has become empty, defer the appending of the ellipsis characters
                                // to the previous selected element.
                                deferAppendEllipsis = true;
                                selectedElement.remove();
                                break;
                            }

                        } else {
                            // If ellipsis could not be applied, defer the appending of the ellipsis characters to the
                            // previous selected element.
                            deferAppendEllipsis = true;
                            selectedElement.remove();
                            break;
                        }
                    }

                    // If the "setTitle" property is set to "onEllipsis" and the ellipsis has been applied, or if the
                    // property is set to "always", the add the "title" attribute with the original text. Else remove the
                    // "title" attribute. When the "setTitle" property is set to "never" we do not touch the "title"
                    // attribute.
                    if (((settings.setTitle == 'onEllipsis') && ellipsisApplied) || (settings.setTitle == 'always')) {
                        selectedElement.attr('title', originalText);

                    } else if (settings.setTitle != 'never') {
                        selectedElement.removeAttr('title');
                    }
                }
            }
        });
    }

    /**
     * Performs ellipsis on the last text node of the given element. Ellipsis is done by removing a full word.
     *
     * @param {jQuery} element jQuery object containing a single DOM element.
     * @return {boolean} true when ellipsis has been done, false otherwise.
     * @private
     */
    function ellipsisOnLastTextNode(element) {
        var lastTextNode = getLastTextNode(element);

        // If the last text node is found, do ellipsis on that node.
        if (lastTextNode.length) {
            var text = lastTextNode.get(0).nodeValue;

            // Find last space character, and remove text from there. If no space is found the full remaining text is
            // removed.
            var pos = text.lastIndexOf(' ');
            if (pos > -1) {
                text = $.trim(text.substring(0, pos));
                lastTextNode.get(0).nodeValue = text;

            } else {
                lastTextNode.get(0).nodeValue = '';
            }

            return true;
        }

        return false;
    }

    /**
     * Get last text node of the given element.
     *
     * @param {jQuery} element jQuery object containing a single element.
     * @return {jQuery} jQuery object containing a single text node.
     * @private
     */
    function getLastTextNode(element) {
        if (element.contents().length) {

            // Get last child node.
            var contents = element.contents();
            var lastNode = contents.eq(contents.length - 1);

            // If last node is a text node, return it.
            if (lastNode.filter(textNodeFilter).length) {
                return lastNode;

            } else {
                // Else it is an element node, and we recurse into it.

                return getLastTextNode(lastNode);
            }

        } else {
            // If there is no last child node, we append an empty text node and return that. Normally this should not
            // happen, as we test for emptiness before calling getLastTextNode.

            element.append('');
            var contents = element.contents();
            return contents.eq(contents.length - 1);
        }
    }

    /**
     * Remove last empty elements. This is done recursively until the last element contains a non-empty text node.
     *
     * @param {jQuery} element jQuery object containing a single element.
     * @return {boolean} true when elements have been removed, false otherwise.
     * @private
     */
    function removeLastEmptyElements(element) {
        if (element.contents().length) {

            // Get last child node.
            var contents = element.contents();
            var lastNode = contents.eq(contents.length - 1);

            // If last child node is a text node, check for emptiness.
            if (lastNode.filter(textNodeFilter).length) {
                var text = lastNode.get(0).nodeValue;
                text = $.trim(text);

                if (text == '') {
                    // If empty, remove the text node.
                    lastNode.remove();

                    return true;

                } else {
                    return false;
                }

            } else {
                // If the last child node is an element node, remove the last empty child nodes on that node.
                while (removeLastEmptyElements(lastNode)) {
                }

                // If the last child node contains no more child nodes, remove the last child node.
                if (lastNode.contents().length) {
                    return false;

                } else {
                    lastNode.remove();

                    return true;
                }
            }
        }   

        return false;
    }

    /**
     * Filter for testing on text nodes.
     *
     * @return {boolean} true when this node is a text node, false otherwise.
     * @this {Node}
     * @private
     */
    function textNodeFilter() {
        return this.nodeType === 3;
    }

    /**
     * Add target selector to hash of target selectors. If this is the first target selector added, start the live
     * updater.
     *
     * @param {string} targetSelector the target selector to run the live updater for.
     * @param {Object.<string, string>} settings the settings to apply on this target selector.
     * @private
     */
    function addToLiveUpdater(targetSelector, settings) {
        // Store target selector with its settings.
        liveUpdatingTargetSelectors[targetSelector] = settings;

        // If the live updater has not yet been started, start it now.
        if (!liveUpdaterIntervalId) {
            liveUpdaterIntervalId = window.setInterval(function() {
                doLiveUpdater();
            }, 200);
        }
    }

    /**
     * Remove the target selector from the hash of target selectors. It this is the last remaining target selector
     * being removed, stop the live updater.
     *
     * @param {string} targetSelector the target selector to stop running the live updater for.
     * @private
     */
    function removeFromLiveUpdater(targetSelector) {
        // If the hash contains the target selector, remove it.
        if (liveUpdatingTargetSelectors[targetSelector]) {
            delete liveUpdatingTargetSelectors[targetSelector];

            // If no more target selectors are in the hash, stop the live updater.
            if (!liveUpdatingTargetSelectors.length) {
                if (liveUpdaterIntervalId) {
                    window.clearInterval(liveUpdaterIntervalId);
                    liveUpdaterIntervalId = undefined;
                }
            }
        }
    };

    /**
     * Run the live updater. The live updater is periodically run to check if its monitored target selectors require
     * re-applying of the ellipsis.
     *
     * @private
     */
    function doLiveUpdater() {
        // If the live updater is already running, skip this time. We only want one instance running at a time.
        if (!liveUpdaterRunning) {
            liveUpdaterRunning = true;

            // Loop through target selectors.
            for (var targetSelector in liveUpdatingTargetSelectors) {
                $(targetSelector).each(function() {
                    var containerElement, containerData;

                    containerElement = $(this);
                    containerData = containerElement.data('jqae');

                    // If container element dimensions have changed, or the container element is new, run ellipsis on
                    // that container element.
                    if ((containerData.containerWidth != containerElement.innerWidth()) ||
                            (containerData.containerHeight != containerElement.innerHeight())) {
                        ellipsisOnElement(containerElement, liveUpdatingTargetSelectors[targetSelector]);
                    }
                });
            }

            liveUpdaterRunning = false;
        }
    };

})(jQuery);
/******************************************************************************************************

	jQuery.ThreeDots

	Author Jeremy Horn
	Version 1.0.10 (Developed in Aptana Studio 1.5.1)
	Date: 1/25/2010

	Copyright (c) 2010 Jeremy Horn- jeremydhorn(at)gmail(dot)c0m | http://tpgblog.com
	Dual licensed under MIT and GPL.

	For more detailed documentation, including the latest updates and links to more usage and 
	examples, go to:
	
			http://tpgblog.com/ThreeDots/

	KNOWN BUGS
		None

	DESCRIPTION

		Sometimes the text ...
			... is too long ...
			... won't fit within the number of rows you have available.
		
		Sometimes all you need is ... ThreeDots!
		
		ThreeDots is a customizable jQuery plugin for the smart truncation of text.  It shortens 
		provided text to fit specified dimensions and appends the desired ellipsis style
		if/when truncation occurs.  		
		
		For example ---
		
			This:
				There was once a brown fox
				that liked to eat chocolate
				pudding.
			
			When restricted to 2 lines by ThreeDots, can become:
				There was once a brown fox
				that liked to eat ...
				
			Or:
				There was once a brown fox
				that liked to (click for more)

			... and most any other permutation you desire.


	BY DEFAULT
		The three dots ellipsis ("...") is used, as shown in the prior example, and limits
		text to a maximum of 2 lines.  These and many other characteristics are fully customizable,
		and fully itemized and explained below.


	IMPLEMENTATION

		HTML:		<div class='text_here'><span class='ellipsis_text'>TEXT</span></div>
		JS:			$('.text_here').ThreeDots(); // USE DEFAULTS
					$('.text_here2').ThreeDots({ { max_rows:3 });
		

	COMPATIBILITY

		Tested in FF3.5, IE7, Chrome
		With jQuery 1.3.x, 1.4

	METHODS

		ThreeDots()
		
		When intialized the ThreeDots plugin creates and assigns the full set of provided text 
		to each container element as a publically accessible attribute, 'threedots'.  Method 
		implementation supports chaining and returns jQuery object.

		Note that to implement, the text that you wish to ellipsize must be wrapped in a span
		assigned either the default class 'ellipsis_text' or other custom class of your 
		preference -- customizable via the options/settings.
		
		If the text becomes truncated to fit within the constrained space defined by the 
		container element that holds the 'ellipsis_text' span then an additional span is
		appended within the container object, and after the 'ellipsis_text' span.
		
		Note, that the span class of 'threedots_ellipsis' can also be customized via the 
		options/settings and have it's own CSS/jQuery styles/actions/etc. applied to it as
		desired.
		
		If any of the specified settings are invalid or the 'ellipsis_text' span is missing
		nothing will happen.

		IMPORTANT:	The horizontal constrains placed upon each row are controled by the 
					container object.  The container object is the object specified in the 
					primary selector.
					
						e.g. $('container_object').ThreeDots();
					
					So, remember to set container_object's WIDTH.
						
		ThreeDots.update()
			Refreshes the contents of the text within the target object inline with the
			options provided. Note, that the current implementation of options/settings
			are destructive.  This means that whenever OPTIONS are specified they are
			merged with the DEFAULT options and applied to the current object(s), and 
			destroy/override any previously specified options/settings.
			
				example:
					var obj = $('.text_here').ThreeDots();  // uses DEFAULT: max_rows = 2
					obj.update({max_rows:3});				// update the text with max_rows = 3

	CUSTOMIZATION

		ThreeDots(OPTIONS)
		e.g. $('.text_here').ThreeDots({ max_rows: 4 });
					
		
		valid_delimiters:	character array of special characters upon which the text string may be broken up;
							defines what characters can be used to express the bounds of a word
							
							all elements in this array must be 1 character in length; any delimiter less than 
							or greater than	1 character will be ignored
														
							
		ellipsis_string: 	defines what to display at the tail end of the text provided if the text becomes 
							truncated to fit within the space defined by the container object
												
							
		max_rows:			specifies the upper limit for the number of rows that the object's text can use
				
		
		text_span_class:	by default ThreeDots will look within the specified object(s) for a span
							of the class 'ellipsis_text'
							
		
		e_span_class:		if an ellipsis_string is displayed at the tail end of the selected object's
							text due to truncation of that text then it will be displayed wrapped within
							a span associated with the class defined by e_span_class and immediately
							following the text_span_class' span
		
		
		whole_word:			when fitting the provided text to the max_rows within the container object
							this boolean setting defines whether or not the 
							
								if true
									THEN	don't truncate any words; ellipsis can ONLY be placed after 
											the last whole word that fits within the provided space, OR
											
								if false
									THEN	maximuze the text within the provided space, allowing the 
											PARTIAL display of words before the ellipsis
		
		
		allow_dangle:		a dangling ellipsis is an ellipsis that typically occurs due to words that
							are longer than a single row of text, resulting, upon text truncation in
							the ellipsis being displayed on a row all by itself
													
							if allow_dangle is set to false, whole_words is overridden ONLY in the 
							circumstances where a dangling ellipsis occurs and the displayed text
							is adjusted to minimize the occurence of such dangling
									
		
		alt_text_e: 		alt_text_e is a shortcut to enabling the user of the product that 
							made use of ThreeDots to see the full text, prior to truncation
							
							if the value is set to true, then the ellipsis span's title property
							is set to the full, original text (pre-truncation)
		
		
		alt_text_t: 		alt_text_t is a shortcut to enabling the user of the product that 
							made use of ThreeDots to see the full text, prior to truncation
							
							if the value is set to true AND the ellipsis is displayed, then the 
							text span's title property is set to the full, original text 
							(pre-truncation) 
	

	MORE

		For latest updates and links to more usage and examples, go to:
			http://tpgblog.com/ThreeDots/
			
	FUTURE NOTE
	
		Do not write any code dependent on the c_settings variable.  If you don't know what this is
		cool -- you don't need to. ;-)  c_settings WILL BE DEPRECATED.
		
		Further optimizations in progress...

******************************************************************************************************/


(function($) {

	/**********************************************************************************

		METHOD
			ThreeDots {PUBLIC}

		DESCRIPTION
			ThreeDots method constructor
			
			allows for the customization of ellipsis, delimiters, etc., and smart 
			truncation of provided objects' text
					
				e.g. $(something).ThreeDots();

	**********************************************************************************/

	$.fn.ThreeDots = function(options) {
		var return_value = this;

		// check for new & valid options
		if ((typeof options == 'object') || (options == undefined)) {
			$.fn.ThreeDots.the_selected = this;

			var return_value = $.fn.ThreeDots.update(options);

		}
		
		return return_value;
	};


	/**********************************************************************************

		METHOD
			ThreeDots.update {PUBLIC}

		DESCRIPTION
			applies the core logic of ThreeDots
			
			allows for the customization of ellipsis, delimiters, etc., and smart 
			truncation of provided objects' text
			
			updates the objects' visible text to fit within its container(s)
		
		TODO
			instead of having all options/settings calls be constructive have 
			settings associated w/ object returned also accessible from HERE 
			[STATIC settings, associated w/ the initial call] 

	**********************************************************************************/

	$.fn.ThreeDots.update = function(options) {
		// initialize local variables
		var curr_this, last_word = null;
		var lineh, paddingt, paddingb, innerh, temp_height;
		var curr_text_span, lws; /* last word structure */
		var last_text, three_dots_value, last_del;

		// check for new & valid options
		if ((typeof options == 'object') || (options == undefined)) {

			// then update the settings
			// CURRENTLY, settings are not CONSTRUCTIVE, but merged with the DEFAULTS every time
			$.fn.ThreeDots.c_settings = $.extend({}, $.fn.ThreeDots.settings, options);
			var max_rows = $.fn.ThreeDots.c_settings.max_rows;
			if (max_rows < 1) {
				return $.fn.ThreeDots.the_selected;
			}

			// make sure at least 1 valid delimiter
			var valid_delimiter_exists = false;
			jQuery.each($.fn.ThreeDots.c_settings.valid_delimiters, function(i, curr_del) {
				if (((new String(curr_del)).length == 1)) {
					valid_delimiter_exists = true; 
				}
			});
			if (valid_delimiter_exists == false) {
				return $.fn.ThreeDots.the_selected;
			}
			
			// process all provided objects
			$.fn.ThreeDots.the_selected.each(function() {

				// element-specific code here
				curr_this = $(this);
		
				// obtain the text span
				if ($(curr_this).children('.'+$.fn.ThreeDots.c_settings.text_span_class).length == 0) { 
					// if span doesnt exist, then go to next
					return true;
				}
				curr_text_span = $(curr_this).children('.'+$.fn.ThreeDots.c_settings.text_span_class).get(0);

				// pre-calc fixed components of num_rows
				var nr_fixed = num_rows(curr_this, true);

				// remember where it all began so that we can see if we ended up exactly where we started
				var init_text_span = $(curr_text_span).text();

				// preprocessor
				the_bisector(curr_this, curr_text_span, nr_fixed);
				var init_post_b = $(curr_text_span).text();

				// if the object has been initialized, then user must be calling UPDATE
				// THEREFORE refresh the text area before re-operating
				if ((three_dots_value = $(curr_this).attr('threedots')) != undefined) {
					$(curr_text_span).text(three_dots_value);						
					$(curr_this).children('.'+$.fn.ThreeDots.c_settings.e_span_class).remove();
				}

				last_text = $(curr_text_span).text();
				if (last_text.length <= 0) {
					last_text = '';
				}
				$(curr_this).attr('threedots', init_text_span);

				if (num_rows(curr_this, nr_fixed) > max_rows) {
					// append the ellipsis span & remember the original text
					curr_ellipsis = $(curr_this).append('<span style="white-space:nowrap" class="'	
														+ $.fn.ThreeDots.c_settings.e_span_class + '">'
														+ $.fn.ThreeDots.c_settings.ellipsis_string 
														+ '</span>');
	
					// remove 1 word at a time UNTIL max_rows
					while (num_rows(curr_this, nr_fixed) > max_rows) {
						
						lws = the_last_word($(curr_text_span).text());// HERE
						$(curr_text_span).text(lws.updated_string);
						last_word = lws.word;
						last_del = lws.del;

						if (last_del == null) {
							break;					
						}
					} // while (num_rows(curr_this, nr_fixed) > max_rows)

					// check for super long words
					if (last_word != null) {
						var is_dangling = dangling_ellipsis(curr_this, nr_fixed);

						if ((num_rows(curr_this, nr_fixed) <= max_rows - 1) 
							|| (is_dangling) 
							|| (!$.fn.ThreeDots.c_settings.whole_word)) {

							last_text = $(curr_text_span).text();
							if (lws.del != null) {
								$(curr_text_span).text(last_text + last_del);
							}
									
							if (num_rows(curr_this, nr_fixed) > max_rows) {
								// undo what i just did and stop
								$(curr_text_span).text(last_text);
							} else {
								// keep going
								$(curr_text_span).text($(curr_text_span).text() + last_word);
								
								// break up the last word IFF (1) word is longer than a line, OR (2) whole_word == false
								if ((num_rows(curr_this, nr_fixed) > max_rows + 1) 
									|| (!$.fn.ThreeDots.c_settings.whole_word)
									|| (init_post_b == last_word)
									|| is_dangling) {
									// remove 1 char at a time until it all fits
									while ((num_rows(curr_this, nr_fixed) > max_rows)) {
										if ($(curr_text_span).text().length > 0) {
											$(curr_text_span).text(
												$(curr_text_span).text().substr(0, $(curr_text_span).text().length - 1)
											);
										} else {
											/* 
											 there is no hope for you; you are crazy;
											 either pick a shorter ellipsis_string OR
											 use a wider object --- geeze!
											 */
											break;
										}
									}							
								}
							}
						}
					}
				}	
				
				// if nothing has changed, remove the ellipsis
				if (init_text_span == $($(curr_this).children('.' + $.fn.ThreeDots.c_settings.text_span_class).get(0)).text()) {
					$(curr_this).children('.' + $.fn.ThreeDots.c_settings.e_span_class).remove();
				} else {				
					// only add any title text if the ellipsis is visible
					if (($(curr_this).children('.' + $.fn.ThreeDots.c_settings.e_span_class)).length > 0) {
						if ($.fn.ThreeDots.c_settings.alt_text_t) {
							$(curr_this).children('.' + $.fn.ThreeDots.c_settings.text_span_class).attr('title', init_text_span);
						}
						
						if ($.fn.ThreeDots.c_settings.alt_text_e) {
							$(curr_this).children('.' + $.fn.ThreeDots.c_settings.e_span_class).attr('title', init_text_span);
						}
						
					}
				}
			}); // $.fn.ThreeDots.the_selected.each(function() 
		}

		return $.fn.ThreeDots.the_selected;
	};


	/**********************************************************************************

		METHOD
			ThreeDots.settings {PUBLIC}

		DESCRIPTION
			data structure containing the max_rows, ellipsis string, and other
			behavioral settings
			
			can be directly accessed by '$.fn.ThreeDots.settings = ...... ;'

	**********************************************************************************/

	$.fn.ThreeDots.settings = {
		valid_delimiters: 	[' ', ',', '.'],		// what defines the bounds of a word to you?
		ellipsis_string: 	'...',
		max_rows:			2,
		text_span_class:	'ellipsis_text',
		e_span_class:		'threedots_ellipsis',
		whole_word:			true,
		allow_dangle:		false,
		alt_text_e: 		false,					// if true, mouse over of ellipsis displays the full text
		alt_text_t: 		false  					// if true & if ellipsis displayed, mouse over of text displays the full text
	};


	/**********************************************************************************

		METHOD
			dangling_ellipsis {private}

		DESCRIPTION
			determines whether or not the currently calculated ellipsized text
			is displaying a dangling ellipsis (= an ellipsis on a line by itself)
			
			returns true if ellipsis is dangling, otherwise false

	**********************************************************************************/

	function dangling_ellipsis(obj, nr_fixed){
		if ($.fn.ThreeDots.c_settings.allow_dangle == true) {
			return false; // why do when no doing need be done?
		}

		// initialize variables
		var ellipsis_obj 		= $(obj).children('.'+$.fn.ThreeDots.c_settings.e_span_class).get(0);
		var remember_display 	= $(ellipsis_obj).css('display');
		var num_rows_before 	= num_rows(obj, nr_fixed);

		// temporarily hide ellipsis
		$(ellipsis_obj).css('display','none');
		var num_rows_after 		= num_rows(obj, nr_fixed);

		// restore ellipsis
		$(ellipsis_obj).css('display',remember_display);
		
		if (num_rows_before > num_rows_after) {
			return true; 	// ASSUMPTION: 	removing the ellipsis changed the height
							// 				THEREFORE the ellipsis was on a row all by its lonesome
		} else {
			return false;	// nothing dangling here
		}
	}


	/**********************************************************************************

		METHOD
			num_rows {private}

		DESCRIPTION
			returns the number of rows/lines that the current object's text covers if
			cstate is an object
			
			this function can be initially called to pre-calculate values that will 
			stay fixed throughout the truncation process for the current object so
			that the values do not have to be called every time; to do this the
			num_rows function is called with a boolean value within the cstate
			
			when boolean cstate, an object is returned containing padding and line
			height information that is then passed in as the cstate object on
			subsequent calls to the function

	**********************************************************************************/

	function num_rows(obj, cstate){	
		var the_type = typeof cstate;
	
		if (	(the_type == 'object') 
			||	(the_type == undefined)	) {

			// do the math & return
			return $(obj).height() / cstate.lh;
			
		} else if (the_type == 'boolean') {
			var lineheight	= lineheight_px($(obj));

			return {
				lh: lineheight
			};
		} 
	}

	
	/**********************************************************************************

		METHOD
			the_last_word {private}

		DESCRIPTION
			return a data structure containing...
			 
				[word] 				the last word within the specified text	defined 
									by the specified valid_delimiters, 
				[del] 				the delimiter occurring	directly before the 
									word, and 
				[updated_string] 	the updated text minus the last word 
			
			[del] is null if the last word is the first and/or only word in the text 
			string

	**********************************************************************************/

	function the_last_word(str){
		var temp_word_index;
		var v_del = $.fn.ThreeDots.c_settings.valid_delimiters;
		
		// trim the string
		str = jQuery.trim(str);
		
		// initialize variables
		var lastest_word_idx = -1;
		var lastest_word = null;
		var lastest_del = null;

		// for all given delimiters, determine which delimiter results in the smallest word cut
		jQuery.each(v_del, function(i, curr_del){
			if (((new String(curr_del)).length != 1)
				|| (curr_del == null)) {  // implemented to handle IE NULL condition; if only typeof could say CHAR :(
				return false; // INVALID delimiter; must be 1 character in length
			}

			var tmp_word_index = str.lastIndexOf(curr_del);
			if (tmp_word_index != -1) {
				if (tmp_word_index > lastest_word_idx) {
					lastest_word_idx 	= tmp_word_index;
					lastest_word 		= str.substring(lastest_word_idx+1);
					lastest_del			= curr_del;
				}
			}
		});
		
		// return data structure of word reduced string and the last word
		if (lastest_word_idx > 0) {
			return {
				updated_string:	jQuery.trim(str.substring(0, lastest_word_idx/*-1*/)),
				word: 			lastest_word,
				del: 			lastest_del
			};
		} else { // the lastest word
			return {
				updated_string:	'',
				word: 			jQuery.trim(str),
				del: 			null
			};
		}
	}

			
	/**********************************************************************************

		METHOD
			lineheight_px {private}

		DESCRIPTION
			returns the line height of a row of the provided text (within the text 
			span) in pixels

	**********************************************************************************/

	function lineheight_px(obj) {
		// shhhh... show
		$(obj).append("<div id='temp_ellipsis_div' style='position:absolute; visibility:hidden'>H</div>");
		// measure
		var temp_height = $('#temp_ellipsis_div').height();
		// cut
		$('#temp_ellipsis_div').remove();

		return temp_height;
	}
	
	/**********************************************************************************

		METHOD
			the_bisector (private)

		DESCRIPTION
			updates the target objects current text to shortest overflowing string 
			length (if overflowing is occurring) by adding/removing halves (like
			binary search)

			because...
				taking some bigger steps at the beginning should save us some real 
				time in the end

	**********************************************************************************/
	
	function the_bisector(obj, curr_text_span, nr_fixed){
		var init_text = $(curr_text_span).text();
		var curr_text = init_text;
		var max_rows = $.fn.ThreeDots.c_settings.max_rows;
		var front_half, back_half, front_of_back_half, middle, back_middle;
		var start_index;
		
		if (num_rows(obj, nr_fixed) <= max_rows) {
			// do nothing
			return;
		} else {
			// zero in on the solution
			start_index = 0;
			curr_length = curr_text.length;

			curr_middle = Math.floor((curr_length - start_index) / 2);
			front_half = init_text.substring(start_index, start_index+curr_middle);
			back_half = init_text.substring(start_index + curr_middle);
				
			while (curr_middle != 0) {
				$(curr_text_span).text(front_half);
				
				if (num_rows(obj, nr_fixed) <= (max_rows)) {
					// text = text + front half of back-half
					back_middle 		= Math.floor(back_half.length/2);
					front_of_back_half 	= back_half.substring(0, back_middle);
					
					start_index = front_half.length;
					curr_text 	= front_half+front_of_back_half;
					curr_length = curr_text.length;

					$(curr_text_span).text(curr_text);
				} else {
					// text = front half (which it already is)
					curr_text = front_half;
					curr_length = curr_text.length;
				}
				
				curr_middle = Math.floor((curr_length - start_index) / 2);
				front_half = init_text.substring(0, start_index+curr_middle);
				back_half = init_text.substring(start_index + curr_middle);
			}
		}
	}
	
})(jQuery);
