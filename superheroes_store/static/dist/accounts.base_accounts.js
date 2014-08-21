(function(){var t=this,e=t._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,a=r.push,u=r.slice,o=r.concat,c=i.toString,l=i.hasOwnProperty,h=r.forEach,f=r.map,p=r.reduce,d=r.reduceRight,g=r.filter,v=r.every,m=r.some,y=r.indexOf,_=r.lastIndexOf,b=Array.isArray,w=Object.keys,x=s.bind,E=function(t){return t instanceof E?t:this instanceof E?void(this._wrapped=t):new E(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=E),exports._=E):t._=E,E.VERSION="1.6.0";var k=E.each=E.forEach=function(t,e,r){if(null==t)return t;if(h&&t.forEach===h)t.forEach(e,r);else if(t.length===+t.length){for(var i=0,s=t.length;s>i;i++)if(e.call(r,t[i],i,t)===n)return}else for(var a=E.keys(t),i=0,s=a.length;s>i;i++)if(e.call(r,t[a[i]],a[i],t)===n)return;return t};E.map=E.collect=function(t,e,n){var r=[];return null==t?r:f&&t.map===f?t.map(e,n):(k(t,function(t,i,s){r.push(e.call(n,t,i,s))}),r)};var A="Reduce of empty array with no initial value";E.reduce=E.foldl=E.inject=function(t,e,n,r){var i=arguments.length>2;if(null==t&&(t=[]),p&&t.reduce===p)return r&&(e=E.bind(e,r)),i?t.reduce(e,n):t.reduce(e);if(k(t,function(t,s,a){i?n=e.call(r,n,t,s,a):(n=t,i=!0)}),!i)throw new TypeError(A);return n},E.reduceRight=E.foldr=function(t,e,n,r){var i=arguments.length>2;if(null==t&&(t=[]),d&&t.reduceRight===d)return r&&(e=E.bind(e,r)),i?t.reduceRight(e,n):t.reduceRight(e);var s=t.length;if(s!==+s){var a=E.keys(t);s=a.length}if(k(t,function(u,o,c){o=a?a[--s]:--s,i?n=e.call(r,n,t[o],o,c):(n=t[o],i=!0)}),!i)throw new TypeError(A);return n},E.find=E.detect=function(t,e,n){var r;return j(t,function(t,i,s){return e.call(n,t,i,s)?(r=t,!0):void 0}),r},E.filter=E.select=function(t,e,n){var r=[];return null==t?r:g&&t.filter===g?t.filter(e,n):(k(t,function(t,i,s){e.call(n,t,i,s)&&r.push(t)}),r)},E.reject=function(t,e,n){return E.filter(t,function(t,r,i){return!e.call(n,t,r,i)},n)},E.every=E.all=function(t,e,r){e||(e=E.identity);var i=!0;return null==t?i:v&&t.every===v?t.every(e,r):(k(t,function(t,s,a){return(i=i&&e.call(r,t,s,a))?void 0:n}),!!i)};var j=E.some=E.any=function(t,e,r){e||(e=E.identity);var i=!1;return null==t?i:m&&t.some===m?t.some(e,r):(k(t,function(t,s,a){return i||(i=e.call(r,t,s,a))?n:void 0}),!!i)};E.contains=E.include=function(t,e){return null==t?!1:y&&t.indexOf===y?-1!=t.indexOf(e):j(t,function(t){return t===e})},E.invoke=function(t,e){var n=u.call(arguments,2),r=E.isFunction(e);return E.map(t,function(t){return(r?e:t[e]).apply(t,n)})},E.pluck=function(t,e){return E.map(t,E.property(e))},E.where=function(t,e){return E.filter(t,E.matches(e))},E.findWhere=function(t,e){return E.find(t,E.matches(e))},E.max=function(t,e,n){if(!e&&E.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.max.apply(Math,t);var r=-1/0,i=-1/0;return k(t,function(t,s,a){var u=e?e.call(n,t,s,a):t;u>i&&(r=t,i=u)}),r},E.min=function(t,e,n){if(!e&&E.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.min.apply(Math,t);var r=1/0,i=1/0;return k(t,function(t,s,a){var u=e?e.call(n,t,s,a):t;i>u&&(r=t,i=u)}),r},E.shuffle=function(t){var e,n=0,r=[];return k(t,function(t){e=E.random(n++),r[n-1]=r[e],r[e]=t}),r},E.sample=function(t,e,n){return null==e||n?(t.length!==+t.length&&(t=E.values(t)),t[E.random(t.length-1)]):E.shuffle(t).slice(0,Math.max(0,e))};var T=function(t){return null==t?E.identity:E.isFunction(t)?t:E.property(t)};E.sortBy=function(t,e,n){return e=T(e),E.pluck(E.map(t,function(t,r,i){return{value:t,index:r,criteria:e.call(n,t,r,i)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return t.index-e.index}),"value")};var S=function(t){return function(e,n,r){var i={};return n=T(n),k(e,function(s,a){var u=n.call(r,s,a,e);t(i,u,s)}),i}};E.groupBy=S(function(t,e,n){E.has(t,e)?t[e].push(n):t[e]=[n]}),E.indexBy=S(function(t,e,n){t[e]=n}),E.countBy=S(function(t,e){E.has(t,e)?t[e]++:t[e]=1}),E.sortedIndex=function(t,e,n,r){n=T(n);for(var i=n.call(r,e),s=0,a=t.length;a>s;){var u=s+a>>>1;n.call(r,t[u])<i?s=u+1:a=u}return s},E.toArray=function(t){return t?E.isArray(t)?u.call(t):t.length===+t.length?E.map(t,E.identity):E.values(t):[]},E.size=function(t){return null==t?0:t.length===+t.length?t.length:E.keys(t).length},E.first=E.head=E.take=function(t,e,n){return null==t?void 0:null==e||n?t[0]:0>e?[]:u.call(t,0,e)},E.initial=function(t,e,n){return u.call(t,0,t.length-(null==e||n?1:e))},E.last=function(t,e,n){return null==t?void 0:null==e||n?t[t.length-1]:u.call(t,Math.max(t.length-e,0))},E.rest=E.tail=E.drop=function(t,e,n){return u.call(t,null==e||n?1:e)},E.compact=function(t){return E.filter(t,E.identity)};var O=function(t,e,n){return e&&E.every(t,E.isArray)?o.apply(n,t):(k(t,function(t){E.isArray(t)||E.isArguments(t)?e?a.apply(n,t):O(t,e,n):n.push(t)}),n)};E.flatten=function(t,e){return O(t,e,[])},E.without=function(t){return E.difference(t,u.call(arguments,1))},E.partition=function(t,e){var n=[],r=[];return k(t,function(t){(e(t)?n:r).push(t)}),[n,r]},E.uniq=E.unique=function(t,e,n,r){E.isFunction(e)&&(r=n,n=e,e=!1);var i=n?E.map(t,n,r):t,s=[],a=[];return k(i,function(n,r){(e?r&&a[a.length-1]===n:E.contains(a,n))||(a.push(n),s.push(t[r]))}),s},E.union=function(){return E.uniq(E.flatten(arguments,!0))},E.intersection=function(t){var e=u.call(arguments,1);return E.filter(E.uniq(t),function(t){return E.every(e,function(e){return E.contains(e,t)})})},E.difference=function(t){var e=o.apply(r,u.call(arguments,1));return E.filter(t,function(t){return!E.contains(e,t)})},E.zip=function(){for(var t=E.max(E.pluck(arguments,"length").concat(0)),e=new Array(t),n=0;t>n;n++)e[n]=E.pluck(arguments,""+n);return e},E.object=function(t,e){if(null==t)return{};for(var n={},r=0,i=t.length;i>r;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n},E.indexOf=function(t,e,n){if(null==t)return-1;var r=0,i=t.length;if(n){if("number"!=typeof n)return r=E.sortedIndex(t,e),t[r]===e?r:-1;r=0>n?Math.max(0,i+n):n}if(y&&t.indexOf===y)return t.indexOf(e,n);for(;i>r;r++)if(t[r]===e)return r;return-1},E.lastIndexOf=function(t,e,n){if(null==t)return-1;var r=null!=n;if(_&&t.lastIndexOf===_)return r?t.lastIndexOf(e,n):t.lastIndexOf(e);for(var i=r?n:t.length;i--;)if(t[i]===e)return i;return-1},E.range=function(t,e,n){arguments.length<=1&&(e=t||0,t=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((e-t)/n),0),i=0,s=new Array(r);r>i;)s[i++]=t,t+=n;return s};var R=function(){};E.bind=function(t,e){var n,r;if(x&&t.bind===x)return x.apply(t,u.call(arguments,1));if(!E.isFunction(t))throw new TypeError;return n=u.call(arguments,2),r=function(){if(!(this instanceof r))return t.apply(e,n.concat(u.call(arguments)));R.prototype=t.prototype;var i=new R;R.prototype=null;var s=t.apply(i,n.concat(u.call(arguments)));return Object(s)===s?s:i}},E.partial=function(t){var e=u.call(arguments,1);return function(){for(var n=0,r=e.slice(),i=0,s=r.length;s>i;i++)r[i]===E&&(r[i]=arguments[n++]);for(;n<arguments.length;)r.push(arguments[n++]);return t.apply(this,r)}},E.bindAll=function(t){var e=u.call(arguments,1);if(0===e.length)throw new Error("bindAll must be passed function names");return k(e,function(e){t[e]=E.bind(t[e],t)}),t},E.memoize=function(t,e){var n={};return e||(e=E.identity),function(){var r=e.apply(this,arguments);return E.has(n,r)?n[r]:n[r]=t.apply(this,arguments)}},E.delay=function(t,e){var n=u.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},E.defer=function(t){return E.delay.apply(E,[t,1].concat(u.call(arguments,1)))},E.throttle=function(t,e,n){var r,i,s,a=null,u=0;n||(n={});var o=function(){u=n.leading===!1?0:E.now(),a=null,s=t.apply(r,i),r=i=null};return function(){var c=E.now();u||n.leading!==!1||(u=c);var l=e-(c-u);return r=this,i=arguments,0>=l?(clearTimeout(a),a=null,u=c,s=t.apply(r,i),r=i=null):a||n.trailing===!1||(a=setTimeout(o,l)),s}},E.debounce=function(t,e,n){var r,i,s,a,u,o=function(){var c=E.now()-a;e>c?r=setTimeout(o,e-c):(r=null,n||(u=t.apply(s,i),s=i=null))};return function(){s=this,i=arguments,a=E.now();var c=n&&!r;return r||(r=setTimeout(o,e)),c&&(u=t.apply(s,i),s=i=null),u}},E.once=function(t){var e,n=!1;return function(){return n?e:(n=!0,e=t.apply(this,arguments),t=null,e)}},E.wrap=function(t,e){return E.partial(e,t)},E.compose=function(){var t=arguments;return function(){for(var e=arguments,n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},E.after=function(t,e){return function(){return--t<1?e.apply(this,arguments):void 0}},E.keys=function(t){if(!E.isObject(t))return[];if(w)return w(t);var e=[];for(var n in t)E.has(t,n)&&e.push(n);return e},E.values=function(t){for(var e=E.keys(t),n=e.length,r=new Array(n),i=0;n>i;i++)r[i]=t[e[i]];return r},E.pairs=function(t){for(var e=E.keys(t),n=e.length,r=new Array(n),i=0;n>i;i++)r[i]=[e[i],t[e[i]]];return r},E.invert=function(t){for(var e={},n=E.keys(t),r=0,i=n.length;i>r;r++)e[t[n[r]]]=n[r];return e},E.functions=E.methods=function(t){var e=[];for(var n in t)E.isFunction(t[n])&&e.push(n);return e.sort()},E.extend=function(t){return k(u.call(arguments,1),function(e){if(e)for(var n in e)t[n]=e[n]}),t},E.pick=function(t){var e={},n=o.apply(r,u.call(arguments,1));return k(n,function(n){n in t&&(e[n]=t[n])}),e},E.omit=function(t){var e={},n=o.apply(r,u.call(arguments,1));for(var i in t)E.contains(n,i)||(e[i]=t[i]);return e},E.defaults=function(t){return k(u.call(arguments,1),function(e){if(e)for(var n in e)void 0===t[n]&&(t[n]=e[n])}),t},E.clone=function(t){return E.isObject(t)?E.isArray(t)?t.slice():E.extend({},t):t},E.tap=function(t,e){return e(t),t};var $=function(t,e,n,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof E&&(t=t._wrapped),e instanceof E&&(e=e._wrapped);var i=c.call(t);if(i!=c.call(e))return!1;switch(i){case"[object String]":return t==String(e);case"[object Number]":return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object RegExp]":return t.source==e.source&&t.global==e.global&&t.multiline==e.multiline&&t.ignoreCase==e.ignoreCase}if("object"!=typeof t||"object"!=typeof e)return!1;for(var s=n.length;s--;)if(n[s]==t)return r[s]==e;var a=t.constructor,u=e.constructor;if(a!==u&&!(E.isFunction(a)&&a instanceof a&&E.isFunction(u)&&u instanceof u)&&"constructor"in t&&"constructor"in e)return!1;n.push(t),r.push(e);var o=0,l=!0;if("[object Array]"==i){if(o=t.length,l=o==e.length)for(;o--&&(l=$(t[o],e[o],n,r)););}else{for(var h in t)if(E.has(t,h)&&(o++,!(l=E.has(e,h)&&$(t[h],e[h],n,r))))break;if(l){for(h in e)if(E.has(e,h)&&!o--)break;l=!o}}return n.pop(),r.pop(),l};E.isEqual=function(t,e){return $(t,e,[],[])},E.isEmpty=function(t){if(null==t)return!0;if(E.isArray(t)||E.isString(t))return 0===t.length;for(var e in t)if(E.has(t,e))return!1;return!0},E.isElement=function(t){return!(!t||1!==t.nodeType)},E.isArray=b||function(t){return"[object Array]"==c.call(t)},E.isObject=function(t){return t===Object(t)},k(["Arguments","Function","String","Number","Date","RegExp"],function(t){E["is"+t]=function(e){return c.call(e)=="[object "+t+"]"}}),E.isArguments(arguments)||(E.isArguments=function(t){return!(!t||!E.has(t,"callee"))}),"function"!=typeof/./&&(E.isFunction=function(t){return"function"==typeof t}),E.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},E.isNaN=function(t){return E.isNumber(t)&&t!=+t},E.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==c.call(t)},E.isNull=function(t){return null===t},E.isUndefined=function(t){return void 0===t},E.has=function(t,e){return l.call(t,e)},E.noConflict=function(){return t._=e,this},E.identity=function(t){return t},E.constant=function(t){return function(){return t}},E.property=function(t){return function(e){return e[t]}},E.matches=function(t){return function(e){if(e===t)return!0;for(var n in t)if(t[n]!==e[n])return!1;return!0}},E.times=function(t,e,n){for(var r=Array(Math.max(0,t)),i=0;t>i;i++)r[i]=e.call(n,i);return r},E.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},E.now=Date.now||function(){return(new Date).getTime()};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=E.invert(I.escape);var N={escape:new RegExp("["+E.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+E.keys(I.unescape).join("|")+")","g")};E.each(["escape","unescape"],function(t){E[t]=function(e){return null==e?"":(""+e).replace(N[t],function(e){return I[t][e]})}}),E.result=function(t,e){if(null==t)return void 0;var n=t[e];return E.isFunction(n)?n.call(t):n},E.mixin=function(t){k(E.functions(t),function(e){var n=E[e]=t[e];E.prototype[e]=function(){var t=[this._wrapped];return a.apply(t,arguments),C.call(this,n.apply(E,t))}})};var H=0;E.uniqueId=function(t){var e=++H+"";return t?t+e:e},E.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var F=/(.)^/,M={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},P=/\\|'|\r|\n|\t|\u2028|\u2029/g;E.template=function(t,e,n){var r;n=E.defaults({},n,E.templateSettings);var i=new RegExp([(n.escape||F).source,(n.interpolate||F).source,(n.evaluate||F).source].join("|")+"|$","g"),s=0,a="__p+='";t.replace(i,function(e,n,r,i,u){return a+=t.slice(s,u).replace(P,function(t){return"\\"+M[t]}),n&&(a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(a+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(a+="';\n"+i+"\n__p+='"),s=u+e.length,e}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(n.variable||"obj","_",a)}catch(u){throw u.source=a,u}if(e)return r(e,E);var o=function(t){return r.call(this,t,E)};return o.source="function("+(n.variable||"obj")+"){\n"+a+"}",o},E.chain=function(t){return E(t).chain()};var C=function(t){return this._chain?E(t).chain():t};E.mixin(E),k(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=r[t];E.prototype[t]=function(){var n=this._wrapped;return e.apply(n,arguments),"shift"!=t&&"splice"!=t||0!==n.length||delete n[0],C.call(this,n)}}),k(["concat","join","slice"],function(t){var e=r[t];E.prototype[t]=function(){return C.call(this,e.apply(this._wrapped,arguments))}}),E.extend(E.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return E})}).call(this),function(t,e){if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(n,r,i){t.Backbone=e(t,i,n,r)});else if("undefined"!=typeof exports){var n=require("underscore");e(t,exports,n)}else t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}(this,function(t,e,n,r){{var i=t.Backbone,s=[],a=(s.push,s.slice);s.splice}e.VERSION="1.1.2",e.$=r,e.noConflict=function(){return t.Backbone=i,this},e.emulateHTTP=!1,e.emulateJSON=!1;var u=e.Events={on:function(t,e,n){if(!c(this,"on",t,[e,n])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);return r.push({callback:e,context:n,ctx:n||this}),this},once:function(t,e,r){if(!c(this,"once",t,[e,r])||!e)return this;var i=this,s=n.once(function(){i.off(t,s),e.apply(this,arguments)});return s._callback=e,this.on(t,s,r)},off:function(t,e,r){var i,s,a,u,o,l,h,f;if(!this._events||!c(this,"off",t,[e,r]))return this;if(!t&&!e&&!r)return this._events=void 0,this;for(u=t?[t]:n.keys(this._events),o=0,l=u.length;l>o;o++)if(t=u[o],a=this._events[t]){if(this._events[t]=i=[],e||r)for(h=0,f=a.length;f>h;h++)s=a[h],(e&&e!==s.callback&&e!==s.callback._callback||r&&r!==s.context)&&i.push(s);i.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=a.call(arguments,1);if(!c(this,"trigger",t,e))return this;var n=this._events[t],r=this._events.all;return n&&l(n,e),r&&l(r,arguments),this},stopListening:function(t,e,r){var i=this._listeningTo;if(!i)return this;var s=!e&&!r;r||"object"!=typeof e||(r=this),t&&((i={})[t._listenId]=t);for(var a in i)t=i[a],t.off(e,r,this),(s||n.isEmpty(t._events))&&delete this._listeningTo[a];return this}},o=/\s+/,c=function(t,e,n,r){if(!n)return!0;if("object"==typeof n){for(var i in n)t[e].apply(t,[i,n[i]].concat(r));return!1}if(o.test(n)){for(var s=n.split(o),a=0,u=s.length;u>a;a++)t[e].apply(t,[s[a]].concat(r));return!1}return!0},l=function(t,e){var n,r=-1,i=t.length,s=e[0],a=e[1],u=e[2];switch(e.length){case 0:for(;++r<i;)(n=t[r]).callback.call(n.ctx);return;case 1:for(;++r<i;)(n=t[r]).callback.call(n.ctx,s);return;case 2:for(;++r<i;)(n=t[r]).callback.call(n.ctx,s,a);return;case 3:for(;++r<i;)(n=t[r]).callback.call(n.ctx,s,a,u);return;default:for(;++r<i;)(n=t[r]).callback.apply(n.ctx,e);return}},h={listenTo:"on",listenToOnce:"once"};n.each(h,function(t,e){u[e]=function(e,r,i){var s=this._listeningTo||(this._listeningTo={}),a=e._listenId||(e._listenId=n.uniqueId("l"));return s[a]=e,i||"object"!=typeof r||(i=this),e[t](r,i,this),this}}),u.bind=u.on,u.unbind=u.off,n.extend(e,u);var f=e.Model=function(t,e){var r=t||{};e||(e={}),this.cid=n.uniqueId("c"),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(r=this.parse(r,e)||{}),r=n.defaults({},r,n.result(this,"defaults")),this.set(r,e),this.changed={},this.initialize.apply(this,arguments)};n.extend(f.prototype,u,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return n.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return n.escape(this.get(t))},has:function(t){return null!=this.get(t)},set:function(t,e,r){var i,s,a,u,o,c,l,h;if(null==t)return this;if("object"==typeof t?(s=t,r=e):(s={})[t]=e,r||(r={}),!this._validate(s,r))return!1;a=r.unset,o=r.silent,u=[],c=this._changing,this._changing=!0,c||(this._previousAttributes=n.clone(this.attributes),this.changed={}),h=this.attributes,l=this._previousAttributes,this.idAttribute in s&&(this.id=s[this.idAttribute]);for(i in s)e=s[i],n.isEqual(h[i],e)||u.push(i),n.isEqual(l[i],e)?delete this.changed[i]:this.changed[i]=e,a?delete h[i]:h[i]=e;if(!o){u.length&&(this._pending=r);for(var f=0,p=u.length;p>f;f++)this.trigger("change:"+u[f],this,h[u[f]],r)}if(c)return this;if(!o)for(;this._pending;)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,n.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,n.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!n.isEmpty(this.changed):n.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?n.clone(this.changed):!1;var e,r=!1,i=this._changing?this._previousAttributes:this.attributes;for(var s in t)n.isEqual(i[s],e=t[s])||((r||(r={}))[s]=e);return r},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return n.clone(this._previousAttributes)},fetch:function(t){t=t?n.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=this,r=t.success;return t.success=function(n){return e.set(e.parse(n,t),t)?(r&&r(e,n,t),void e.trigger("sync",e,n,t)):!1},P(this,t),this.sync("read",this,t)},save:function(t,e,r){var i,s,a,u=this.attributes;if(null==t||"object"==typeof t?(i=t,r=e):(i={})[t]=e,r=n.extend({validate:!0},r),i&&!r.wait){if(!this.set(i,r))return!1}else if(!this._validate(i,r))return!1;i&&r.wait&&(this.attributes=n.extend({},u,i)),void 0===r.parse&&(r.parse=!0);var o=this,c=r.success;return r.success=function(t){o.attributes=u;var e=o.parse(t,r);return r.wait&&(e=n.extend(i||{},e)),n.isObject(e)&&!o.set(e,r)?!1:(c&&c(o,t,r),void o.trigger("sync",o,t,r))},P(this,r),s=this.isNew()?"create":r.patch?"patch":"update","patch"===s&&(r.attrs=i),a=this.sync(s,this,r),i&&r.wait&&(this.attributes=u),a},destroy:function(t){t=t?n.clone(t):{};var e=this,r=t.success,i=function(){e.trigger("destroy",e,e.collection,t)};if(t.success=function(n){(t.wait||e.isNew())&&i(),r&&r(e,n,t),e.isNew()||e.trigger("sync",e,n,t)},this.isNew())return t.success(),!1;P(this,t);var s=this.sync("delete",this,t);return t.wait||i(),s},url:function(){var t=n.result(this,"urlRoot")||n.result(this.collection,"url")||M();return this.isNew()?t:t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},n.extend(t||{},{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=n.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;return r?(this.trigger("invalid",this,r,n.extend(e,{validationError:r})),!1):!0}});var p=["keys","values","pairs","invert","pick","omit"];n.each(p,function(t){f.prototype[t]=function(){var e=a.call(arguments);return e.unshift(this.attributes),n[t].apply(n,e)}});var d=e.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,n.extend({silent:!0},e))},g={add:!0,remove:!0,merge:!0},v={add:!0,remove:!1};n.extend(d.prototype,u,{model:f,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,n.extend({merge:!1},e,v))},remove:function(t,e){var r=!n.isArray(t);t=r?[t]:n.clone(t),e||(e={});var i,s,a,u;for(i=0,s=t.length;s>i;i++)u=t[i]=this.get(t[i]),u&&(delete this._byId[u.id],delete this._byId[u.cid],a=this.indexOf(u),this.models.splice(a,1),this.length--,e.silent||(e.index=a,u.trigger("remove",u,this,e)),this._removeReference(u,e));return r?t[0]:t},set:function(t,e){e=n.defaults({},e,g),e.parse&&(t=this.parse(t,e));var r=!n.isArray(t);t=r?t?[t]:[]:n.clone(t);var i,s,a,u,o,c,l,h=e.at,p=this.model,d=this.comparator&&null==h&&e.sort!==!1,v=n.isString(this.comparator)?this.comparator:null,m=[],y=[],_={},b=e.add,w=e.merge,x=e.remove,E=!d&&b&&x?[]:!1;for(i=0,s=t.length;s>i;i++){if(o=t[i]||{},a=o instanceof f?u=o:o[p.prototype.idAttribute||"id"],c=this.get(a))x&&(_[c.cid]=!0),w&&(o=o===u?u.attributes:o,e.parse&&(o=c.parse(o,e)),c.set(o,e),d&&!l&&c.hasChanged(v)&&(l=!0)),t[i]=c;else if(b){if(u=t[i]=this._prepareModel(o,e),!u)continue;m.push(u),this._addReference(u,e)}u=c||u,!E||!u.isNew()&&_[u.id]||E.push(u),_[u.id]=!0}if(x){for(i=0,s=this.length;s>i;++i)_[(u=this.models[i]).cid]||y.push(u);y.length&&this.remove(y,e)}if(m.length||E&&E.length)if(d&&(l=!0),this.length+=m.length,null!=h)for(i=0,s=m.length;s>i;i++)this.models.splice(h+i,0,m[i]);else{E&&(this.models.length=0);var k=E||m;for(i=0,s=k.length;s>i;i++)this.models.push(k[i])}if(l&&this.sort({silent:!0}),!e.silent){for(i=0,s=m.length;s>i;i++)(u=m[i]).trigger("add",u,this,e);(l||E&&E.length)&&this.trigger("sort",this,e)}return r?t[0]:t},reset:function(t,e){e||(e={});for(var r=0,i=this.models.length;i>r;r++)this._removeReference(this.models[r],e);return e.previousModels=this.models,this._reset(),t=this.add(t,n.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,n.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return this.add(t,n.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t),e},slice:function(){return a.apply(this.models,arguments)},get:function(t){return null==t?void 0:this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){return n.isEmpty(t)?e?void 0:[]:this[e?"find":"filter"](function(e){for(var n in t)if(t[n]!==e.get(n))return!1;return!0})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return t||(t={}),n.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(n.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return n.invoke(this.models,"get",t)},fetch:function(t){t=t?n.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=t.success,r=this;return t.success=function(n){var i=t.reset?"reset":"set";r[i](n,t),e&&e(r,n,t),r.trigger("sync",r,n,t)},P(this,t),this.sync("read",this,t)},create:function(t,e){if(e=e?n.clone(e):{},!(t=this._prepareModel(t,e)))return!1;e.wait||this.add(t,e);var r=this,i=e.success;return e.success=function(t,n){e.wait&&r.add(t,e),i&&i(t,n,e)},t.save(null,e),t},parse:function(t){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(t instanceof f)return t;e=e?n.clone(e):{},e.collection=this;var r=new this.model(t,e);return r.validationError?(this.trigger("invalid",this,r.validationError,e),!1):r},_addReference:function(t){this._byId[t.cid]=t,null!=t.id&&(this._byId[t.id]=t),t.collection||(t.collection=this),t.on("all",this._onModelEvent,this)},_removeReference:function(t){this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,n,r){("add"!==t&&"remove"!==t||n===this)&&("destroy"===t&&this.remove(e,r),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],null!=e.id&&(this._byId[e.id]=e)),this.trigger.apply(this,arguments))}});var m=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];n.each(m,function(t){d.prototype[t]=function(){var e=a.call(arguments);return e.unshift(this.models),n[t].apply(n,e)}});var y=["groupBy","countBy","sortBy","indexBy"];n.each(y,function(t){d.prototype[t]=function(e,r){var i=n.isFunction(e)?e:function(t){return t.get(e)};return n[t](this.models,i,r)}});var _=e.View=function(t){this.cid=n.uniqueId("view"),t||(t={}),n.extend(this,n.pick(t,w)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},b=/^(\S+)\s*(.*)$/,w=["model","collection","el","id","attributes","className","tagName","events"];n.extend(_.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,n){return this.$el&&this.undelegateEvents(),this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0],n!==!1&&this.delegateEvents(),this},delegateEvents:function(t){if(!t&&!(t=n.result(this,"events")))return this;this.undelegateEvents();for(var e in t){var r=t[e];if(n.isFunction(r)||(r=this[t[e]]),r){var i=e.match(b),s=i[1],a=i[2];r=n.bind(r,this),s+=".delegateEvents"+this.cid,""===a?this.$el.on(s,r):this.$el.on(s,a,r)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(n.result(this,"el"),!1);else{var t=n.extend({},n.result(this,"attributes"));this.id&&(t.id=n.result(this,"id")),this.className&&(t["class"]=n.result(this,"className"));var r=e.$("<"+n.result(this,"tagName")+">").attr(t);this.setElement(r,!1)}}}),e.sync=function(t,r,i){var s=E[t];n.defaults(i||(i={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(i.url||(a.url=n.result(r,"url")||M()),null!=i.data||!r||"create"!==t&&"update"!==t&&"patch"!==t||(a.contentType="application/json",a.data=JSON.stringify(i.attrs||r.toJSON(i))),i.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),i.emulateHTTP&&("PUT"===s||"DELETE"===s||"PATCH"===s)){a.type="POST",i.emulateJSON&&(a.data._method=s);var u=i.beforeSend;i.beforeSend=function(t){return t.setRequestHeader("X-HTTP-Method-Override",s),u?u.apply(this,arguments):void 0}}"GET"===a.type||i.emulateJSON||(a.processData=!1),"PATCH"===a.type&&x&&(a.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var o=i.xhr=e.ajax(n.extend(a,i));return r.trigger("request",r,o,i),o};var x=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),E={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var k=e.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},A=/\((.*?)\)/g,j=/(\(\?)?:\w+/g,T=/\*\w+/g,S=/[\-{}\[\]+?.,\\\^$|#\s]/g;n.extend(k.prototype,u,{initialize:function(){},route:function(t,r,i){n.isRegExp(t)||(t=this._routeToRegExp(t)),n.isFunction(r)&&(i=r,r=""),i||(i=this[r]);var s=this;return e.history.route(t,function(n){var a=s._extractParameters(t,n);s.execute(i,a),s.trigger.apply(s,["route:"+r].concat(a)),s.trigger("route",r,a),e.history.trigger("route",s,r,a)}),this},execute:function(t,e){t&&t.apply(this,e)},navigate:function(t,n){return e.history.navigate(t,n),this},_bindRoutes:function(){if(this.routes){this.routes=n.result(this,"routes");for(var t,e=n.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(S,"\\$&").replace(A,"(?:$1)?").replace(j,function(t,e){return e?t:"([^/?]+)"}).replace(T,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return n.map(r,function(t,e){return e===r.length-1?t||null:t?decodeURIComponent(t):null})}});var O=e.History=function(){this.handlers=[],n.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},R=/^[#\/]|\s+$/g,$=/^\/+|\/+$/g,I=/msie [\w.]+/,N=/\/$/,H=/#.*$/;O.started=!1,n.extend(O.prototype,u,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var n=this.root.replace(N,"");t.indexOf(n)||(t=t.slice(n.length))}else t=this.getHash();return t.replace(R,"")},start:function(t){if(O.started)throw new Error("Backbone.history has already been started");O.started=!0,this.options=n.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment(),i=document.documentMode,s=I.exec(navigator.userAgent.toLowerCase())&&(!i||7>=i);if(this.root=("/"+this.root+"/").replace($,"/"),s&&this._wantsHashChange){var a=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=a.hide().appendTo("body")[0].contentWindow,this.navigate(r)}this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!s?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=r;var u=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&u.hash&&(this.fragment=this.getHash().replace(R,""),this.history.replaceState({},document.title,this.root+this.fragment))}return this.options.silent?void 0:this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),O.started=!1
},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();return t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t===this.fragment?!1:(this.iframe&&this.navigate(t),void this.loadUrl())},loadUrl:function(t){return t=this.fragment=this.getFragment(t),n.any(this.handlers,function(e){return e.route.test(t)?(e.callback(t),!0):void 0})},navigate:function(t,e){if(!O.started)return!1;e&&e!==!0||(e={trigger:!!e});var n=this.root+(t=this.getFragment(t||""));if(t=t.replace(H,""),this.fragment!==t){if(this.fragment=t,""===t&&"/"!==n&&(n=n.slice(0,-1)),this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,n){if(n){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else t.hash="#"+e}}),e.history=new O;var F=function(t,e){var r,i=this;r=t&&n.has(t,"constructor")?t.constructor:function(){return i.apply(this,arguments)},n.extend(r,i,e);var s=function(){this.constructor=r};return s.prototype=i.prototype,r.prototype=new s,t&&n.extend(r.prototype,t),r.__super__=i.prototype,r};f.extend=d.extend=k.extend=_.extend=O.extend=F;var M=function(){throw new Error('A "url" property or function must be specified')},P=function(t,e){var n=e.error;e.error=function(r){n&&n(t,r,e),t.trigger("error",t,r,e)}};return e}),function(){{var t=new Date;t.getTime()}}();
//# sourceMappingURL=accounts.base_accounts.js.map