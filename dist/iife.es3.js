var AbortablePromise=function(){"use strict";function t(t,n){return t(n={exports:{}},n.exports),n.exports}function o(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+u).toString(36))}function i(t){return"object"==typeof t?null!==t:"function"==typeof t}function p(t){if(!i(t))throw TypeError(t+" is not an object!");return t}function n(t){try{return!!t()}catch(t){return!0}}function r(t){return l?s.createElement(t):{}}function _(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}var d=t(function(t){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)}),y=(d.version,t(function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)})),c=t(function(t){var n="__core-js_shared__",e=y[n]||(y[n]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:d.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),e=0,u=Math.random(),a=t(function(t){var n=c("wks"),e=y.Symbol,r="function"==typeof e;(t.exports=function(t){return n[t]||(n[t]=r&&e[t]||(r?e:o)("Symbol."+t))}).store=n}),f=!n(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),s=y.document,l=i(s)&&i(s.createElement),h=!f&&!n(function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}),v=Object.defineProperty,m={f:f?Object.defineProperty:function(t,n,e){if(p(t),n=function(t,n){if(!i(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!i(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!i(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!i(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}(n,!0),p(e),h)try{return v(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},b=f?function(t,n,e){return m.f(t,n,_(1,e))}:function(t,n,e){return t[n]=e,t},g=a("unscopables"),w=Array.prototype;null==w[g]&&b(w,g,{});function S(t){w[g][t]=!0}function j(t,n){return{value:n,done:!!t}}function O(t){return A.call(t).slice(8,-1)}function P(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}function T(t){return k(P(t))}function L(t,n){return C.call(t,n)}function x(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}function E(r,o,t){if(x(r),void 0===o)return r;switch(t){case 1:return function(t){return r.call(o,t)};case 2:return function(t,n){return r.call(o,t,n)};case 3:return function(t,n,e){return r.call(o,t,n,e)}}return function(){return r.apply(o,arguments)}}var M={},A={}.toString,k=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==O(t)?t.split(""):Object(t)},C={}.hasOwnProperty,F=c("native-function-to-string",Function.toString),R=t(function(t){var i=o("src"),n="toString",c=(""+F).split(n);d.inspectSource=function(t){return F.call(t)},(t.exports=function(t,n,e,r){var o="function"==typeof e;o&&(L(e,"name")||b(e,"name",n)),t[n]!==e&&(o&&(L(e,i)||b(e,i,t[n]?""+t[n]:c.join(String(n)))),t===y?t[n]=e:r?t[n]?t[n]=e:b(t,n,e):(delete t[n],b(t,n,e)))})(Function.prototype,n,function(){return"function"==typeof this&&this[i]||F.call(this)})}),I="prototype",G=function(t,n,e){var r,o,i,c,u=t&G.F,a=t&G.G,f=t&G.S,s=t&G.P,l=t&G.B,h=a?y:f?y[n]||(y[n]={}):(y[n]||{})[I],v=a?d:d[n]||(d[n]={}),p=v[I]||(v[I]={});for(r in a&&(e=n),e)i=((o=!u&&h&&void 0!==h[r])?h:e)[r],c=l&&o?E(i,y):s&&"function"==typeof i?E(Function.call,i):i,h&&R(h,r,i,t&G.U),v[r]!=i&&b(v,r,c),s&&p[r]!=i&&(p[r]=i)};y.core=d,G.F=1,G.G=2,G.S=4,G.P=8,G.B=16,G.W=32,G.U=64,G.R=128;function N(t){return isNaN(t=+t)?0:(0<t?K:W)(t)}function D(t){return 0<t?q(N(t),9007199254740991):0}function V(t){return X[t]||(X[t]=o(t))}function B(){}function H(t,n,e){t&&!L(t=e?t:t.prototype,ft)&&at(t,ft,{configurable:!0,value:n})}var U,z=G,W=Math.ceil,K=Math.floor,q=Math.min,J=Math.max,Q=Math.min,X=c("keys"),Y=(U=!1,function(t,n,e){var r,o=T(t),i=D(o.length),c=function(t,n){return(t=N(t))<0?J(t+n,0):Q(t,n)}(e,i);if(U&&n!=n){for(;c<i;)if((r=o[c++])!=r)return!0}else for(;c<i;c++)if((U||c in o)&&o[c]===n)return U||c||0;return!U&&-1}),Z=V("IE_PROTO"),$="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),tt=Object.keys||function(t){return function(t,n){var e,r=T(t),o=0,i=[];for(e in r)e!=Z&&L(r,e)&&i.push(e);for(;n.length>o;)L(r,e=n[o++])&&(~Y(i,e)||i.push(e));return i}(t,$)},nt=f?Object.defineProperties:function(t,n){p(t);for(var e,r=tt(n),o=r.length,i=0;i<o;)m.f(t,e=r[i++],n[e]);return t},et=y.document,rt=et&&et.documentElement,ot=V("IE_PROTO"),it="prototype",ct=function(){var t,n=r("iframe"),e=$.length;for(n.style.display="none",rt.appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),ct=t.F;e--;)delete ct[it][$[e]];return ct()},ut=Object.create||function(t,n){var e;return null!==t?(B[it]=p(t),e=new B,B[it]=null,e[ot]=t):e=ct(),void 0===n?e:nt(e,n)},at=m.f,ft=a("toStringTag"),st={};b(st,a("iterator"),function(){return this});function lt(){return this}function ht(t,n,e,r,o,i,c){function u(t){if(!mt&&t in p)return p[t];switch(t){case"keys":case gt:return function(){return new e(this,t)}}return function(){return new e(this,t)}}!function(t,n,e){t.prototype=ut(st,{next:_(1,e)}),H(t,n+" Iterator")}(e,n,r);var a,f,s,l=n+" Iterator",h=o==gt,v=!1,p=t.prototype,d=p[yt]||p["@@iterator"]||o&&p[o],y=d||u(o),m=o?h?u("entries"):y:void 0,g="Array"==n&&p.entries||d;if(g&&(s=dt(g.call(new t)))!==Object.prototype&&s.next&&(H(s,l,!0),"function"!=typeof s[yt]&&b(s,yt,lt)),h&&d&&d.name!==gt&&(v=!0,y=function(){return d.call(this)}),!mt&&!v&&p[yt]||b(p,yt,y),M[n]=y,M[l]=lt,o)if(a={values:h?y:u(gt),keys:i?y:u("keys"),entries:m},c)for(f in a)f in p||R(p,f,a[f]);else z(z.P+z.F*(mt||v),n,a);return a}var vt=V("IE_PROTO"),pt=Object.prototype,dt=Object.getPrototypeOf||function(t){return t=function(t){return Object(P(t))}(t),L(t,vt)?t[vt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?pt:null},yt=a("iterator"),mt=!([].keys&&"next"in[].keys()),gt="values",_t=ht(Array,"Array",function(t,n){this._t=T(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,j(1)):j(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values");M.Arguments=M.Array,S("keys"),S("values"),S("entries");for(var bt=a("iterator"),wt=a("toStringTag"),St=M.Array,jt={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},Ot=tt(jt),Pt=0;Pt<Ot.length;Pt++){var Tt,Lt=Ot[Pt],xt=jt[Lt],Et=y[Lt],Mt=Et&&Et.prototype;if(Mt&&(Mt[bt]||b(Mt,bt,St),Mt[wt]||b(Mt,wt,Lt),M[Lt]=St,xt))for(Tt in _t)Mt[Tt]||R(Mt,Tt,_t[Tt],!0)}var At,kt=(At=!0,function(t,n){var e,r,o=String(P(t)),i=N(n),c=o.length;return i<0||c<=i?At?"":void 0:(e=o.charCodeAt(i))<55296||56319<e||i+1===c||(r=o.charCodeAt(i+1))<56320||57343<r?At?o.charAt(i):e:At?o.slice(i,i+2):r-56320+(e-55296<<10)+65536});ht(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=kt(n,e),this._i+=t.length,{value:t,done:!1})});function Ct(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),Vt))?e:Bt?O(n):"Object"==(r=O(n))&&"function"==typeof n.callee?"Arguments":r}function Ft(n,t,e,r){try{return r?t(p(e)[0],e[1]):t(e)}catch(t){var o=n.return;throw void 0!==o&&p(o.call(n)),t}}function Rt(){var t=+this;if(tn.hasOwnProperty(t)){var n=tn[t];delete tn[t],n()}}function It(t){Rt.call(t.data)}var Gt,Nt,Dt,Vt=a("toStringTag"),Bt="Arguments"==O(function(){return arguments}()),Ht=a("iterator"),Ut=Array.prototype,zt=a("iterator"),Wt=d.getIteratorMethod=function(t){if(null!=t)return t[zt]||t["@@iterator"]||M[Ct(t)]},Kt=t(function(t){var h={},v={},n=t.exports=function(t,n,e,r,o){var i,c,u,a,f=o?function(){return t}:Wt(t),s=E(e,r,n?2:1),l=0;if("function"!=typeof f)throw TypeError(t+" is not iterable!");if(function(t){return void 0!==t&&(M.Array===t||Ut[Ht]===t)}(f)){for(i=D(t.length);l<i;l++)if((a=n?s(p(c=t[l])[0],c[1]):s(t[l]))===h||a===v)return a}else for(u=f.call(t);!(c=u.next()).done;)if((a=Ft(u,s,c.value,n))===h||a===v)return a};n.BREAK=h,n.RETURN=v}),qt=a("species"),Jt=y.process,Qt=y.setImmediate,Xt=y.clearImmediate,Yt=y.MessageChannel,Zt=y.Dispatch,$t=0,tn={},nn="onreadystatechange";Qt&&Xt||(Qt=function(t){for(var n=[],e=1;e<arguments.length;)n.push(arguments[e++]);return tn[++$t]=function(){!function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}t.apply(e,n)}("function"==typeof t?t:Function(t),n)},Gt($t),$t},Xt=function(t){delete tn[t]},"process"==O(Jt)?Gt=function(t){Jt.nextTick(E(Rt,t,1))}:Zt&&Zt.now?Gt=function(t){Zt.now(E(Rt,t,1))}:Yt?(Dt=(Nt=new Yt).port2,Nt.port1.onmessage=It,Gt=E(Dt.postMessage,Dt,1)):y.addEventListener&&"function"==typeof postMessage&&!y.importScripts?(Gt=function(t){y.postMessage(t+"","*")},y.addEventListener("message",It,!1)):Gt=nn in r("script")?function(t){rt.appendChild(r("script"))[nn]=function(){rt.removeChild(this),Rt.call(t)}}:function(t){setTimeout(E(Rt,t,1),0)});var en={set:Qt,clear:Xt},rn=en.set,on=y.MutationObserver||y.WebKitMutationObserver,cn=y.process,un=y.Promise,an="process"==O(cn);function fn(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=x(e),this.reject=x(r)}function sn(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}var ln={f:function(t){return new fn(t)}},hn=y.navigator,vn=hn&&hn.userAgent||"",pn=a("species"),dn=a("iterator"),yn=!1;try{var mn=[7][dn]();mn.return=function(){yn=!0},Array.from(mn,function(){throw 2})}catch(t){}function gn(){}function _n(t){var n;return!(!i(t)||"function"!=typeof(n=t.then))&&n}function bn(s,e){if(!s._n){s._n=!0;var r=s._c;xn(function(){for(var a=s._v,f=1==s._s,t=0,n=function(t){var n,e,r,o=f?t.ok:t.fail,i=t.resolve,c=t.reject,u=t.domain;try{o?(f||(2==s._h&&Vn(s),s._h=1),!0===o?n=a:(u&&u.enter(),n=o(a),u&&(u.exit(),r=!0)),n===t.promise?c(Mn("Promise-chain cycle")):(e=_n(n))?e.call(n,i,c):i(n)):c(a)}catch(t){u&&!r&&u.exit(),c(t)}};r.length>t;)n(r[t++]);s._c=[],s._n=!1,e&&!s._h&&Nn(s)})}}function wn(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),bn(n,!0))}var Sn,jn,On,Pn,Tn,Ln=en.set,xn=function(){function t(){var t,n;for(an&&(t=cn.domain)&&t.exit();e;){n=e.fn,e=e.next;try{n()}catch(t){throw e?o():r=void 0,t}}r=void 0,t&&t.enter()}var e,r,o;if(an)o=function(){cn.nextTick(t)};else if(!on||y.navigator&&y.navigator.standalone)if(un&&un.resolve){var n=un.resolve(void 0);o=function(){n.then(t)}}else o=function(){rn.call(y,t)};else{var i=!0,c=document.createTextNode("");new on(t).observe(c,{characterData:!0}),o=function(){c.data=i=!i}}return function(t){var n={fn:t,next:void 0};r&&(r.next=n),e||(e=n,o()),r=n}}(),En="Promise",Mn=y.TypeError,An=y.process,kn=An&&An.versions,Cn=kn&&kn.v8||"",Fn=y[En],Rn="process"==Ct(An),In=jn=ln.f,Gn=!!function(){try{var t=Fn.resolve(1),n=(t.constructor={})[a("species")]=function(t){t(gn,gn)};return(Rn||"function"==typeof PromiseRejectionEvent)&&t.then(gn)instanceof n&&0!==Cn.indexOf("6.6")&&-1===vn.indexOf("Chrome/66")}catch(t){}}(),Nn=function(i){Ln.call(y,function(){var t,n,e,r=i._v,o=Dn(i);if(o&&(t=sn(function(){Rn?An.emit("unhandledRejection",r,i):(n=y.onunhandledrejection)?n({promise:i,reason:r}):(e=y.console)&&e.error&&e.error("Unhandled promise rejection",r)}),i._h=Rn||Dn(i)?2:1),i._a=void 0,o&&t.e)throw t.v})},Dn=function(t){return 1!==t._h&&0===(t._a||t._c).length},Vn=function(n){Ln.call(y,function(){var t;Rn?An.emit("rejectionHandled",n):(t=y.onrejectionhandled)&&t({promise:n,reason:n._v})})},Bn=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw Mn("Promise can't be resolved itself");(e=_n(t))?xn(function(){var n={_w:r,_d:!1};try{e.call(t,E(Bn,n,1),E(wn,n,1))}catch(t){wn.call(n,t)}}):(r._v=t,r._s=1,bn(r,!1))}catch(t){wn.call({_w:r,_d:!1},t)}}};Gn||(Fn=function(t){!function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!")}(this,Fn,En,"_h"),x(t),Sn.call(this);try{t(E(Bn,this,1),E(wn,this,1))}catch(t){wn.call(this,t)}},(Sn=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=function(t,n,e){for(var r in n)R(t,r,n[r],e);return t}(Fn.prototype,{then:function(t,n){var e=In(function(t,n){var e,r=p(t).constructor;return void 0===r||null==(e=p(r)[qt])?n:x(e)}(this,Fn));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=Rn?An.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&bn(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),On=function(){var t=new Sn;this.promise=t,this.resolve=E(Bn,t,1),this.reject=E(wn,t,1)},ln.f=In=function(t){return t===Fn||t===Pn?new On(t):jn(t)}),z(z.G+z.W+z.F*!Gn,{Promise:Fn}),H(Fn,En),Tn=y[En],f&&Tn&&!Tn[pn]&&m.f(Tn,pn,{configurable:!0,get:function(){return this}}),Pn=d[En],z(z.S+z.F*!Gn,En,{reject:function(t){var n=In(this);return(0,n.reject)(t),n.promise}}),z(z.S+z.F*!Gn,En,{resolve:function(t){return function(t,n){if(p(t),i(n)&&n.constructor===t)return n;var e=ln.f(t);return(0,e.resolve)(n),e.promise}(this,t)}}),z(z.S+z.F*!(Gn&&function(t,n){if(!n&&!yn)return!1;var e=!1;try{var r=[7],o=r[dn]();o.next=function(){return{done:e=!0}},r[dn]=function(){return o},t(r)}catch(t){}return e}(function(t){Fn.all(t).catch(gn)})),En,{all:function(t){var c=this,n=In(c),u=n.resolve,a=n.reject,e=sn(function(){var r=[],o=0,i=1;Kt(t,!1,function(t){var n=o++,e=!1;r.push(void 0),i++,c.resolve(t).then(function(t){e||(e=!0,r[n]=t,--i||u(r))},a)}),--i||u(r)});return e.e&&a(e.v),n.promise},race:function(t){var n=this,e=In(n),r=e.reject,o=sn(function(){Kt(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}});var Hn={};function Un(e,r){this.promise=new Promise(function(t,n){r=r||function(){var n=function(){var n={aborted:!1,onabort:null};return n.dispatchEvent=function(t){"function"==typeof n.onabort&&n.onabort(t)},n}();return{signal:n,abort:function(t){n.aborted||(n.aborted=!0,n.dispatchEvent(t))}}}(),e(t,n,r.signal)}),this.abortController=r}function zn(t,n){n.onabort=function(n){t.forEach(function(t){t instanceof Un&&t.abort(n).catch(function(t){return t})})}}return Hn[a("toStringTag")]="z",Hn+""!="[object z]"&&R(Object.prototype,"toString",function(){return"[object "+Ct(this)+"]"},!0),((Un.prototype=new Promise(function(){})).constructor=Un).prototype.then=function(e,r){var t=this;return new Un(function(o,i,c){function n(t,n,e){if("function"==typeof e){if((n=e(n))instanceof Un){var r=n.abortController.signal;c.aborted=r.aborted,c.onabort=r.onabort}return o(n)}"resolved"===t&&o(n),"rejected"===t&&i(n)}t.promise.then(function(t){n("resolved",t,e)},function(t){n("rejected",t,r)})},this.abortController)},Un.prototype.catch=function(t){return this.then(null,t)},Un.prototype.abort=function(e){var r=this;return new Un(function(t,n){Promise.resolve().then(function(){r.abortController.abort(e),r.then(t,n)})},this.abortController)},Un.resolve=function(e){return new Un(function(t,n){t(e)})},Un.reject=function(e){return new Un(function(t,n){n(e)})},Un.all=function(r){return new Un(function(t,n,e){zn(r,e),Promise.all(r).then(t,n)})},Un.race=function(r){return new Un(function(t,n,e){zn(r,e),Promise.race(r).then(t,n)})},Un}();
