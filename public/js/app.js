!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function u(e){try{s(o.next(e))}catch(e){c(e)}}function i(e){try{s(o.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,i)}s((o=o.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,o,r,c,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,o=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(r=u.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){u.label=c[1];break}if(6===c[0]&&u.label<r[1]){u.label=r[1],r=c;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(c);break}r[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(e,u)}catch(e){c=[6,e],o=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};Object.defineProperty(t,"__esModule",{value:!0}),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return console.log(e)})),o(void 0,void 0,void 0,(function(){var e;return r(this,(function(t){switch(t.label){case 0:return[4,fetch("https://jsonplaceholder.typicode.com/posts")];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),console.log(e),[2]}}))})),fetch("https://jsonplaceholder.typicode.com/pos").then((function(e){if(console.log("Status code: "+e.status),e.status>=200&&e.status<300)return e.json();throw new Error("Error in the fetch request")})).then((function(e){return console.log(e)})).catch((function(e){return console.error("[Fetch error]:",e.message)}));var c={userId:1,_limit:3},u=new URL("https://jsonplaceholder.typicode.com/posts");Object.keys(c).forEach((function(e){u.searchParams.append(e,c[e])})),console.log(u),fetch(u.href).then((function(e){return e.json()})).then((function(e){return console.log(e)}));fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({userId:1,title:"foo",body:"bar"}),headers:{"Content-type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicG9zdHMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInN0YXR1cyIsIkVycm9yIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJxdWVyeVBhcmFtcyIsInVzZXJJZCIsIl9saW1pdCIsInVybCIsIlVSTCIsImtleXMiLCJmb3JFYWNoIiwicGFyYW1LZXkiLCJzZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJocmVmIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInRpdGxlIiwiaGVhZGVycyIsIkFjY2VwdCIsInBvc3QiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFP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R1Q3QixNQUFLLFNBQUNDLEdBQXVCLE9BQUFBLEVBQVNDLFVBQ3RDRixNQUFLLFNBQUM4QixHQUFlLE9BQUExQixRQUFRQyxJQUFJeUIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGludGVyZmFjZSBQb3N0IHtcbiAgdXNlcklkOiBudW1iZXI7XG4gIGlkPzogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG59XG5cbmZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxuICAudGhlbigocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpIC8vIHJlc3BvbnNlOiBVaW50OEFycmF5XG4gIC50aGVuKChwb3N0czogQXJyYXk8UG9zdD4pID0+IGNvbnNvbGUubG9nKHBvc3RzKSk7XG5cbihhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnXG4gICk7XG4gIGNvbnN0IGJvZHk6IEFycmF5PFBvc3Q+ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyhib2R5KTtcbn0pKCk7XG5cbi8vIEhhbmRsZSBlcnJvclxuZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3MnKVxuICAudGhlbigocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFN0YXR1cyBjb2RlOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgaW4gdGhlIGZldGNoIHJlcXVlc3QnKTtcbiAgICB9XG4gIH0pIC8vIHJlc3BvbnNlOiBVaW50OEFycmF5XG4gIC50aGVuKChwb3N0czogQXJyYXk8UG9zdD4pID0+IGNvbnNvbGUubG9nKHBvc3RzKSlcbiAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdbRmV0Y2ggZXJyb3JdOicsIGVyci5tZXNzYWdlKSk7XG5cbi8vIFF1ZXJ5IHBhcmFtc1xuLy8gUmVhZCBtb3JlIG9uOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jZmV0Y2gtYXBpXG5jb25zdCBxdWVyeVBhcmFtcyA9IHtcbiAgdXNlcklkOiAxLFxuICBfbGltaXQ6IDMsXG59O1xuY29uc3QgdXJsOiBVUkwgPSBuZXcgVVJMKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKTtcbk9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChwYXJhbUtleTogc3RyaW5nKSA9PiB7XG4gIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKHBhcmFtS2V5LCBxdWVyeVBhcmFtc1twYXJhbUtleV0pO1xufSk7XG5jb25zb2xlLmxvZyh1cmwpO1xuZmV0Y2godXJsLmhyZWYpXG4gIC50aGVuKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gcmVzcG9uc2U6IFVpbnQ4QXJyYXlcbiAgLnRoZW4oKHBvc3RzOiBBcnJheTxQb3N0PikgPT4gY29uc29sZS5sb2cocG9zdHMpKTtcblxuLy8gSFRUUCAtIE1ldGhvZHNcbi8vIFJlYWQgbW9yZSBvbjogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZXMvZG9jcy9XZWIvSFRUUC9NZXRob2RzXG5cbi8vIFBPU1RcbmNvbnN0IHBvc3Q6IFBvc3QgPSB7XG4gIHVzZXJJZDogMSxcbiAgdGl0bGU6ICdmb28nLFxuICBib2R5OiAnYmFyJyxcbn07XG5mZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJywge1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdCksXG4gIGhlYWRlcnM6IHtcbiAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICB9LFxufSlcbiAgLnRoZW4oKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSAvLyByZXNwb25zZTogVWludDhBcnJheVxuICAudGhlbigocG9zdDogUG9zdCkgPT4gY29uc29sZS5sb2cocG9zdCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==