(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[678],{442:function(e,t,n){"use strict";n.d(t,{$e:function(){return s},Bt:function(){return p},Y5:function(){return f},uV:function(){return l},wr:function(){return a}});var r=n(861),o=n(757),u=n.n(o),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c={params:{api_key:"1de0ae613c35227dc100c75fb91abb21",language:"en-US"}},a=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day",c);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t),c);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?query=".concat(t),c);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?"),c);case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews?"),c);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},52:function(e,t,n){"use strict";var r=n(87),o=n(689),u=n(184);t.Z=function(e){var t=e.films,n=(0,o.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(861),o=n(439),u=n(757),i=n.n(u),c=n(791),a=n(87),f=n(442),s=n(628),l=n(184),p=function(e){var t=e.value,n=e.onChange;return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,l.jsx)("h2",{children:"Movie Search"}),(0,l.jsx)(s.DebounceInput,{type:"text",debounceTimeout:500,value:t,onChange:function(e){return n(e.target.value)},placeholder:"type here"})]})},v=n(52),y=function(){var e=(0,c.useState)([]),t=(0,o.Z)(e,2),n=t[0],u=t[1],s=(0,a.lr)(),y=(0,o.Z)(s,2),b=y[0],h=y[1],d=b.get("query")||"",m=(0,c.useState)(!1),g=(0,o.Z)(m,2),w=g[0],O=g[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,(0,f.$e)(d);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,O(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[d]),(0,l.jsxs)("div",{children:[(0,l.jsx)(p,{value:d,onChange:function(e){h(""!==e&&{query:e})}}),w?(0,l.jsx)("p",{children:"Loading..."}):0===n.length&&d?(0,l.jsx)("h2",{children:"\ud83d\udd0e Nothing found"}):(0,l.jsx)(v.Z,{films:n})]})}},95:function(e,t,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,i=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,s=a||f||Function("return this")(),l=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return s.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||i.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,u,i,c,a,f=0,s=!1,l=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,u=o;return r=o=void 0,f=t,i=e.apply(u,n)}function g(e){return f=e,c=setTimeout(O,t),s?m(e):i}function w(e){var n=e-a;return void 0===a||n>=t||n<0||l&&e-f>=u}function O(){var e=y();if(w(e))return j(e);c=setTimeout(O,function(e){var n=t-(e-a);return l?v(n,u-(e-f)):n}(e))}function j(e){return c=void 0,d&&r?m(e):(r=o=void 0,i)}function x(){var e=y(),n=w(e);if(r=arguments,o=this,a=e,n){if(void 0===c)return g(a);if(l)return c=setTimeout(O,t),m(a)}return void 0===c&&(c=setTimeout(O,t)),i}return t=h(t)||0,b(n)&&(s=!!n.leading,u=(l="maxWait"in n)?p(h(n.maxWait)||0,t):u,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==c&&clearTimeout(c),f=0,r=a=o=c=void 0},x.flush=function(){return void 0===c?i:j(y())},x}},674:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DebounceInput=void 0;var o=c(n(791)),u=c(n(95)),i=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function c(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(f,e);var t,n,r,c=v(f);function f(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),d(b(t=c.call(this,e)),"onChange",(function(e){e.persist();var n=t.state.value,r=t.props.minLength;t.setState({value:e.target.value},(function(){var o=t.state.value;o.length>=r?t.notify(e):n.length>o.length&&t.notify(s(s({},e),{},{target:s(s({},e.target),{},{value:""})}))}))})),d(b(t),"onKeyDown",(function(e){"Enter"===e.key&&t.forceNotify(e);var n=t.props.onKeyDown;n&&(e.persist(),n(e))})),d(b(t),"onBlur",(function(e){t.forceNotify(e);var n=t.props.onBlur;n&&(e.persist(),n(e))})),d(b(t),"createNotifier",(function(e){if(e<0)t.notify=function(){return null};else if(0===e)t.notify=t.doNotify;else{var n=(0,u.default)((function(e){t.isDebouncing=!1,t.doNotify(e)}),e);t.notify=function(e){t.isDebouncing=!0,n(e)},t.flush=function(){return n.flush()},t.cancel=function(){t.isDebouncing=!1,n.cancel()}}})),d(b(t),"doNotify",(function(){var e=t.props.onChange;e.apply(void 0,arguments)})),d(b(t),"forceNotify",(function(e){var n=t.props.debounceTimeout;if(t.isDebouncing||!(n>0)){t.cancel&&t.cancel();var r=t.state.value,o=t.props.minLength;r.length>=o?t.doNotify(e):t.doNotify(s(s({},e),{},{target:s(s({},e.target),{},{value:r})}))}})),t.isDebouncing=!1,t.state={value:"undefined"===typeof e.value||null===e.value?"":e.value};var n=t.props.debounceTimeout;return t.createNotifier(n),t}return t=f,(n=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var t=this.props,n=t.value,r=t.debounceTimeout,o=e.debounceTimeout,u=e.value,i=this.state.value;"undefined"!==typeof n&&u!==n&&i!==n&&this.setState({value:n}),r!==o&&this.createNotifier(r)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,t,n=this.props,r=n.element,u=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),c=n.forceNotifyOnBlur,f=n.onKeyDown,l=n.onBlur,p=n.inputRef,v=a(n,i),y=this.state.value;e=u?{onKeyDown:this.onKeyDown}:f?{onKeyDown:f}:{},t=c?{onBlur:this.onBlur}:l?{onBlur:l}:{};var b=p?{ref:p}:{};return o.default.createElement(r,s(s(s(s({},v),{},{onChange:this.onChange,value:y},e),t),b))}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(o.default.PureComponent);t.DebounceInput=m,d(m,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},628:function(e,t,n){"use strict";var r=n(674).DebounceInput;r.DebounceInput=r,e.exports=r}}]);
//# sourceMappingURL=678.e6e0c2cd.chunk.js.map