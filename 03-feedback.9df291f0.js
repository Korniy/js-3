var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,u=f||a||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return u.Date.now()};function m(e,t,n){var o,r,i,f,a,u,c=0,m=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function S(e){return c=e,a=setTimeout(O,t),m?y(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-c>=i}function O(){var e=d();if(j(e))return T(e);a=setTimeout(O,function(e){var n=t-(e-u);return p?s(n,i-(e-c)):n}(e))}function T(e){return a=void 0,g&&o?y(e):(o=r=void 0,f)}function h(){var e=d(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return S(u);if(p)return a=setTimeout(O,t),y(u)}return void 0===a&&(a=setTimeout(O,t)),f}return t=b(t)||0,v(n)&&(m=!!n.leading,i=(p="maxWait"in n)?l(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},h.flush=function(){return void 0===a?f:T(d())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var f="function"==typeof e.valueOf?e.valueOf():e;e=v(f)?f+"":f}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var a=o.test(e);return a||r.test(e)?i(e.slice(2),a?2:8):n.test(e)?NaN:+e}const p=document.querySelector(".feedback-form"),g=document.querySelector(".feedback-form input"),y=document.querySelector(".feedback-form textarea"),S={};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(g.value=t.email||"",y.value=t.message||"")}(),p.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")})),p.addEventListener("input",(function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}));
//# sourceMappingURL=03-feedback.9df291f0.js.map
