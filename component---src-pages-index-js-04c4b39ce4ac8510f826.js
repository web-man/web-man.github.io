(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/8Fb":function(t,e,r){var n=r("XKFU"),o=r("UExd")(!0);n(n.S,"Object",{entries:function(t){return o(t)}})},"8+s/":function(t,e,r){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t.default:t}r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var o=r("q1tI"),i=n(o),a=n(r("Gytx"));function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function f(){l=t(s.map((function(t){return t.props}))),p.canUseDOM?e(l):r&&(l=r(l))}var p=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=l;return l=void 0,s=[],t};var c=o.prototype;return c.shouldComponentUpdate=function(t){return!a(t,this.props)},c.componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),f()},c.render=function(){return i.createElement(n,this.props)},o}(o.Component);return c(p,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),c(p,"canUseDOM",u),p}}},Gytx:function(t,e,r){r("2Spj"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),t.exports=function(t,e,r,n){var o=r?r.call(n,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),u=0;u<i.length;u++){var l=i[u];if(!c(l))return!1;var s=t[l],f=e[l];if(!1===(o=r?r.call(n,s,f,l):void 0)||void 0===o&&s!==f)return!1}return!0}},"HAE/":function(t,e,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperty:r("hswa").f})},Oyvg:function(t,e,r){var n=r("dyZX"),o=r("Xbzi"),i=r("hswa").f,a=r("kJMx").f,c=r("quPj"),u=r("C/va"),l=n.RegExp,s=l,f=l.prototype,p=/a/g,d=/a/g,h=new l(p)!==p;if(r("nh4g")&&(!h||r("eeVq")((function(){return d[r("K0xU")("match")]=!1,l(p)!=p||l(d)==d||"/a/i"!=l(p,"i")})))){l=function(t,e){var r=this instanceof l,n=c(t),i=void 0===e;return!r&&n&&t.constructor===l&&i?t:o(h?new s(n&&!i?t.source:t,e):s((n=t instanceof l)?t.source:t,n&&i?u.call(t):e),r?this:f,l)};for(var T=function(t){t in l||i(l,t,{configurable:!0,get:function(){return s[t]},set:function(e){s[t]=e}})},E=a(s),m=0;E.length>m;)T(E[m++]);f.constructor=l,l.prototype=f,r("KroJ")(n,"RegExp",l)}r("elZq")("RegExp")},RXBc:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),i=function(){return o.a.createElement("header",null,o.a.createElement("img",{src:"../../logo.png"}),o.a.createElement("h1",null,"Igor ",o.a.createElement("span",null,"Đukić")))},a=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"social-icons"},o.a.createElement("a",{href:"https://github.com/web-man/",target:"_blank"},o.a.createElement("img",{src:"../../github.svg"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/igor-%C4%91uki%C4%87/",target:"_blank"},o.a.createElement("img",{src:"../../linkedin.svg"})),o.a.createElement("a",{href:"https://twitter.com/prodevl",target:"_blank"},o.a.createElement("img",{src:"../../twitter.svg"}))),o.a.createElement("div",{className:"copyright-text"},o.a.createElement("p",null,"Copyright Igor Đukić ",(new Date).getFullYear(),"  ©")))},c=r("TJpk"),u=function(t){var e=t.children;return o.a.createElement("div",{className:"main"},o.a.createElement(c.Helmet,null,o.a.createElement("title",null,"Igor Đukić")),o.a.createElement(i,null),e,o.a.createElement(a,null))},l=r("o0o1"),s=r.n(l);r("ls82"),r("rGqo"),r("yt8O"),r("/8Fb"),r("VRzm"),r("a1Th"),r("Btvt"),r("I5cv");function f(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,c,"next",t)}function c(t){f(i,n,o,a,c,"throw",t)}a(void 0)}))}}var d=function(t){var e,r;r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var n;n=i;function i(){return t.apply(this,arguments)||this}var a=i.prototype;return a.componentDidMount=function(){!function(t){(function t(e,r){for(var n=0,o=Object.entries(e);n<o.length;n++){var i=o[n],a=i[0],c=i[1],u=null,l=a;"heading"===(a=a.slice(0,-1))?(u=document.createElement("h2"),document.getElementById("body").appendChild(u),document.getElementById("body").appendChild(document.createElement("br"))):"paragraph"===a?((u=document.createElement("p")).classList.add(l),document.getElementById("body").appendChild(u),document.getElementById("body").appendChild(document.createElement("br"))):"link"===a?((u=document.createElement("a")).setAttribute("href",c.href0),u.setAttribute("target","_blank"),T.push(h.bind(null,r,u))):"text"===a&&r?T.push(h.bind(null,r,c)):"span"===a&&((u=document.createElement("span")).classList.add("link"),T.push(h.bind(null,document.getElementsByClassName("paragraph3")[0],u))),"object"==typeof c&&t(c,u)}})(t),function(){var t=0;function e(){return r.apply(this,arguments)}function r(){return(r=p(s.a.mark((function r(){return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t<T.length)){r.next=5;break}return r.next=3,T[t]();case 3:t++,e();case 5:case"end":return r.stop()}}),r)})))).apply(this,arguments)}e()}()}(E)},a.render=function(){return o.a.createElement("div",{className:"body-text-container"},o.a.createElement("div",{id:"body"}))},i}(o.a.Component);function h(t,e){return new Promise((function(r){var n=0;"A"===e.tagName||"SPAN"===e.tagName?(t.appendChild(e),r()):function o(){n<e.length?(t.innerHTML+=e.charAt(n),n++,setTimeout(o,20)):r()}()}))}var T=[],E={heading0:{text0:"Hello, my name is Igor."},paragraph0:{text0:"I am a software developer living in ",link0:{text0:"Belgrade, Serbia",href0:"https://www.google.com/maps/place/Belgrade/@44.8180058,20.3672225,11.3z/data=!4m5!3m4!1s0x475a7aa3d7b53fbd:0x1db8645cf2177ee4!8m2!3d44.786568!4d20.4489216"},text1:"."},paragraph1:{text0:"I build web applications using popular technologies like ",link0:{text0:"Node.js ",href0:"https://nodejs.org/en/about/"},text1:"and ",link1:{text0:"Ruby on Rails",href0:"https://rubyonrails.org/"},text2:"."},paragraph2:{text0:"Can even create a SPA application using ",link0:{text0:"React",href0:"https://reactjs.org/"},text1:"/",link1:{text0:"Angular",href0:"https://angular.io/"},text2:"/",link2:{text0:"Ember",href0:"https://emberjs.com/"},text3:"/",link3:{text0:"Vue",href0:"https://vuejs.org/"},text4:"."},paragraph3:{text0:"If you have any ideas or problems I am willing to hear."},span0:{text0:""}};var m=function(){return o.a.createElement("main",null,o.a.createElement(d,null),o.a.createElement("a",{className:"mail-button",href:"mailto:igordjukic0@gmail.com"},o.a.createElement("img",{src:"../../paper-plane.svg"})," Message me"))};e.default=function(){return o.a.createElement(u,null,o.a.createElement(m,null))}},TJpk:function(t,e,r){r("LK8F"),r("dZ+Y"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("/SS/"),r("hHhE"),r("V+eJ"),r("HAE/"),r("91GP"),e.__esModule=!0,e.Helmet=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=f(r("q1tI")),a=f(r("17x9")),c=f(r("8+s/")),u=f(r("bmMU")),l=r("v1p5"),s=r("hFT/");function f(t){return t&&t.__esModule?t:{default:t}}function p(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var T,E,m,y=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),v=(T=y,m=E=function(t){function e(){return d(this,e),h(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,u.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case s.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,o=t.arrayTypeChildren,i=t.newChildProps,a=t.nestedChildren;return n({},o,((e={})[r.type]=[].concat(o[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,o=t.child,i=t.newProps,a=t.newChildProps,c=t.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return n({},i,((e={})[o.type]=c,e.titleAttributes=n({},a),e));case s.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},a)});case s.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},a)})}return n({},i,((r={})[o.type]=n({},a),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=n({},e);return Object.keys(t).forEach((function(e){var o;r=n({},r,((o={})[e]=t[e],o))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return i.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=p(o,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(a);switch(r.warnOnInvalidChildren(t,i),t.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:c,nestedChildren:i});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=p(t,["children"]),o=n({},r);return e&&(o=this.mapChildrenToProps(e,o)),i.default.createElement(T,o)},o(e,null,[{key:"canUseDOM",set:function(t){T.canUseDOM=t}}]),e}(i.default.Component),E.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=T.peek,E.rewind=function(){var t=T.rewind();return t||(t=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},m);v.renderStatic=v.rewind,e.Helmet=v,e.default=v},UExd:function(t,e,r){var n=r("nh4g"),o=r("DVgA"),i=r("aCFj"),a=r("UqcF").f;t.exports=function(t){return function(e){for(var r,c=i(e),u=o(c),l=u.length,s=0,f=[];l>s;)r=u[s++],n&&!a.call(c,r)||f.push(t?[r,c[r]]:c[r]);return f}}},bmMU:function(t,e,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){var c,u,l,s=n(e),f=n(r);if(s&&f){if((u=e.length)!=r.length)return!1;for(c=u;0!=c--;)if(!t(e[c],r[c]))return!1;return!0}if(s!=f)return!1;var p=e instanceof Date,d=r instanceof Date;if(p!=d)return!1;if(p&&d)return e.getTime()==r.getTime();var h=e instanceof RegExp,T=r instanceof RegExp;if(h!=T)return!1;if(h&&T)return e.toString()==r.toString();var E=o(e);if((u=E.length)!==o(r).length)return!1;for(c=u;0!=c--;)if(!i.call(r,E[c]))return!1;if(a&&e instanceof Element&&r instanceof Element)return e===r;for(c=u;0!=c--;)if(!("_owner"===(l=E[c])&&e.$$typeof||t(e[l],r[l])))return!1;return!0}return e!=e&&r!=r}(t,e)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},h7Nl:function(t,e,r){var n=Date.prototype,o=n.toString,i=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("KroJ")(n,"toString",(function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"}))},"hFT/":function(t,e,r){r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx"),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(e.VALID_TAG_NAMES=Object.keys(n).map((function(t){return n[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(o).reduce((function(t,e){return t[o[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},ls82:function(t,e,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new b(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=v(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l={};function s(){}function f(){}function p(){}var d={};d[o]=function(){return this};var h=Object.getPrototypeOf,T=h&&h(h(S([])));T&&T!==e&&r.call(T,o)&&(d=T);var E=p.prototype=s.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function v(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,v(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function g(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=E.constructor=p,p.constructor=f,p[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},m(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new y(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(E),E[a]="Generator",E[o]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(g),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),g(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;g(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")},v1p5:function(t,e,r){(function(t){r("dZ+Y"),r("KKXr"),r("eM6i"),r("8+KV"),r("LK8F"),r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("bWfx"),r("DNiP"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=u(r("q1tI")),a=u(r("MgzW")),c=r("hFT/");function u(t){return t&&t.__esModule?t:{default:t}}var l,s=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(t){var e=E(t,c.TAG_NAMES.TITLE),r=E(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&e)return r.replace(/%s/g,(function(){return e}));var n=E(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||n||void 0},p=function(t){return E(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},h=function(t,e){return e.filter((function(t){return void 0!==t[c.TAG_NAMES.BASE]})).map((function(t){return t[c.TAG_NAMES.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==t.indexOf(i)&&r[i])return e.concat(r)}return e}),[])},T=function(t,e,r){var o={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&g("Helmet: "+t+' should be of type "Array". Instead found type "'+n(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var n={};r.filter((function(t){for(var r=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],l=u.toLowerCase();-1===e.indexOf(l)||r===c.TAG_PROPERTIES.REL&&"canonical"===t[r].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===t[l].toLowerCase()||(r=l),-1===e.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(r=u)}if(!r||!t[r])return!1;var s=t[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][s]&&(n[r][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(n),u=0;u<i.length;u++){var l=i[u],s=(0,a.default)({},o[l],n[l]);o[l]=s}return t}),[]).reverse()},E=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},m=(l=Date.now(),function(t){var e=Date.now();e-l>16?(l=e,t(e)):setTimeout((function(){m(t)}),0)}),y=function(t){return clearTimeout(t)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:t.requestAnimationFrame||m,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:t.cancelAnimationFrame||y,g=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},b=null,S=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,l=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,p=t.title,d=t.titleAttributes;R(c.TAG_NAMES.BODY,n),R(c.TAG_NAMES.HTML,o),w(p,d);var h={baseTag:O(c.TAG_NAMES.BASE,r),linkTags:O(c.TAG_NAMES.LINK,i),metaTags:O(c.TAG_NAMES.META,a),noscriptTags:O(c.TAG_NAMES.NOSCRIPT,u),scriptTags:O(c.TAG_NAMES.SCRIPT,s),styleTags:O(c.TAG_NAMES.STYLE,f)},T={},E={};Object.keys(h).forEach((function(t){var e=h[t],r=e.newTags,n=e.oldTags;r.length&&(T[t]=r),n.length&&(E[t]=h[t].oldTags)})),e&&e(),l(t,T,E)},_=function(t){return Array.isArray(t)?t.join(""):t},w=function(t,e){void 0!==t&&document.title!==t&&(document.title=_(t)),R(c.TAG_NAMES.TITLE,e)},R=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var l=a[u],s=e[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var f=i.indexOf(l);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)r.removeAttribute(i[p]);o.length===i.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},O=function(t,e){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=e.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[n]?"":e[n];r.setAttribute(n,u)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return a=e,r.isEqualNode(t)}))?o.splice(a,1):i.push(r)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:i}},P=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[c.REACT_TAG_MAP[r]||r]=t[r],e}),e)},I=function(t,e,r){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})[c.HELMET_ATTRIBUTE]=!0,o=M(r,n),[i.default.createElement(c.TAG_NAMES.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var o=P(r),i=_(e);return o?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,n)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+s(i,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(e)},toString:function(){return P(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var n,o=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(e).forEach((function(t){var r=c.REACT_TAG_MAP[t]||t;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]})),i.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var o=Object.keys(n).filter((function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===n[e]?e:e+'="'+s(n[e],r)+'"';return t?t+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,r)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[c.HTML_TAG_MAP[r]||r]=t[r],e}),e)},e.handleClientStateChange=function(t){b&&A(b),t.defer?b=v((function(){S(t,(function(){b=null}))})):(S(t),b=null)},e.mapStateOnServer=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,l=t.scriptTags,s=t.styleTags,f=t.title,p=void 0===f?"":f,d=t.titleAttributes;return{base:I(c.TAG_NAMES.BASE,e,n),bodyAttributes:I(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:I(c.ATTRIBUTE_NAMES.HTML,o,n),link:I(c.TAG_NAMES.LINK,i,n),meta:I(c.TAG_NAMES.META,a,n),noscript:I(c.TAG_NAMES.NOSCRIPT,u,n),script:I(c.TAG_NAMES.SCRIPT,l,n),style:I(c.TAG_NAMES.STYLE,s,n),title:I(c.TAG_NAMES.TITLE,{title:p,titleAttributes:d},n)}},e.reducePropsToState=function(t){return{baseTag:h([c.TAG_PROPERTIES.HREF],t),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,t),defer:E(t,c.HELMET_PROPS.DEFER),encode:E(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,t),linkTags:T(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:T(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:T(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:p(t),scriptTags:T(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:T(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:f(t),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=v,e.warn=g}).call(this,r("yLpj"))},yLpj:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}t.exports=r}}]);
//# sourceMappingURL=component---src-pages-index-js-04c4b39ce4ac8510f826.js.map