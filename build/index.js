!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var n="object"==typeof exports?t(require("react")):t(e.React);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodePropTypes=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(9));t.NodePropTypes={node:o.default.shape({type:o.default.string.isRequired,text:o.default.string,nodes:o.default.array}),config:o.default.objectOf(o.default.oneOfType([o.default.string,o.default.element]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Node=c;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),r=n(8),u=n(4),i=n(5),f=n(1);function c(e){var t=e.node,n=e.config;return(0,i.isLeafNode)(t)?o.default.createElement(r.LeafNode,{node:t,config:n}):o.default.createElement(u.ContainerNode,{node:t,config:n})}c.propTypes=f.NodePropTypes},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getComponent=function(e,t){if(t in e)return e[t];return function(e){var t=e.children;return o.default.createElement("div",{className:"type-not-present-in-config"},t)}};var o=function(e){return e&&e.__esModule?e:{default:e}}(n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ContainerNode=f;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),r=n(3),u=n(2),i=n(1);function f(e){var t=e.node,n=e.config,i=(0,r.getComponent)(n,t.type);return o.default.createElement(i,null,t.nodes.map(function(e,t){return o.default.createElement(u.Node,{node:e,config:n,key:t})}))}f.propTypes=i.NodePropTypes},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isLeafNode=function(e){return Boolean(e.text)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalize=t.JsonToHtml=void 0;var o=n(7),r=n(12);t.JsonToHtml=o.JsonToHtml,t.normalize=r.normalize},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JsonToHtml=function(e){var t=e.document,n=e.config;return o.default.createElement(r.Node,{node:t,config:n})};var o=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),r=n(2),u=n(4),i=n(1);u.ContainerNode.propTypes={document:i.NodePropTypes.node,config:i.NodePropTypes.config}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LeafNode=i;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),r=n(3),u=n(1);function i(e){var t=e.node,n=e.config,u=(0,r.getComponent)(n,t.type);return o.default.createElement(u,null,t.text)}i.propTypes=u.NodePropTypes},function(e,t,n){e.exports=n(10)()},function(e,t,n){"use strict";var o=n(11);function r(){}e.exports=function(){function e(e,t,n,r,u,i){if(i!==o){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.normalize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=u(e,t);return void 0===n?{}:n};var r=n(5);function u(e,t){var n=(0,r.isLeafNode)(e)?e:o({},e,{nodes:function(e,t){return e.map(function(e){return u(e,t)}).filter(function(e){return void 0!==e})}(e.nodes,t)});if(function(e,t){if(Boolean(e.text)&&Boolean(e.nodes))return!1;return t.every(function(t){return!t(e)})}(n,t))return n}}])});