"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8523],{58363:function(e,t){t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some(function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t})}return!0}},8523:function(e,t,n){n.d(t,{uI:function(){return et}});var r=n(67294),o=n(45697),i=n.n(o);function a(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,c)}u((r=r.apply(e,t||[])).next())})}function c(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function l(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}var s=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function f(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=s.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var p=[".DS_Store","Thumbs.db"];function d(e){return"object"==typeof e&&null!==e}function v(e){return e.filter(function(e){return -1===p.indexOf(e.name)})}function m(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function g(e){if("function"!=typeof e.webkitGetAsEntry)return y(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?h(t):y(e)}function y(e){var t=e.getAsFile();return t?Promise.resolve(f(t)):Promise.reject("".concat(e," is not a File"))}function b(e){return a(this,void 0,void 0,function(){return c(this,function(t){return[2,e.isDirectory?h(e):function(e){return a(this,void 0,void 0,function(){return c(this,function(t){return[2,new Promise(function(t,n){e.file(function(n){t(f(n,e.fullPath))},function(e){n(e)})})]})})}(e)]})})}function h(e){var t=e.createReader();return new Promise(function(e,n){var r=[];!function o(){var i=this;t.readEntries(function(t){return a(i,void 0,void 0,function(){var i;return c(this,function(a){switch(a.label){case 0:if(t.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return e(a.sent()),[3,4];case 3:return n(a.sent()),[3,4];case 4:return[3,6];case 5:i=Promise.all(t.map(b)),r.push(i),o(),a.label=6;case 6:return[2]}})})},function(e){n(e)})}()})}var w=n(58363);function D(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||E(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(t){j(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||E(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var k=function(e){var t=Array.isArray(e=Array.isArray(e)&&1===e.length?e[0]:e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},S=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},P=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},C={code:"too-many-files",message:"Too many files"};function z(e,t){var n="application/x-moz-file"===e.type||(0,w.Z)(e,t);return[n,n?null:k(t)]}function R(e,t,n){if(I(e.size)){if(I(t)&&I(n)){if(e.size>n)return[!1,S(n)];if(e.size<t)return[!1,P(t)]}else if(I(t)&&e.size<t)return[!1,P(t)];else if(I(n)&&e.size>n)return[!1,S(n)]}return[!0,null]}function I(e){return null!=e}function T(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function M(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(e){return"Files"===e||"application/x-moz-file"===e}):!!e.target&&!!e.target.files}function L(e){e.preventDefault()}function _(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some(function(t){return!T(e)&&t&&t.apply(void 0,[e].concat(r)),T(e)})}}function B(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function K(e){return/^.*\.[\w]+$/.test(e)}var U=["children"],$=["open"],N=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],W=["refKey","onChange","onClick"];function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||H(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach(function(t){J(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var V=(0,r.forwardRef)(function(e,t){var n=e.children,o=et(Q(e,U)),i=o.open,a=Q(o,$);return(0,r.useImperativeHandle)(t,function(){return{open:i}},[i]),r.createElement(r.Fragment,null,n(Y(Y({},a),{},{open:i})))});V.displayName="Dropzone";var X={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,function(){return c(this,function(t){return d(e)&&d(e.dataTransfer)?[2,function(e,t){return a(this,void 0,void 0,function(){var n;return c(this,function(r){switch(r.label){case 0:if(!e.items)return[3,2];if(n=m(e.items).filter(function(e){return"file"===e.kind}),"drop"!==t)return[2,n];return[4,Promise.all(n.map(g))];case 1:return[2,v(function e(t){return t.reduce(function(t,n){return l(l([],u(t),!1),u(Array.isArray(n)?e(n):[n]),!1)},[])}(r.sent()))];case 2:return[2,v(m(e.files).map(function(e){return f(e)}))]}})})}(e.dataTransfer,e.type)]:d(e)&&d(e.target)?[2,m(e.target.files).map(function(e){return f(e)})]:Array.isArray(e)&&e.every(function(e){return"getFile"in e&&"function"==typeof e.getFile})?[2,function(e){return a(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(e){return e.getFile()}))];case 1:return[2,t.sent().map(function(e){return f(e)})]}})})}(e)]:[2,[]]})})},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};V.defaultProps=X,V.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var ee={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function et(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Y(Y({},X),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,u=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,v=t.onDropAccepted,m=t.onDropRejected,g=t.onFileDialogCancel,y=t.onFileDialogOpen,b=t.useFsAccessApi,h=t.autoFocus,w=t.preventDropOnDocument,x=t.noClick,E=t.noKeyboard,F=t.noDrag,k=t.noDragEventsBubbling,S=t.onError,P=t.validator,U=(0,r.useMemo)(function(){return function(e){if(I(e))return Object.entries(e).reduce(function(e,t){var n=A(t,2),r=n[0],o=n[1];return[].concat(D(e),[r],D(o))},[]).filter(function(e){return B(e)||K(e)}).join(",")}(n)},[n]),$=(0,r.useMemo)(function(){return I(n)?[{description:"Files",accept:Object.entries(n).filter(function(e){var t=A(e,2),n=t[0],r=t[1],o=!0;return B(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(K)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(e,t){var n=A(t,2),r=n[0],o=n[1];return O(O({},e),{},j({},r,o))},{})}]:n},[n]),Z=(0,r.useMemo)(function(){return"function"==typeof y?y:er},[y]),V=(0,r.useMemo)(function(){return"function"==typeof g?g:er},[g]),et=(0,r.useRef)(null),eo=(0,r.useRef)(null),ei=G((0,r.useReducer)(en,ee),2),ea=ei[0],ec=ei[1],eu=ea.isFocused,el=ea.isFileDialogActive,es=(0,r.useRef)("undefined"!=typeof window&&window.isSecureContext&&b&&"showOpenFilePicker"in window),ef=function(){!es.current&&el&&setTimeout(function(){eo.current&&!eo.current.files.length&&(ec({type:"closeDialog"}),V())},300)};(0,r.useEffect)(function(){return window.addEventListener("focus",ef,!1),function(){window.removeEventListener("focus",ef,!1)}},[eo,el,V,es]);var ep=(0,r.useRef)([]),ed=function(e){et.current&&et.current.contains(e.target)||(e.preventDefault(),ep.current=[])};(0,r.useEffect)(function(){return w&&(document.addEventListener("dragover",L,!1),document.addEventListener("drop",ed,!1)),function(){w&&(document.removeEventListener("dragover",L),document.removeEventListener("drop",ed))}},[et,w]),(0,r.useEffect)(function(){return!o&&h&&et.current&&et.current.focus(),function(){}},[et,h,o]);var ev=(0,r.useCallback)(function(e){S?S(e):console.error(e)},[S]),em=(0,r.useCallback)(function(e){var t;e.preventDefault(),e.persist(),ek(e),ep.current=[].concat(function(e){if(Array.isArray(e))return q(e)}(t=ep.current)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||H(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.target]),M(e)&&Promise.resolve(i(e)).then(function(t){if(!T(e)||k){var n,r,o,i,f,p,d,v,m=t.length,g=m>0&&(r=(n={files:t,accept:U,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:P}).files,o=n.accept,i=n.minSize,f=n.maxSize,p=n.multiple,d=n.maxFiles,v=n.validator,(!!p||!(r.length>1))&&(!p||!(d>=1)||!(r.length>d))&&r.every(function(e){var t=A(z(e,o),1)[0],n=A(R(e,i,f),1)[0],r=v?v(e):null;return t&&n&&!r}));ec({isDragAccept:g,isDragReject:m>0&&!g,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}}).catch(function(e){return ev(e)})},[i,s,ev,k,U,c,a,u,l,P]),eg=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),ek(e);var t=M(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&p&&p(e),!1},[p,k]),ey=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),ek(e);var t=ep.current.filter(function(e){return et.current&&et.current.contains(e)}),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),ep.current=t,!(t.length>0)&&(ec({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),M(e)&&f&&f(e))},[et,f,k]),eb=(0,r.useCallback)(function(e,t){var n=[],r=[];e.forEach(function(e){var t=G(z(e,U),2),o=t[0],i=t[1],u=G(R(e,c,a),2),l=u[0],s=u[1],f=P?P(e):null;if(o&&l&&!f)n.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter(function(e){return e})})}}),(!u&&n.length>1||u&&l>=1&&n.length>l)&&(n.forEach(function(e){r.push({file:e,errors:[C]})}),n.splice(0)),ec({acceptedFiles:n,fileRejections:r,type:"setFiles"}),d&&d(n,r,t),r.length>0&&m&&m(r,t),n.length>0&&v&&v(n,t)},[ec,u,U,c,a,l,d,v,m,P]),eh=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),ek(e),ep.current=[],M(e)&&Promise.resolve(i(e)).then(function(t){(!T(e)||k)&&eb(t,e)}).catch(function(e){return ev(e)}),ec({type:"reset"})},[i,eb,ev,k]),ew=(0,r.useCallback)(function(){if(es.current){ec({type:"openDialog"}),Z(),window.showOpenFilePicker({multiple:u,types:$}).then(function(e){return i(e)}).then(function(e){eb(e,null),ec({type:"closeDialog"})}).catch(function(e){e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)?(V(e),ec({type:"closeDialog"})):e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)?(es.current=!1,eo.current?(eo.current.value=null,eo.current.click()):ev(Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):ev(e)});return}eo.current&&(ec({type:"openDialog"}),Z(),eo.current.value=null,eo.current.click())},[ec,Z,V,b,eb,ev,$,u]),eD=(0,r.useCallback)(function(e){et.current&&et.current.isEqualNode(e.target)&&(" "===e.key||"Enter"===e.key||32===e.keyCode||13===e.keyCode)&&(e.preventDefault(),ew())},[et,ew]),ex=(0,r.useCallback)(function(){ec({type:"focus"})},[]),eO=(0,r.useCallback)(function(){ec({type:"blur"})},[]),ej=(0,r.useCallback)(function(){x||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return -1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/")}()?setTimeout(ew,0):ew())},[x,ew]),eA=function(e){return o?null:e},eE=function(e){return E?null:eA(e)},eF=function(e){return F?null:eA(e)},ek=function(e){k&&e.stopPropagation()},eS=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.role,r=e.onKeyDown,i=e.onFocus,a=e.onBlur,c=e.onClick,u=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=Q(e,N);return Y(Y(J({onKeyDown:eE(_(r,eD)),onFocus:eE(_(i,ex)),onBlur:eE(_(a,eO)),onClick:eA(_(c,ej)),onDragEnter:eF(_(u,em)),onDragOver:eF(_(l,eg)),onDragLeave:eF(_(s,ey)),onDrop:eF(_(f,eh)),role:"string"==typeof n&&""!==n?n:"presentation"},void 0===t?"ref":t,et),o||E?{}:{tabIndex:0}),p)}},[et,eD,ex,eO,ej,em,eg,ey,eh,E,F,o]),eP=(0,r.useCallback)(function(e){e.stopPropagation()},[]),eC=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.onChange,r=e.onClick,o=Q(e,W);return Y(Y({},J({accept:U,multiple:u,type:"file",style:{display:"none"},onChange:eA(_(n,eh)),onClick:eA(_(r,eP)),tabIndex:-1},void 0===t?"ref":t,eo)),o)}},[eo,n,u,eh,o]);return Y(Y({},ea),{},{isFocused:eu&&!o,getRootProps:eS,getInputProps:eC,rootRef:et,inputRef:eo,open:eA(ew)})}function en(e,t){switch(t.type){case"focus":return Y(Y({},e),{},{isFocused:!0});case"blur":return Y(Y({},e),{},{isFocused:!1});case"openDialog":return Y(Y({},ee),{},{isFileDialogActive:!0});case"closeDialog":return Y(Y({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Y(Y({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return Y(Y({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return Y({},ee);default:return e}}function er(){}}}]);