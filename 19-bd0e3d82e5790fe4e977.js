(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{275:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Localizer=void 0;var r,i=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=(r=n(342))&&r.__esModule?r:{default:r},s=n(343).Promise,l=n(69),u=function(){return"undefined"!=typeof window},c=e.Localizer=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lang=null,this.domains={},this.ready={},this.languageChangeCallbacks=[];var n=["en_CA"],r={window_global:"localizer",availableLanguages:n,language:!!u()&&(window.navigator.userLanguage||window.navigator.language)||n[0]};r.language=r.language.replace("-","_"),this.config=r,this.domainsReady=this.domainsReady.bind(this),this.applyConfig(e)}return o(t,[{key:"applyConfig",value:function(t){if(this.config=l(this.config,t),0===this.config.availableLanguages.length)throw new Error("Localizer needs some languages.");if(!this.hasLanguage(this.config.language)){var e=i(this.config.availableLanguages,1);this.config.language=e[0]}this.setLanguage(this.config.language)}},{key:"hasLanguage",value:function(t){return-1!==this.config.availableLanguages.indexOf(t)}},{key:"setLanguage",value:function(t){var e=this,n=t.replace("-","_");if(!this.hasLanguage(n))throw new Error("Specified language is not available.");this.lang=n,Object.keys(this.domains).forEach(function(t){t!==n&&Object.keys(e.domains[t]).forEach(function(n){({}).hasOwnProperty.call(e.domains[t],n)&&e.registerDomain(n)})}),this.callLanguageChangeCallbacks()}},{key:"_initializeJed",value:function(){this.i18n=new a.default({missing_key_callback:function(t){throw new Error("ERROR: specified key does not exists: "+t)},locale_data:this.domains[this.lang]})}},{key:"registerDomain",value:function(t){if(this.ready[t])return this.ready[t];var e=this;return this.ready[t]=new s(function(r,i){n(345)(e.lang,t,function(n){n&&n.locale_data&&n.locale_data.messages?(e.domains[e.lang]||(e.domains[e.lang]={}),n.locale_data.messages[""].domain=t,e.domains[e.lang][t]=n.locale_data.messages,e._initializeJed(),r()):i(),delete e.ready[t]})}),this.ready[t]}},{key:"domainsReady",value:function(){var t=this,e=[];return Object.keys(this.ready).forEach(function(n){({}).hasOwnProperty.call(t.ready,n)&&e.push(t.ready[n])}),s.all(e)}},{key:"onLanguageChange",value:function(t){var e=this;return this.languageChangeCallbacks.indexOf(t)<0&&this.languageChangeCallbacks.push(t),{remove:function(){var n=e.languageChangeCallbacks.indexOf(t);n>=0&&e.languageChangeCallbacks.splice(n,1)}}}},{key:"callLanguageChangeCallbacks",value:function(){for(var t=0;t<this.languageChangeCallbacks.length;t+=1)this.languageChangeCallbacks[t](this.lang)}},{key:"translate",value:function(t,e,n){if(!this.domains[this.lang]||!this.domains[this.lang][t])return e;if(void 0!==n){var r=1*n;return this.i18n.translate.apply(this.i18n,[e]).onDomain(t||"messages").ifPlural(r,"").fetch(r)}return this.i18n.translate.apply(this.i18n,[e]).onDomain(t||"messages").fetch()}},{key:"interpolate",value:function(t,e){var n;if(!this.domains[this.lang]||!this.domains[this.lang][t])return e;for(var r=arguments.length,i=Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];return(n=this.i18n.translate.apply(this.i18n,[e]).onDomain(t||"messages")).fetch.apply(n,i)}}]),t}(),h=null;e.default=function(t){return null!==h?h:u()&&window.localizer&&window.localizer instanceof c?window.localizer:(h=new c(t),u()&&t.window_global&&(window[t.window_global]=h),h)}},341:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function t(e,n,r){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0},a=n(1),s=(r=a)&&r.__esModule?r:{default:r};e.default=function(e){var n="Localized"+(e.displayName||e.name||"Component"),r=!1,l=e;e&&e.prototype&&e.prototype.isReactComponent||(l=a.Component,r=!0);var u=function(n){function a(t){!function(t,e){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}(this);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,t));return e.languageChangeCallback=!1,e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(a,l),i(a,[{key:"componentWillMount",value:function(){this.setState({language_ready:!1,lang:t.lang}),o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillMount",this)&&o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillMount",this).call(this)}},{key:"componentDidMount",value:function(){var e=this;t.domainsReady().then(function(){e.setState({language_ready:!0})}),this.languageChangeCallback=t.onLanguageChange(function(n){setTimeout(function(){e.languageChangeCallback&&(e.setState({language_ready:!1,lang:n}),t.domainsReady().then(function(){e.setState({language_ready:!0})}))},0)}),o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentDidMount",this)&&o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentDidMount",this).call(this)}},{key:"shouldComponentUpdate",value:function(t,e){return!1!==e.language_ready&&(!(!o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"shouldComponentUpdate",this)||!o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"shouldComponentUpdate",this).call(this,t,e))||this.state!==e.language_ready)}},{key:"componentWillUnmount",value:function(){this.languageChangeCallback&&(this.languageChangeCallback.remove(),this.languageChangeCallback=!1);try{o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this).call(this)}catch(t){}}},{key:"render",value:function(){return r?s.default.createElement(e,this.props):o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"render",this).call(this)}}]),a}();return u.displayName=n,r?function(t){return s.default.createElement(u,t)}:u}}).call(this,n(275).default({availableLanguages:["en_CA","fr_CA"]}))},342:function(t,e,n){
/**
 * @preserve jed.js https://github.com/SlexAxton/Jed
 */
!function(n,r){var i=Array.prototype,o=Object.prototype,a=i.slice,s=o.hasOwnProperty,l=i.forEach,u={},c={forEach:function(t,e,n){var r,i,o;if(null!==t)if(l&&t.forEach===l)t.forEach(e,n);else if(t.length===+t.length){for(r=0,i=t.length;r<i;r++)if(r in t&&e.call(n,t[r],r,t)===u)return}else for(o in t)if(s.call(t,o)&&e.call(n,t[o],o,t)===u)return},extend:function(t){return this.forEach(a.call(arguments,1),function(e){for(var n in e)t[n]=e[n]}),t}},h=function(t){if(this.defaults={locale_data:{messages:{"":{domain:"messages",lang:"en",plural_forms:"nplurals=2; plural=(n != 1);"}}},domain:"messages",debug:!1},this.options=c.extend({},this.defaults,t),this.textdomain(this.options.domain),t.domain&&!this.options.locale_data[this.options.domain])throw new Error("Text domain set to non-existent domain: `"+t.domain+"`")};function f(t){return h.PF.compile(t||"nplurals=2; plural=(n != 1);")}function p(t,e){this._key=t,this._i18n=e}h.context_delimiter=String.fromCharCode(4),c.extend(p.prototype,{onDomain:function(t){return this._domain=t,this},withContext:function(t){return this._context=t,this},ifPlural:function(t,e){return this._val=t,this._pkey=e,this},fetch:function(t){return"[object Array]"!={}.toString.call(t)&&(t=[].slice.call(arguments,0)),(t&&t.length?h.sprintf:function(t){return t})(this._i18n.dcnpgettext(this._domain,this._context,this._key,this._pkey,this._val),t)}}),c.extend(h.prototype,{translate:function(t){return new p(t,this)},textdomain:function(t){if(!t)return this._textdomain;this._textdomain=t},gettext:function(t){return this.dcnpgettext.call(this,void 0,void 0,t)},dgettext:function(t,e){return this.dcnpgettext.call(this,t,void 0,e)},dcgettext:function(t,e){return this.dcnpgettext.call(this,t,void 0,e)},ngettext:function(t,e,n){return this.dcnpgettext.call(this,void 0,void 0,t,e,n)},dngettext:function(t,e,n,r){return this.dcnpgettext.call(this,t,void 0,e,n,r)},dcngettext:function(t,e,n,r){return this.dcnpgettext.call(this,t,void 0,e,n,r)},pgettext:function(t,e){return this.dcnpgettext.call(this,void 0,t,e)},dpgettext:function(t,e,n){return this.dcnpgettext.call(this,t,e,n)},dcpgettext:function(t,e,n){return this.dcnpgettext.call(this,t,e,n)},npgettext:function(t,e,n,r){return this.dcnpgettext.call(this,void 0,t,e,n,r)},dnpgettext:function(t,e,n,r,i){return this.dcnpgettext.call(this,t,e,n,r,i)},dcnpgettext:function(t,e,n,r,i){var o;if(r=r||n,t=t||this._textdomain,!this.options)return(o=new h).dcnpgettext.call(o,void 0,void 0,n,r,i);if(!this.options.locale_data)throw new Error("No locale data provided.");if(!this.options.locale_data[t])throw new Error("Domain `"+t+"` was not found.");if(!this.options.locale_data[t][""])throw new Error("No locale meta information provided.");if(!n)throw new Error("No translation key found.");var a,s,l,u=e?e+h.context_delimiter+n:n,c=this.options.locale_data,p=c[t],d=(c.messages||this.defaults.locale_data.messages)[""],g=p[""].plural_forms||p[""]["Plural-Forms"]||p[""]["plural-forms"]||d.plural_forms||d["Plural-Forms"]||d["plural-forms"];if(void 0===i)l=0;else{if("number"!=typeof i&&(i=parseInt(i,10),isNaN(i)))throw new Error("The number that was passed in is not a number.");l=f(g)(i)}if(!p)throw new Error("No domain named `"+t+"` could be found.");return!(a=p[u])||l>a.length?(this.options.missing_key_callback&&this.options.missing_key_callback(u,t),s=[n,r],!0===this.options.debug&&console.log(s[f(g)(i)]),s[f()(i)]):(s=a[l])||(s=[n,r])[f()(i)]}});var d,g,y=function(){function t(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function e(t,e){for(var n=[];e>0;n[--e]=t);return n.join("")}var n=function(){return n.cache.hasOwnProperty(arguments[0])||(n.cache[arguments[0]]=n.parse(arguments[0])),n.format.call(null,n.cache[arguments[0]],arguments)};return n.format=function(n,r){var i,o,a,s,l,u,c,h=1,f=n.length,p="",d=[];for(o=0;o<f;o++)if("string"===(p=t(n[o])))d.push(n[o]);else if("array"===p){if((s=n[o])[2])for(i=r[h],a=0;a<s[2].length;a++){if(!i.hasOwnProperty(s[2][a]))throw y('[sprintf] property "%s" does not exist',s[2][a]);i=i[s[2][a]]}else i=s[1]?r[s[1]]:r[h++];if(/[^s]/.test(s[8])&&"number"!=t(i))throw y("[sprintf] expecting number but found %s",t(i));switch(void 0!==i&&null!==i||(i=""),s[8]){case"b":i=i.toString(2);break;case"c":i=String.fromCharCode(i);break;case"d":i=parseInt(i,10);break;case"e":i=s[7]?i.toExponential(s[7]):i.toExponential();break;case"f":i=s[7]?parseFloat(i).toFixed(s[7]):parseFloat(i);break;case"o":i=i.toString(8);break;case"s":i=(i=String(i))&&s[7]?i.substring(0,s[7]):i;break;case"u":i=Math.abs(i);break;case"x":i=i.toString(16);break;case"X":i=i.toString(16).toUpperCase()}i=/[def]/.test(s[8])&&s[3]&&i>=0?"+"+i:i,u=s[4]?"0"==s[4]?"0":s[4].charAt(1):" ",c=s[6]-String(i).length,l=s[6]?e(u,c):"",d.push(s[5]?i+l:l+i)}return d.join("")},n.cache={},n.parse=function(t){for(var e=t,n=[],r=[],i=0;e;){if(null!==(n=/^[^\x25]+/.exec(e)))r.push(n[0]);else if(null!==(n=/^\x25{2}/.exec(e)))r.push("%");else{if(null===(n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e)))throw"[sprintf] huh?";if(n[2]){i|=1;var o=[],a=n[2],s=[];if(null===(s=/^([a-z_][a-z_\d]*)/i.exec(a)))throw"[sprintf] huh?";for(o.push(s[1]);""!==(a=a.substring(s[0].length));)if(null!==(s=/^\.([a-z_][a-z_\d]*)/i.exec(a)))o.push(s[1]);else{if(null===(s=/^\[(\d+)\]/.exec(a)))throw"[sprintf] huh?";o.push(s[1])}n[2]=o}else i|=2;if(3===i)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";r.push(n)}e=e.substring(n[0].length)}return r},n}();h.parse_plural=function(t,e){return t=t.replace(/n/g,e),h.parse_expression(t)},h.sprintf=function(t,e){return"[object Array]"=={}.toString.call(e)?function(t,e){return e.unshift(t),y.apply(null,e)}(t,[].slice.call(e)):y.apply(this,[].slice.call(arguments))},h.prototype.sprintf=function(){return h.sprintf.apply(this,arguments)},h.PF={},h.PF.parse=function(t){var e=h.PF.extractPluralExpr(t);return h.PF.parser.parse.call(h.PF.parser,e)},h.PF.compile=function(t){var e=h.PF.parse(t);return function(t){return!0===(n=h.PF.interpreter(e)(t))?1:n||0;var n}},h.PF.interpreter=function(t){return function(e){switch(t.type){case"GROUP":return h.PF.interpreter(t.expr)(e);case"TERNARY":return h.PF.interpreter(t.expr)(e)?h.PF.interpreter(t.truthy)(e):h.PF.interpreter(t.falsey)(e);case"OR":return h.PF.interpreter(t.left)(e)||h.PF.interpreter(t.right)(e);case"AND":return h.PF.interpreter(t.left)(e)&&h.PF.interpreter(t.right)(e);case"LT":return h.PF.interpreter(t.left)(e)<h.PF.interpreter(t.right)(e);case"GT":return h.PF.interpreter(t.left)(e)>h.PF.interpreter(t.right)(e);case"LTE":return h.PF.interpreter(t.left)(e)<=h.PF.interpreter(t.right)(e);case"GTE":return h.PF.interpreter(t.left)(e)>=h.PF.interpreter(t.right)(e);case"EQ":return h.PF.interpreter(t.left)(e)==h.PF.interpreter(t.right)(e);case"NEQ":return h.PF.interpreter(t.left)(e)!=h.PF.interpreter(t.right)(e);case"MOD":return h.PF.interpreter(t.left)(e)%h.PF.interpreter(t.right)(e);case"VAR":return e;case"NUM":return t.val;default:throw new Error("Invalid Token found.")}}},h.PF.extractPluralExpr=function(t){t=t.replace(/^\s\s*/,"").replace(/\s\s*$/,""),/;\s*$/.test(t)||(t=t.concat(";"));var e,n=/nplurals\=(\d+);/,r=t.match(n);if(!(r.length>1))throw new Error("nplurals not found in plural_forms string: "+t);if(r[1],!((e=(t=t.replace(n,"")).match(/plural\=(.*);/))&&e.length>1))throw new Error("`plural` expression not found: "+t);return e[1]},h.PF.parser=(d={trace:function(){},yy:{},symbols_:{error:2,expressions:3,e:4,EOF:5,"?":6,":":7,"||":8,"&&":9,"<":10,"<=":11,">":12,">=":13,"!=":14,"==":15,"%":16,"(":17,")":18,n:19,NUMBER:20,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",6:"?",7:":",8:"||",9:"&&",10:"<",11:"<=",12:">",13:">=",14:"!=",15:"==",16:"%",17:"(",18:")",19:"n",20:"NUMBER"},productions_:[0,[3,2],[4,5],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[4,1]],performAction:function(t,e,n,r,i,o,a){var s=o.length-1;switch(i){case 1:return{type:"GROUP",expr:o[s-1]};case 2:this.$={type:"TERNARY",expr:o[s-4],truthy:o[s-2],falsey:o[s]};break;case 3:this.$={type:"OR",left:o[s-2],right:o[s]};break;case 4:this.$={type:"AND",left:o[s-2],right:o[s]};break;case 5:this.$={type:"LT",left:o[s-2],right:o[s]};break;case 6:this.$={type:"LTE",left:o[s-2],right:o[s]};break;case 7:this.$={type:"GT",left:o[s-2],right:o[s]};break;case 8:this.$={type:"GTE",left:o[s-2],right:o[s]};break;case 9:this.$={type:"NEQ",left:o[s-2],right:o[s]};break;case 10:this.$={type:"EQ",left:o[s-2],right:o[s]};break;case 11:this.$={type:"MOD",left:o[s-2],right:o[s]};break;case 12:this.$={type:"GROUP",expr:o[s-1]};break;case 13:this.$={type:"VAR"};break;case 14:this.$={type:"NUM",val:Number(t)}}},table:[{3:1,4:2,17:[1,3],19:[1,4],20:[1,5]},{1:[3]},{5:[1,6],6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{4:17,17:[1,3],19:[1,4],20:[1,5]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],18:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],18:[2,14]},{1:[2,1]},{4:18,17:[1,3],19:[1,4],20:[1,5]},{4:19,17:[1,3],19:[1,4],20:[1,5]},{4:20,17:[1,3],19:[1,4],20:[1,5]},{4:21,17:[1,3],19:[1,4],20:[1,5]},{4:22,17:[1,3],19:[1,4],20:[1,5]},{4:23,17:[1,3],19:[1,4],20:[1,5]},{4:24,17:[1,3],19:[1,4],20:[1,5]},{4:25,17:[1,3],19:[1,4],20:[1,5]},{4:26,17:[1,3],19:[1,4],20:[1,5]},{4:27,17:[1,3],19:[1,4],20:[1,5]},{6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[1,28]},{6:[1,7],7:[1,29],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{5:[2,3],6:[2,3],7:[2,3],8:[2,3],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[1,16],18:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[1,16],18:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[1,16],18:[2,7]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[1,16],18:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[1,16],18:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[1,16],18:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],18:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],18:[2,12]},{4:30,17:[1,3],19:[1,4],20:[1,5]},{5:[2,2],6:[1,7],7:[2,2],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,2]}],defaultActions:{6:[2,1]},parseError:function(t,e){throw new Error(t)},parse:function(t){var e=this,n=[0],r=[null],i=[],o=this.table,a="",s=0,l=0,u=0;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var c=this.lexer.yylloc;function h(){var t;return"number"!=typeof(t=e.lexer.lex()||1)&&(t=e.symbols_[t]||t),t}i.push(c),"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var f,p,d,g,y,m,v,_,b,w,x={};;){if(d=n[n.length-1],this.defaultActions[d]?g=this.defaultActions[d]:(null==f&&(f=h()),g=o[d]&&o[d][f]),void 0===g||!g.length||!g[0]){if(!u){for(m in b=[],o[d])this.terminals_[m]&&m>2&&b.push("'"+this.terminals_[m]+"'");var E="";E=this.lexer.showPosition?"Parse error on line "+(s+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+b.join(", ")+", got '"+this.terminals_[f]+"'":"Parse error on line "+(s+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(E,{text:this.lexer.match,token:this.terminals_[f]||f,line:this.lexer.yylineno,loc:c,expected:b})}if(3==u){if(1==f)throw new Error(E||"Parsing halted.");l=this.lexer.yyleng,a=this.lexer.yytext,s=this.lexer.yylineno,c=this.lexer.yylloc,f=h()}for(;!(2..toString()in o[d]);){if(0==d)throw new Error(E||"Parsing halted.");w=1,n.length=n.length-2*w,r.length=r.length-w,i.length=i.length-w,d=n[n.length-1]}p=f,f=2,g=o[d=n[n.length-1]]&&o[d][2],u=3}if(g[0]instanceof Array&&g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+d+", token: "+f);switch(g[0]){case 1:n.push(f),r.push(this.lexer.yytext),i.push(this.lexer.yylloc),n.push(g[1]),f=null,p?(f=p,p=null):(l=this.lexer.yyleng,a=this.lexer.yytext,s=this.lexer.yylineno,c=this.lexer.yylloc,u>0&&u--);break;case 2:if(v=this.productions_[g[1]][1],x.$=r[r.length-v],x._$={first_line:i[i.length-(v||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(v||1)].first_column,last_column:i[i.length-1].last_column},void 0!==(y=this.performAction.call(x,a,l,s,this.yy,g[1],r,i)))return y;v&&(n=n.slice(0,-1*v*2),r=r.slice(0,-1*v),i=i.slice(0,-1*v)),n.push(this.productions_[g[1]][0]),r.push(x.$),i.push(x._$),_=o[n[n.length-2]][n[n.length-1]],n.push(_);break;case 3:return!0}}return!0}},g={EOF:1,parseError:function(t,e){if(!this.yy.parseError)throw new Error(t);this.yy.parseError(t,e)},setInput:function(t){return this._input=t,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.match+=t,this.matched+=t,t.match(/\n/)&&this.yylineno++,this._input=this._input.slice(1),t},unput:function(t){return this._input=t+this._input,this},more:function(){return this._more=!0,this},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done)return this.EOF;var t,e;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),r=0;r<n.length;r++)if(t=this._input.match(this.rules[n[r]]))return(e=t[0].match(/\n.*/g))&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-1:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],this.performAction.call(this,this.yy,this,n[r],this.conditionStack[this.conditionStack.length-1])||void 0;if(""===this._input)return this.EOF;this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return void 0!==t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)},performAction:function(t,e,n,r){switch(n){case 0:break;case 1:return 20;case 2:return 19;case 3:return 8;case 4:return 9;case 5:return 6;case 6:return 7;case 7:return 11;case 8:return 13;case 9:return 10;case 10:return 12;case 11:return 14;case 12:return 15;case 13:return 16;case 14:return 17;case 15:return 18;case 16:return 5;case 17:return"INVALID"}},rules:[/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^n\b/,/^\|\|/,/^&&/,/^\?/,/^:/,/^<=/,/^>=/,/^</,/^>/,/^!=/,/^==/,/^%/,/^\(/,/^\)/,/^$/,/^./],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],inclusive:!0}}},d.lexer=g,d),void 0!==t&&t.exports&&(e=t.exports=h),e.Jed=h}()},343:function(t,e,n){(function(e,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
var r;r=function(){"use strict";function t(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=0,o=void 0,a=void 0,s=function(t,e){d[i]=t,d[i+1]=e,2===(i+=2)&&(a?a(g):b())},l="undefined"!=typeof window?window:void 0,u=l||{},c=u.MutationObserver||u.WebKitMutationObserver,h="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){var t=setTimeout;return function(){return t(g,1)}}var d=new Array(1e3);function g(){for(var t=0;t<i;t+=2)(0,d[t])(d[t+1]),d[t]=void 0,d[t+1]=void 0;i=0}var y,m,v,_,b=void 0;function w(t,e){var n=this,r=new this.constructor(k);void 0===r[E]&&D(r);var i=n._state;if(i){var o=arguments[i-1];s(function(){return M(i,r,o,n._result)})}else N(n,r,t,e);return r}function x(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(k);return A(e,t),e}h?b=function(){return e.nextTick(g)}:c?(m=0,v=new c(g),_=document.createTextNode(""),v.observe(_,{characterData:!0}),b=function(){_.data=m=++m%2}):f?((y=new MessageChannel).port1.onmessage=g,b=function(){return y.port2.postMessage(0)}):b=void 0===l?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(g)}:p()}catch(t){return p()}}():p();var E=Math.random().toString(36).substring(2);function k(){}var P=void 0,S=1,O=2,C={error:null};function L(t){try{return t.then}catch(t){return C.error=t,C}}function T(e,n,r){n.constructor===e.constructor&&r===w&&n.constructor.resolve===x?function(t,e){e._state===S?F(t,e._result):e._state===O?R(t,e._result):N(e,void 0,function(e){return A(t,e)},function(e){return R(t,e)})}(e,n):r===C?(R(e,C.error),C.error=null):void 0===r?F(e,n):t(r)?function(t,e,n){s(function(t){var r=!1,i=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?A(t,n):F(t,n))},function(e){r||(r=!0,R(t,e))},t._label);!r&&i&&(r=!0,R(t,i))},t)}(e,n,r):F(e,n)}function A(t,e){var n,r;t===e?R(t,new TypeError("You cannot resolve a promise with itself")):(r=typeof(n=e),null===n||"object"!==r&&"function"!==r?F(t,e):T(t,e,L(e)))}function j(t){t._onerror&&t._onerror(t._result),I(t)}function F(t,e){t._state===P&&(t._result=e,t._state=S,0!==t._subscribers.length&&s(I,t))}function R(t,e){t._state===P&&(t._state=O,t._result=e,s(j,t))}function N(t,e,n,r){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+S]=n,i[o+O]=r,0===o&&t._state&&s(I,t)}function I(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,i=void 0,o=t._result,a=0;a<e.length;a+=3)r=e[a],i=e[a+n],r?M(n,r,i,o):i(o);t._subscribers.length=0}}function M(e,n,r,i){var o=t(r),a=void 0,s=void 0,l=void 0,u=void 0;if(o){if((a=function(t,e){try{return t(e)}catch(t){return C.error=t,C}}(r,i))===C?(u=!0,s=a.error,a.error=null):l=!0,n===a)return void R(n,new TypeError("A promises callback cannot return that same promise."))}else a=i,l=!0;n._state!==P||(o&&l?A(n,a):u?R(n,s):e===S?F(n,a):e===O&&R(n,a))}var z=0;function D(t){t[E]=z++,t._state=void 0,t._result=void 0,t._subscribers=[]}var $=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(k),this.promise[E]||D(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?F(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&F(this.promise,this._result))):R(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===P&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===x){var i=L(t);if(i===w&&t._state!==P)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(n===W){var o=new n(k);T(o,t,i),this._willSettleAt(o,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===P&&(this._remaining--,t===O?R(r,n):this._result[e]=n),0===this._remaining&&F(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;N(t,void 0,function(t){return n._settledAt(S,e,t)},function(t){return n._settledAt(O,e,t)})},t}(),W=function(){function t(e){this[E]=z++,this._result=this._state=void 0,this._subscribers=[],k!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(t,e){try{e(function(e){A(t,e)},function(e){R(t,e)})}catch(e){R(t,e)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})},t}();return W.prototype.then=w,W.all=function(t){return new $(this,t).promise},W.race=function(t){var e=this;return r(t)?new e(function(n,r){for(var i=t.length,o=0;o<i;o++)e.resolve(t[o]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},W.resolve=x,W.reject=function(t){var e=new this(k);return R(e,t),e},W._setScheduler=function(t){a=t},W._setAsap=function(t){s=t},W._asap=s,W.polyfill=function(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=W},W.Promise=W,W},t.exports=r()}).call(this,n(344),n(253))},344:function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var l,u=[],c=!1,h=-1;function f(){c&&l&&(c=!1,l.length?u=l.concat(u):h=-1,u.length&&p())}function p(){if(!c){var t=s(f);c=!0;for(var e=u.length;e;){for(l=u,u=[];++h<e;)l&&l[h].run();h=-1,e=u.length}l=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new d(t,e)),1!==u.length||c||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},345:function(t,e,n){t.exports=function(t,e,r){"en_CA"==t&&n(346)("./"+e+".po").then(r),"fr_CA"==t&&n(347)("./"+e+".po").then(r)}},348:function(t,e,n){"use strict";var r=n(35);e.__esModule=!0,e.default=void 0;var i,o=r(n(32)),a=r(n(66)),s=r(n(269)),l=r(n(267)),u=r(n(1)),c=r(n(0)),h=function(t){var e=(0,l.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},f={},p=function(t){var e=h(t),n=e.fluid?e.fluid.src:e.fixed.src;return!!f[n]||(f[n]=!0,!1)},d=[],g=null,y=function(){if(null!==g)return g;var t="undefined"!=typeof window?window.document.createElement("canvas"):{};return g=!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")},m=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',n=t.srcSet?'srcset="'+t.srcSet+'" ':"",r=t.sizes?'sizes="'+t.sizes+'" ':"",i=t.title?'title="'+t.title+'" ':"",o=t.alt?'alt="'+t.alt+'" ':'alt="" ',a=t.width?'width="'+t.width+'" ':"",s=t.height?'height="'+t.height+'" ':"",l=t.opacity?t.opacity:"1";return"<img "+a+s+e+n+o+i+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},v=function(t){var e=t.style,n=t.onLoad,r=(0,s.default)(t,["style","onLoad"]);return u.default.createElement("img",(0,l.default)({},r,{onLoad:n,style:(0,l.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},e)}))};v.propTypes={style:c.default.object,onLoad:c.default.func};var _=function(t){function e(e){var n;n=t.call(this,e)||this;var r=!0,i=!0,o=!1;return!p(e)&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,o=!0),"undefined"==typeof window&&(r=!1,i=!1),n.state={isVisible:r,imgLoaded:i,IOSupported:o},n.handleRef=n.handleRef.bind((0,a.default)((0,a.default)(n))),n}(0,o.default)(e,t);var n=e.prototype;return n.handleRef=function(t){var e=this;this.state.IOSupported&&t&&function(t,e){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(t){t.forEach(function(t){d.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(i.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),i).observe(t),d.push([t,e])}(t,function(){e.setState({isVisible:!0,imgLoaded:!1})})},n.render=function(){var t,e=this,n=h(this.props),r=n.title,i=n.alt,o=n.className,a=n.outerWrapperClassName,s=n.style,c=void 0===s?{}:s,f=n.imgStyle,p=void 0===f?{}:f,d=n.placeholderStyle,g=void 0===d?{}:d,_=n.fluid,b=n.fixed,w=n.backgroundColor,x=n.Tag;t="boolean"==typeof w?"lightgray":w;var E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},p,g),k=(0,l.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},p);if(_){var P=_;return P.srcWebp&&P.srcSetWebp&&y()&&(P.src=P.srcWebp,P.srcSet=P.srcSetWebp),u.default.createElement(x,{className:(a||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},u.default.createElement(x,{className:(o||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},c),ref:this.handleRef},u.default.createElement(x,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),P.base64&&u.default.createElement(v,{alt:i,title:r,src:P.base64,style:E}),P.tracedSVG&&u.default.createElement(v,{alt:i,title:r,src:P.tracedSVG,style:E}),t&&u.default.createElement(x,{title:r,style:{backgroundColor:t,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&u.default.createElement(v,{alt:i,title:r,srcSet:P.srcSet,src:P.src,sizes:P.sizes,style:k,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:i,title:r},P))}})))}if(b){var S=b,O=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},c);return"inherit"===c.display&&delete O.display,S.srcWebp&&S.srcSetWebp&&y()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),u.default.createElement(x,{className:(a||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},u.default.createElement(x,{className:(o||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef},S.base64&&u.default.createElement(v,{alt:i,title:r,src:S.base64,style:E}),S.tracedSVG&&u.default.createElement(v,{alt:i,title:r,src:S.tracedSVG,style:E}),t&&u.default.createElement(x,{title:r,style:{backgroundColor:t,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&u.default.createElement(v,{alt:i,title:r,width:S.width,height:S.height,srcSet:S.srcSet,src:S.src,style:k,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:i,title:r,width:S.width,height:S.height},S))}})))}return null},e}(u.default.Component);_.defaultProps={fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});_.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),outerWrapperClassName:c.default.oneOfType([c.default.string,c.default.object]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,position:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,Tag:c.default.string};var x=_;e.default=x},349:function(t,e,n){(function(e){e.registerDomain("src/pages/index.js"),"undefined"!=typeof window&&(window.localizer=e),t.exports=e}).call(this,n(275).default({availableLanguages:["en_CA","fr_CA"]}))}}]);
//# sourceMappingURL=19-bd0e3d82e5790fe4e977.js.map