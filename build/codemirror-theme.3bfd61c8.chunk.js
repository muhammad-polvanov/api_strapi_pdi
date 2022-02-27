"use strict";(self.webpackChunkielts=self.webpackChunkielts||[]).push([[2218],{22887:(r,e,o)=>{o.d(e,{Z:()=>s});var n=o(8081),c=o.n(n),a=o(23645),t=o.n(a)()(c());t.push([r.id,"/* Port of TextMate's Blackboard theme */\n\n.cm-s-blackboard.CodeMirror { background: #0C1021; color: #F8F8F8; }\n.cm-s-blackboard div.CodeMirror-selected { background: #253B76; }\n.cm-s-blackboard .CodeMirror-line::selection, .cm-s-blackboard .CodeMirror-line > span::selection, .cm-s-blackboard .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-line::-moz-selection, .cm-s-blackboard .CodeMirror-line > span::-moz-selection, .cm-s-blackboard .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-gutters { background: #0C1021; border-right: 0; }\n.cm-s-blackboard .CodeMirror-guttermarker { color: #FBDE2D; }\n.cm-s-blackboard .CodeMirror-guttermarker-subtle { color: #888; }\n.cm-s-blackboard .CodeMirror-linenumber { color: #888; }\n.cm-s-blackboard .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }\n\n.cm-s-blackboard .cm-keyword { color: #FBDE2D; }\n.cm-s-blackboard .cm-atom { color: #D8FA3C; }\n.cm-s-blackboard .cm-number { color: #D8FA3C; }\n.cm-s-blackboard .cm-def { color: #8DA6CE; }\n.cm-s-blackboard .cm-variable { color: #FF6400; }\n.cm-s-blackboard .cm-operator { color: #FBDE2D; }\n.cm-s-blackboard .cm-comment { color: #AEAEAE; }\n.cm-s-blackboard .cm-string { color: #61CE3C; }\n.cm-s-blackboard .cm-string-2 { color: #61CE3C; }\n.cm-s-blackboard .cm-meta { color: #D8FA3C; }\n.cm-s-blackboard .cm-builtin { color: #8DA6CE; }\n.cm-s-blackboard .cm-tag { color: #8DA6CE; }\n.cm-s-blackboard .cm-attribute { color: #8DA6CE; }\n.cm-s-blackboard .cm-header { color: #FF6400; }\n.cm-s-blackboard .cm-hr { color: #AEAEAE; }\n.cm-s-blackboard .cm-link { color: #8DA6CE; }\n.cm-s-blackboard .cm-error { background: #9D1E15; color: #F8F8F8; }\n\n.cm-s-blackboard .CodeMirror-activeline-background { background: #3C3636; }\n.cm-s-blackboard .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n",""]);const s=t},23645:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var o="",n="undefined"!==typeof e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=r(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(r,o,n,c,a){"string"===typeof r&&(r=[[null,r,void 0]]);var t={};if(n)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(t[i]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);n&&t[d[0]]||("undefined"!==typeof a&&("undefined"===typeof d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),c&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=c):d[4]="".concat(c)),e.push(d))}},e}},8081:r=>{r.exports=function(r){return r[1]}},69039:(r,e,o)=>{o.r(e),o.d(e,{default:()=>v});var n=o(93379),c=o.n(n),a=o(7795),t=o.n(a),s=o(90569),i=o.n(s),l=o(3565),d=o.n(l),u=o(19216),b=o.n(u),m=o(44589),p=o.n(m),f=o(22887),k={};k.styleTagTransform=p(),k.setAttributes=d(),k.insert=i().bind(null,"head"),k.domAPI=t(),k.insertStyleElement=b();c()(f.Z,k);const v=f.Z&&f.Z.locals?f.Z.locals:void 0},93379:r=>{var e=[];function o(r){for(var o=-1,n=0;n<e.length;n++)if(e[n].identifier===r){o=n;break}return o}function n(r,n){for(var a={},t=[],s=0;s<r.length;s++){var i=r[s],l=n.base?i[0]+n.base:i[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var b=o(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==b)e[b].references++,e[b].updater(m);else{var p=c(m,n);n.byIndex=s,e.splice(s,0,{identifier:u,updater:p,references:1})}t.push(u)}return t}function c(r,e){var o=e.domAPI(e);o.update(r);return function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;o.update(r=e)}else o.remove()}}r.exports=function(r,c){var a=n(r=r||[],c=c||{});return function(r){r=r||[];for(var t=0;t<a.length;t++){var s=o(a[t]);e[s].references--}for(var i=n(r,c),l=0;l<a.length;l++){var d=o(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=i}}},90569:r=>{var e={};r.exports=function(r,o){var n=function(r){if("undefined"===typeof e[r]){var o=document.querySelector(r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[r]=o}return e[r]}(r);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},19216:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},3565:(r,e,o)=>{r.exports=function(r){var e=o.nc;e&&r.setAttribute("nonce",e)}},7795:r=>{r.exports=function(r){var e=r.insertStyleElement(r);return{update:function(o){!function(r,e,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var c="undefined"!==typeof o.layer;c&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,c&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var a=o.sourceMap;a&&"undefined"!==typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,r,e.options)}(e,r,o)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},44589:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}}]);