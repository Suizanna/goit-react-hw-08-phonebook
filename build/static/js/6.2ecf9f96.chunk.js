(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{118:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(49);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(o=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(u){r=!0,a=u}finally{try{o||null==s.return||s.return()}finally{if(r)throw a}}return n}}(t,e)||Object(o.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},119:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var o=63&n[t];e+=o<36?o.toString(36):o<62?(o-26).toString(36).toUpperCase():o<63?"_":"-"}return e}},126:function(t,e,n){"use strict";var o=n(0),r=n.n(o);function a(){}function i(t){return!!(t||"").match(/\d/)}function s(t){return null===t||void 0===t}function u(t){return t.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function c(t,e){void 0===e&&(e=!0);var n="-"===t[0],o=n&&e,r=(t=t.replace("-","")).split(".");return{beforeDecimal:r[0],afterDecimal:r[1]||"",hasNagation:n,addNegation:o}}function l(t,e,n){for(var o="",r=n?"0":"",a=0;a<=e-1;a++)o+=t[a]||r;return o}function f(t,e){return Array(e+1).join(t)}function p(t,e){if(t.value=t.value,null!==t){if(t.createTextRange){var n=t.createTextRange();return n.move("character",e),n.select(),!0}return t.selectionStart||0===t.selectionStart?(t.focus(),t.setSelectionRange(e,e),!0):(t.focus(),!1)}}function d(t,e,n){return Math.min(Math.max(t,e),n)}function g(t){return Math.max(t.selectionStart,t.selectionEnd)}var m={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:a,onChange:a,onKeyDown:a,onMouseUp:a,onFocus:a,onBlur:a,isAllowed:function(){return!0}},h=function(t){function e(e){t.call(this,e);var n=e.defaultValue;this.validateProps();var o=this.formatValueProp(n);this.state={value:o,numAsString:this.removeFormatting(o),mounted:!1},this.selectionBeforeInput={selectionStart:0,selectionEnd:0},this.onChange=this.onChange.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.componentDidMount=function(){this.setState({mounted:!0})},e.prototype.componentDidUpdate=function(t){this.updateValueIfRequired(t)},e.prototype.componentWillUnmount=function(){clearTimeout(this.focusTimeout),clearTimeout(this.caretPositionTimeout)},e.prototype.updateValueIfRequired=function(t){var e=this,n=e.props,o=e.state,r=e.focusedElm,a=o.value,i=o.numAsString;if(void 0===i&&(i=""),t!==n){this.validateProps();var u=this.formatNumString(i),c=s(n.value)?u:this.formatValueProp(),l=this.removeFormatting(c),f=parseFloat(l),p=parseFloat(i);(isNaN(f)&&isNaN(p)||f===p)&&u===a&&(null!==r||c===a)||this.updateValue({formattedValue:c,numAsString:l,input:r})}},e.prototype.getFloatString=function(t){void 0===t&&(t="");var e=this.props.decimalScale,n=this.getSeparators().decimalSeparator,o=this.getNumberRegex(!0),r="-"===t[0];r&&(t=t.replace("-","")),n&&0===e&&(t=t.split(n)[0]);var a=(t=(t.match(o)||[]).join("").replace(n,".")).indexOf(".");return-1!==a&&(t=t.substring(0,a)+"."+t.substring(a+1,t.length).replace(new RegExp(u(n),"g"),"")),r&&(t="-"+t),t},e.prototype.getNumberRegex=function(t,e){var n=this.props,o=n.format,r=n.decimalScale,a=n.customNumerals,i=this.getSeparators().decimalSeparator;return new RegExp("[0-9"+(a?a.join(""):"")+"]"+(!i||0===r||e||o?"":"|"+u(i)),t?"g":void 0)},e.prototype.getSeparators=function(){var t=this.props.decimalSeparator,e=this.props,n=e.thousandSeparator,o=e.allowedDecimalSeparators;return!0===n&&(n=","),o||(o=[t,"."]),{decimalSeparator:t,thousandSeparator:n,allowedDecimalSeparators:o}},e.prototype.getMaskAtIndex=function(t){var e=this.props.mask;return void 0===e&&(e=" "),"string"===typeof e?e:e[t]||" "},e.prototype.getValueObject=function(t,e){var n=parseFloat(e);return{formattedValue:t,value:e,floatValue:isNaN(n)?void 0:n}},e.prototype.validateProps=function(){var t=this.props.mask,e=this.getSeparators(),n=e.decimalSeparator,o=e.thousandSeparator;if(n===o)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: "+o+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: '+n+" (default value for decimalSeparator is .)\n       ");if(t&&("string"===t?t:t.toString()).match(/\d/g))throw new Error("\n          Mask "+t+" should not contain numeric character;\n        ")},e.prototype.setPatchedCaretPosition=function(t,e,n){p(t,e),this.caretPositionTimeout=setTimeout((function(){t.value===n&&p(t,e)}),0)},e.prototype.correctCaretPosition=function(t,e,n){var o=this.props,r=o.prefix,a=o.suffix,s=o.format;if(""===t)return 0;if(e=d(e,0,t.length),!s){var u="-"===t[0];return d(e,r.length+(u?1:0),t.length-a.length)}if("function"===typeof s)return e;if("#"===s[e]&&i(t[e]))return e;if("#"===s[e-1]&&i(t[e-1]))return e;var c=s.indexOf("#");e=d(e,c,s.lastIndexOf("#")+1);for(var l=s.substring(e,s.length).indexOf("#"),f=e,p=e+(-1===l?0:l);f>c&&("#"!==s[f]||!i(t[f]));)f-=1;return!i(t[p])||"left"===n&&e!==c||e-f<p-e?i(t[f])?f+1:f:p},e.prototype.getCaretPosition=function(t,e,n){var o,r,a=this.props.format,i=this.state.value,s=this.getNumberRegex(!0),u=(t.match(s)||[]).join(""),c=(e.match(s)||[]).join("");for(o=0,r=0;r<n;r++){var l=t[r]||"",f=e[o]||"";if((l.match(s)||l===f)&&("0"!==l||!f.match(s)||"0"===f||u.length===c.length)){for(;l!==e[o]&&o<e.length;)o++;o++}}return"string"!==typeof a||i||(o=e.length),o=this.correctCaretPosition(e,o)},e.prototype.removePrefixAndSuffix=function(t){var e=this.props,n=e.format,o=e.prefix,r=e.suffix;if(!n&&t){var a="-"===t[0];a&&(t=t.substring(1,t.length));var i=(t=o&&0===t.indexOf(o)?t.substring(o.length,t.length):t).lastIndexOf(r);t=r&&-1!==i&&i===t.length-r.length?t.substring(0,i):t,a&&(t="-"+t)}return t},e.prototype.removePatternFormatting=function(t){for(var e=this.props.format.split("#").filter((function(t){return""!==t})),n=0,o="",r=0,a=e.length;r<=a;r++){var i=e[r]||"",s=r===a?t.length:t.indexOf(i,n);if(-1===s){o=t;break}o+=t.substring(n,s),n=s+i.length}return(o.match(/\d/g)||[]).join("")},e.prototype.removeFormatting=function(t){var e=this.props,n=e.format,o=e.removeFormatting;return t?(n?t="string"===typeof n?this.removePatternFormatting(t):"function"===typeof o?o(t):(t.match(/\d/g)||[]).join(""):(t=this.removePrefixAndSuffix(t),t=this.getFloatString(t)),t):t},e.prototype.formatWithPattern=function(t){for(var e=this.props.format,n=0,o=e.split(""),r=0,a=e.length;r<a;r++)"#"===e[r]&&(o[r]=t[n]||this.getMaskAtIndex(n),n+=1);return o.join("")},e.prototype.formatAsNumber=function(t){var e=this.props,n=e.decimalScale,o=e.fixedDecimalScale,r=e.prefix,a=e.suffix,i=e.allowNegative,s=e.thousandsGroupStyle,u=this.getSeparators(),f=u.thousandSeparator,p=u.decimalSeparator,d=-1!==t.indexOf(".")||n&&o,g=c(t,i),m=g.beforeDecimal,h=g.afterDecimal,v=g.addNegation;return void 0!==n&&(h=l(h,n,o)),f&&(m=function(t,e,n){var o=function(t){switch(t){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}(n),r=t.search(/[1-9]/);return r=-1===r?t.length:r,t.substring(0,r)+t.substring(r,t.length).replace(o,"$1"+e)}(m,f,s)),r&&(m=r+m),a&&(h+=a),v&&(m="-"+m),t=m+(d&&p||"")+h},e.prototype.formatNumString=function(t){void 0===t&&(t="");var e=this.props,n=e.format,o=e.allowEmptyFormatting,r=e.customNumerals,a=t;if(r&&10===r.length){var i=new RegExp("["+r.join("")+"]","g");a=t.replace(i,(function(t){return r.indexOf(t).toString()}))}return a=""!==t||o?"-"!==t||n?"string"===typeof n?this.formatWithPattern(a):"function"===typeof n?n(a):this.formatAsNumber(a):"-":""},e.prototype.formatValueProp=function(t){var e=this.props,n=e.format,o=e.decimalScale,r=e.fixedDecimalScale,a=e.allowEmptyFormatting,i=this.props,u=i.value,p=i.isNumericString,d=!(u=s(u)?t:u)&&0!==u;return d&&a&&(u=""),d&&!a?"":("number"===typeof u&&(u=function(t){var e="-"===(t+="")[0]?"-":"";e&&(t=t.substring(1));var n=t.split(/[eE]/g),o=n[0],r=n[1];if(!(r=Number(r)))return e+o;var a=1+r,i=(o=o.replace(".","")).length;return a<0?o="0."+f("0",Math.abs(a))+o:a>=i?o+=f("0",a-i):o=(o.substring(0,a)||"0")+"."+o.substring(a),e+o}(u),p=!0),"Infinity"===u&&p&&(u=""),p&&!n&&"number"===typeof o&&(u=function(t,e,n){if(-1!==["","-"].indexOf(t))return t;var o=-1!==t.indexOf(".")&&e,r=c(t),a=r.beforeDecimal,i=r.afterDecimal,s=r.hasNagation,u=parseFloat("0."+(i||"0")),f=(i.length<=e?"0."+i:u.toFixed(e)).split(".");return(s?"-":"")+a.split("").reverse().reduce((function(t,e,n){return t.length>n?(Number(t[0])+Number(e)).toString()+t.substring(1,t.length):e+t}),f[0])+(o?".":"")+l(f[1]||"",Math.min(e,i.length),n)}(u,o,r)),p?this.formatNumString(u):this.formatInput(u))},e.prototype.formatNegation=function(t){void 0===t&&(t="");var e=this.props.allowNegative,n=new RegExp("(-)"),o=new RegExp("(-)(.)*(-)"),r=n.test(t),a=o.test(t);return t=t.replace(/-/g,""),r&&!a&&e&&(t="-"+t),t},e.prototype.formatInput=function(t){return void 0===t&&(t=""),this.props.format||(t=this.removePrefixAndSuffix(t),t=this.formatNegation(t)),t=this.removeFormatting(t),this.formatNumString(t)},e.prototype.isCharacterAFormat=function(t,e){var n=this.props,o=n.format,r=n.prefix,a=n.suffix,i=n.decimalScale,s=n.fixedDecimalScale,u=this.getSeparators().decimalSeparator;return"string"===typeof o&&"#"!==o[t]||!(o||!(t<r.length||t>=e.length-a.length||i&&s&&e[t]===u))},e.prototype.correctInputValue=function(t,e,n){var o=this,r=this.props,a=r.format,i=r.allowNegative,s=r.prefix,u=r.suffix,l=r.decimalScale,f=this.getSeparators(),p=f.allowedDecimalSeparators,d=f.decimalSeparator,g=this.state.numAsString||"",m=this.selectionBeforeInput,h=m.selectionStart,v=m.selectionEnd,y=function(t,e){for(var n=0,o=0,r=t.length,a=e.length;t[n]===e[n]&&n<r;)n++;for(;t[r-1-o]===e[a-1-o]&&a-o>n&&r-o>n;)o++;return{start:n,end:r-o}}(e,n),b=y.start,O=y.end;if(!a&&b===O&&-1!==p.indexOf(n[h])){var S=0===l?"":d;return n.substr(0,h)+S+n.substr(h+1,n.length)}var T=a?0:s.length,E=e.length-(a?0:u.length);if(n.length>e.length||!n.length||b===O||0===h&&v===e.length||0===b&&O===e.length||h===T&&v===E)return n;var x=e.substr(b,O-b);if(!![].concat(x).find((function(t,n){return o.isCharacterAFormat(n+b,e)}))){var C=e.substr(b),w={},I=[];[].concat(C).forEach((function(t,n){o.isCharacterAFormat(n+b,e)?w[n]=t:n>x.length-1&&I.push(t)})),Object.keys(w).forEach((function(t){I.length>t?I.splice(t,0,w[t]):I.push(w[t])})),n=e.substr(0,b)+I.join("")}if(!a){var N=this.removeFormatting(n),j=c(N,i),P=j.beforeDecimal,D=j.afterDecimal,R=j.addNegation,F=t<n.indexOf(d)+1;if(N.length<g.length&&F&&""===P&&!parseFloat(D))return R?"-":""}return n},e.prototype.updateValue=function(t){var e=t.formattedValue,n=t.input,o=t.setCaretPosition;void 0===o&&(o=!0);var r=t.numAsString,a=t.caretPos,i=this.props.onValueChange,s=this.state.value;if(n)if(o){if(!a){var u=t.inputValue||n.value,c=g(n);n.value=e,a=this.getCaretPosition(u,e,c)}this.setPatchedCaretPosition(n,a,e)}else n.value=e;void 0===r&&(r=this.removeFormatting(e)),e!==s&&(this.setState({value:e,numAsString:r}),i(this.getValueObject(e,r)))},e.prototype.onChange=function(t){var e=t.target,n=e.value,o=this.state,r=this.props,a=r.isAllowed,i=o.value||"",s=g(e);n=this.correctInputValue(s,i,n);var u=this.formatInput(n)||"",c=this.removeFormatting(u),l=a(this.getValueObject(u,c));l||(u=i),this.updateValue({formattedValue:u,numAsString:c,inputValue:n,input:e}),l&&r.onChange(t)},e.prototype.onBlur=function(t){var e=this.props,n=this.state,o=e.format,r=e.onBlur,a=e.allowLeadingZeros,i=n.numAsString,s=n.value;if(this.focusedElm=null,clearTimeout(this.focusTimeout),clearTimeout(this.caretPositionTimeout),!o){isNaN(parseFloat(i))&&(i=""),a||(i=function(t){if(!t)return t;var e="-"===t[0];e&&(t=t.substring(1,t.length));var n=t.split("."),o=n[0].replace(/^0+/,"")||"0",r=n[1]||"";return(e?"-":"")+o+(r?"."+r:"")}(i));var u=this.formatNumString(i);if(u!==s)return this.updateValue({formattedValue:u,numAsString:i,input:t.target,setCaretPosition:!1}),void r(t)}r(t)},e.prototype.onKeyDown=function(t){var e,n=t.target,o=t.key,r=n.selectionStart,a=n.selectionEnd,i=n.value;void 0===i&&(i="");var s=this.props,u=s.decimalScale,c=s.fixedDecimalScale,l=s.prefix,f=s.suffix,p=s.format,d=s.onKeyDown,g=void 0!==u&&c,m=this.getNumberRegex(!1,g),h=new RegExp("-"),v="string"===typeof p;if(this.selectionBeforeInput={selectionStart:r,selectionEnd:a},"ArrowLeft"===o||"Backspace"===o?e=r-1:"ArrowRight"===o?e=r+1:"Delete"===o&&(e=r),void 0!==e&&r===a){var y=e,b=v?p.indexOf("#"):l.length,O=v?p.lastIndexOf("#")+1:i.length-f.length;if("ArrowLeft"===o||"ArrowRight"===o){var S="ArrowLeft"===o?"left":"right";y=this.correctCaretPosition(i,e,S)}else if("Delete"!==o||m.test(i[e])||h.test(i[e])){if("Backspace"===o&&!m.test(i[e]))if(r<=b+1&&"-"===i[0]&&"undefined"===typeof p){var T=i.substring(1);this.updateValue({formattedValue:T,caretPos:y,input:n})}else if(!h.test(i[e])){for(;!m.test(i[y-1])&&y>b;)y--;y=this.correctCaretPosition(i,y,"left")}}else for(;!m.test(i[y])&&y<O;)y++;(y!==e||e<b||e>O)&&(t.preventDefault(),this.setPatchedCaretPosition(n,y,i)),t.isUnitTestRun&&this.setPatchedCaretPosition(n,y,i),d(t)}else d(t)},e.prototype.onMouseUp=function(t){var e=t.target,n=e.selectionStart,o=e.selectionEnd,r=e.value;if(void 0===r&&(r=""),n===o){var a=this.correctCaretPosition(r,n);a!==n&&this.setPatchedCaretPosition(e,a,r)}this.props.onMouseUp(t)},e.prototype.onFocus=function(t){var e=this;t.persist(),this.focusedElm=t.target,this.focusTimeout=setTimeout((function(){var n=t.target,o=n.selectionStart,r=n.selectionEnd,a=n.value;void 0===a&&(a="");var i=e.correctCaretPosition(a,o);i===o||0===o&&r===a.length||e.setPatchedCaretPosition(n,i,a),e.props.onFocus(t)}),0)},e.prototype.render=function(){var t=this.props,e=t.type,n=t.displayType,o=t.customInput,a=t.renderText,i=t.getInputRef,s=t.format,u=(t.thousandSeparator,t.decimalSeparator,t.allowedDecimalSeparators,t.thousandsGroupStyle,t.decimalScale,t.fixedDecimalScale,t.prefix,t.suffix,t.removeFormatting,t.mask,t.defaultValue,t.isNumericString,t.allowNegative,t.allowEmptyFormatting,t.allowLeadingZeros,t.onValueChange,t.isAllowed,t.customNumerals,t.onChange,t.onKeyDown,t.onMouseUp,t.onFocus,t.onBlur,t.value,function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(n[o]=t[o]);return n}(t,["type","displayType","customInput","renderText","getInputRef","format","thousandSeparator","decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","decimalScale","fixedDecimalScale","prefix","suffix","removeFormatting","mask","defaultValue","isNumericString","allowNegative","allowEmptyFormatting","allowLeadingZeros","onValueChange","isAllowed","customNumerals","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value"])),c=this.state,l=c.value,f=c.mounted&&function(t){return t||"undefined"!==typeof navigator&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}(s)?"numeric":void 0,p=Object.assign({inputMode:f},u,{type:e,value:l,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===n)return a?a(l,u)||null:r.a.createElement("span",Object.assign({},u,{ref:i}),l);if(o){var d=o;return r.a.createElement(d,Object.assign({},p,{ref:i}))}return r.a.createElement("input",Object.assign({},p,{ref:i}))},e}(r.a.Component);h.defaultProps=m,e.a=h},127:function(t,e,n){},129:function(t,e,n){"use strict";n.d(e,"a",(function(){return P})),n.d(e,"b",(function(){return H}));var o=n(0),r=n.n(o),a=n(15),i=n(24);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function u(t){return"number"===typeof t&&!isNaN(t)}function c(t){return"boolean"===typeof t}function l(t){return"string"===typeof t}function f(t){return"function"===typeof t}function p(t){return l(t)||f(t)?t:null}function d(t){return 0===t||t}var g=!("undefined"===typeof window||!window.document||!window.document.createElement);function m(t){return Object(o.isValidElement)(t)||l(t)||f(t)||u(t)}var h={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},v={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function y(t){var e=t.enter,n=t.exit,a=t.appendPosition,i=void 0!==a&&a,s=t.collapse,u=void 0===s||s,c=t.collapseDuration,l=void 0===c?300:c;return function(t){var a=t.children,s=t.position,c=t.preventExitTransition,f=t.done,p=t.nodeRef,d=t.isIn,g=i?e+"--"+s:e,m=i?n+"--"+s:n,h=Object(o.useRef)(),v=Object(o.useRef)(0);function y(){var t=p.current;t.removeEventListener("animationend",y),0===v.current&&(t.className=h.current)}function b(){var t=p.current;t.removeEventListener("animationend",b),u?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)}))}))}(t,f,l):f()}return Object(o.useLayoutEffect)((function(){!function(){var t=p.current;h.current=t.className,t.className+=" "+g,t.addEventListener("animationend",y)}()}),[]),Object(o.useEffect)((function(){d||(c?b():function(){v.current=1;var t=p.current;t.className+=" "+m,t.addEventListener("animationend",b)}())}),[d]),r.a.createElement(r.a.Fragment,null,a)}}var b={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(t)&&this.list.get(t).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(r)}))}};function O(t,e){void 0===e&&(e=!1);var n=Object(o.useRef)(t);return Object(o.useEffect)((function(){e&&(n.current=t)})),n.current}function S(t,e){switch(e.type){case 0:return[].concat(t,[e.toastId]).filter((function(t){return t!==e.staleId}));case 1:return d(e.toastId)?t.filter((function(t){return t!==e.toastId})):[]}}function T(t){var e=Object(o.useReducer)((function(t){return t+1}),0)[1],n=Object(o.useReducer)(S,[]),r=n[0],a=n[1],i=Object(o.useRef)(null),s=O(0),g=O([]),h=O({}),v=O({toastKey:1,displayedToast:0,props:t,containerId:null,isToastActive:y,getToast:function(t){return h[t]||null}});function y(t){return-1!==r.indexOf(t)}function T(t){var e=t.containerId;!v.props.limit||e&&v.containerId!==e||(s-=g.length,g=[])}function E(t){a({type:1,toastId:t})}function x(){var t=g.shift();w(t.toastContent,t.toastProps,t.staleId)}function C(t,n){var r=n.delay,a=n.staleId,y=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(n,["delay","staleId"]);if(m(t)&&!function(t){var e=t.containerId,n=t.toastId,o=t.updateId;return!!(!i.current||v.props.enableMultiContainer&&e!==v.props.containerId||h[n]&&null==o)}(y)){var b=y.toastId,O=y.updateId,S=v.props,T=function(){return E(b)},C=null==y.updateId;C&&s++;var I,N,j={toastId:b,updateId:O,isIn:!1,key:y.key||v.toastKey++,type:y.type,closeToast:T,closeButton:y.closeButton,rtl:S.rtl,position:y.position||S.position,transition:y.transition||S.transition,className:p(y.className||S.toastClassName),bodyClassName:p(y.bodyClassName||S.bodyClassName),style:y.style||S.toastStyle,bodyStyle:y.bodyStyle||S.bodyStyle,onClick:y.onClick||S.onClick,pauseOnHover:c(y.pauseOnHover)?y.pauseOnHover:S.pauseOnHover,pauseOnFocusLoss:c(y.pauseOnFocusLoss)?y.pauseOnFocusLoss:S.pauseOnFocusLoss,draggable:c(y.draggable)?y.draggable:S.draggable,draggablePercent:u(y.draggablePercent)?y.draggablePercent:S.draggablePercent,draggableDirection:y.draggableDirection||S.draggableDirection,closeOnClick:c(y.closeOnClick)?y.closeOnClick:S.closeOnClick,progressClassName:p(y.progressClassName||S.progressClassName),progressStyle:y.progressStyle||S.progressStyle,autoClose:(I=y.autoClose,N=S.autoClose,!1===I||u(I)&&I>0?I:N),hideProgressBar:c(y.hideProgressBar)?y.hideProgressBar:S.hideProgressBar,progress:y.progress,role:l(y.role)?y.role:S.role,deleteToast:function(){!function(t){delete h[t];var n=g.length;(s=d(t)?s-1:s-v.displayedToast)<0&&(s=0);if(n>0){var o=d(t)?1:v.props.limit;if(1===n||1===o)v.displayedToast++,x();else{var r=o>n?n:o;v.displayedToast=r;for(var a=0;a<r;a++)x()}}else e()}(b)}};f(y.onOpen)&&(j.onOpen=y.onOpen),f(y.onClose)&&(j.onClose=y.onClose),"y"===j.draggableDirection&&80===j.draggablePercent&&(j.draggablePercent*=1.5);var P=S.closeButton;!1===y.closeButton||m(y.closeButton)?P=y.closeButton:!0===y.closeButton&&(P=!m(S.closeButton)||S.closeButton),j.closeButton=P;var D=t;Object(o.isValidElement)(t)&&!l(t.type)?D=Object(o.cloneElement)(t,{closeToast:T,toastProps:j}):f(t)&&(D=t({closeToast:T,toastProps:j})),S.limit&&S.limit>0&&s>S.limit&&C?g.push({toastContent:D,toastProps:j,staleId:a}):u(r)&&r>0?setTimeout((function(){w(D,j,a)}),r):w(D,j,a)}}function w(t,e,n){var o=e.toastId;n&&delete h[n],h[o]={content:t,props:e},a({type:0,toastId:o,staleId:n})}return Object(o.useEffect)((function(){return v.containerId=t.containerId,b.cancelEmit(3).on(0,C).on(1,(function(t){return i.current&&E(t)})).on(5,T).emit(2,v),function(){return b.emit(3,v)}}),[]),Object(o.useEffect)((function(){v.isToastActive=y,v.displayedToast=r.length,b.emit(4,r.length,t.containerId)}),[r]),Object(o.useEffect)((function(){v.props=t})),{getToastToRender:function(e){for(var n={},o=t.newestOnTop?Object.keys(h).reverse():Object.keys(h),r=0;r<o.length;r++){var a=h[o[r]],i=a.props.position;n[i]||(n[i]=[]),n[i].push(a)}return Object.keys(n).map((function(t){return e(t,n[t])}))},collection:h,containerRef:i,isToastActive:y}}function E(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function x(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function C(t){var e=Object(o.useState)(!0),n=e[0],r=e[1],a=Object(o.useState)(!1),i=a[0],s=a[1],u=Object(o.useRef)(null),c=O({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),l=O(t,!0),p=t.autoClose,d=t.pauseOnHover,g=t.closeToast,m=t.onClick,h=t.closeOnClick;function v(e){if(t.draggable){var n=u.current;c.canCloseOnClick=!0,c.canDrag=!0,c.boundingRect=n.getBoundingClientRect(),n.style.transition="",c.x=E(e.nativeEvent),c.y=x(e.nativeEvent),"x"===t.draggableDirection?(c.start=c.x,c.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(c.start=c.y,c.removalDistance=n.offsetHeight*(t.draggablePercent/100))}}function y(){if(c.boundingRect){var e=c.boundingRect,n=e.top,o=e.bottom,r=e.left,a=e.right;t.pauseOnHover&&c.x>=r&&c.x<=a&&c.y>=n&&c.y<=o?S():b()}}function b(){r(!0)}function S(){r(!1)}function T(e){if(c.canDrag){e.preventDefault();var o=u.current;n&&S(),c.x=E(e),c.y=x(e),"x"===t.draggableDirection?c.delta=c.x-c.start:c.delta=c.y-c.start,c.start!==c.x&&(c.canCloseOnClick=!1),o.style.transform="translate"+t.draggableDirection+"("+c.delta+"px)",o.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance))}}function C(){var e=u.current;if(c.canDrag){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return s(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate"+t.draggableDirection+"(0)",e.style.opacity="1"}}Object(o.useEffect)((function(){return f(t.onOpen)&&t.onOpen(Object(o.isValidElement)(t.children)&&t.children.props),function(){f(l.onClose)&&l.onClose(Object(o.isValidElement)(l.children)&&l.children.props)}}),[]),Object(o.useEffect)((function(){return t.draggable&&(document.addEventListener("mousemove",T),document.addEventListener("mouseup",C),document.addEventListener("touchmove",T),document.addEventListener("touchend",C)),function(){t.draggable&&(document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",C))}}),[t.draggable]),Object(o.useEffect)((function(){return t.pauseOnFocusLoss&&function(){document.hasFocus()||S();window.addEventListener("focus",b),window.addEventListener("blur",S)}(),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",S))}}),[t.pauseOnFocusLoss]);var w={onMouseDown:v,onTouchStart:v,onMouseUp:y,onTouchEnd:y};return p&&d&&(w.onMouseEnter=S,w.onMouseLeave=b),h&&(w.onClick=function(t){m&&m(t),c.canCloseOnClick&&g()}),{playToast:b,pauseToast:S,isRunning:n,preventExitTransition:i,toastRef:u,eventHandlers:w}}function w(t){var e=t.closeToast,n=t.type,r=t.ariaLabel,a=void 0===r?"close":r;return Object(o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":a},Object(o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function I(t){var e,n,r=t.delay,i=t.isRunning,u=t.closeToast,c=t.type,l=t.hide,p=t.className,d=t.style,g=t.controlledProgress,m=t.progress,h=t.rtl,v=t.isIn,y=s({},d,{animationDuration:r+"ms",animationPlayState:i?"running":"paused",opacity:l?0:1});g&&(y.transform="scaleX("+m+")");var b=Object(a.a)("Toastify__progress-bar",g?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+c,((e={})["Toastify__progress-bar--rtl"]=h,e)),O=f(p)?p({rtl:h,type:c,defaultClassName:b}):Object(a.a)(b,p),S=((n={})[g&&m>=1?"onTransitionEnd":"onAnimationEnd"]=g&&m<1?null:function(){v&&u()},n);return Object(o.createElement)("div",Object.assign({role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:O,style:y},S))}I.defaultProps={type:v.DEFAULT,hide:!1};var N=function(t){var e,n=C(t),r=n.isRunning,i=n.preventExitTransition,s=n.toastRef,u=n.eventHandlers,c=t.closeButton,l=t.children,p=t.autoClose,d=t.onClick,g=t.type,m=t.hideProgressBar,h=t.closeToast,v=t.transition,y=t.position,b=t.className,O=t.style,S=t.bodyClassName,T=t.bodyStyle,E=t.progressClassName,x=t.progressStyle,w=t.updateId,N=t.role,j=t.progress,P=t.rtl,D=t.toastId,R=t.deleteToast,F=t.isIn,A=Object(a.a)("Toastify__toast","Toastify__toast--"+g,((e={})["Toastify__toast--rtl"]=P,e)),k=f(b)?b({rtl:P,position:y,type:g,defaultClassName:A}):Object(a.a)(A,b),_=!!j;return Object(o.createElement)(v,{isIn:F,done:R,position:y,preventExitTransition:i,nodeRef:s},Object(o.createElement)("div",Object.assign({id:D,onClick:d,className:k},u,{style:O,ref:s}),Object(o.createElement)("div",Object.assign({},F&&{role:N},{className:f(S)?S({type:g}):Object(a.a)("Toastify__toast-body",S),style:T}),l),function(t){if(t){var e={closeToast:h,type:g};return f(t)?t(e):Object(o.isValidElement)(t)?Object(o.cloneElement)(t,e):void 0}}(c),(p||_)&&Object(o.createElement)(I,Object.assign({},w&&!_?{key:"pb-"+w}:{},{rtl:P,delay:p,isRunning:r,isIn:F,closeToast:h,hide:m,type:g,style:x,className:E,controlledProgress:_,progress:j}))))},j=y({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),P=function(t){var e=T(t),n=e.getToastToRender,r=e.containerRef,i=e.isToastActive,u=t.className,c=t.style,l=t.rtl,d=t.containerId;function g(t){var e,n=Object(a.a)("Toastify__toast-container","Toastify__toast-container--"+t,((e={})["Toastify__toast-container--rtl"]=l,e));return f(u)?u({position:t,rtl:l,defaultClassName:n}):Object(a.a)(n,p(u))}return Object(o.createElement)("div",{ref:r,className:"Toastify",id:d},n((function(t,e){var n=0===e.length?s({},c,{pointerEvents:"none"}):s({},c);return Object(o.createElement)("div",{className:g(t),style:n,key:"container-"+t},e.map((function(t){var e=t.content,n=t.props;return Object(o.createElement)(N,Object.assign({},n,{isIn:i(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?w:n.closeButton}),e)})))})))};P.defaultProps={position:h.TOP_RIGHT,transition:j,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:w,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert"};var D,R,F,A=new Map,k=[],_=!1;function L(){return Math.random().toString(36).substr(2,9)}function B(t){return t&&(l(t.toastId)||u(t.toastId))?t.toastId:L()}function V(t,e){return A.size>0?b.emit(0,t,e):(k.push({content:t,options:e}),_&&g&&(_=!1,R=document.createElement("div"),document.body.appendChild(R),Object(i.render)(Object(o.createElement)(P,Object.assign({},F)),R))),e.toastId}function M(t,e){return s({},e,{type:e&&e.type||t,toastId:B(e)})}var U=function(t){return function(e,n){return V(e,M(t,n))}},H=function(t,e){return V(t,M(v.DEFAULT,e))};H.success=U(v.SUCCESS),H.info=U(v.INFO),H.error=U(v.ERROR),H.warning=U(v.WARNING),H.dark=U(v.DARK),H.warn=H.warning,H.dismiss=function(t){return b.emit(1,t)},H.clearWaitingQueue=function(t){return void 0===t&&(t={}),b.emit(5,t)},H.isActive=function(t){var e=!1;return A.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},H.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=A.get(n||D);return o?o.getToast(t):null}(t,e);if(n){var o=n.props,r=n.content,a=s({},o,e,{toastId:e.toastId||t,updateId:L()});a.toastId!==t&&(a.staleId=t);var i=a.render||r;delete a.render,V(i,a)}}),0)},H.done=function(t){H.update(t,{progress:1})},H.onChange=function(t){return f(t)&&b.on(4,t),function(){f(t)&&b.off(4,t)}},H.configure=function(t){void 0===t&&(t={}),_=!0,F=t},H.POSITION=h,H.TYPE=v,b.on(2,(function(t){D=t.containerId||t,A.set(D,t),k.forEach((function(t){b.emit(0,t.content,t.options)})),k=[]})).on(3,(function(t){A.delete(t.containerId||t),0===A.size&&b.off(0).off(1).off(5),g&&R&&document.body.removeChild(R)}))}}]);
//# sourceMappingURL=6.2ecf9f96.chunk.js.map