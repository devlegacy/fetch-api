!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=function(){function t(){this.posts=[]}return t.prototype.start=function(){var t=this;console.log(">> Start app"),(new o.TodoService).getAll().then((function(e){t.posts=e,t.posts.forEach((function(t){console.log(t.id)}))}))},t}();document.addEventListener("DOMContentLoaded",(function(){(new r).start()}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TodoService=void 0;var o=n(2),r=n(3),i=function(){function t(){this.serviceURL=r.ApiConfig.BASE_URL+"/todos/",this.http=new o.HttpClient}return t.prototype.getAll=function(){return this.http.get(this.serviceURL)},t.prototype.find=function(){},t.prototype.create=function(){},t.prototype.update=function(){},t.prototype.destroy=function(){},t}();e.TodoService=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.HttpClient=void 0;var o=function(){function t(){}return t.prototype.get=function(e){return t.configureRequest(e,"GET")},t.prototype.post=function(e,n){return t.configureRequest(e,"POST")},t.configureRequest=function(t,e,n){return void 0===n&&(n=null),fetch(t,{method:e}).then((function(t){return t.json()}))},t}();e.HttpClient=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ApiConfig=void 0;var o=function(){function t(){}return t.BASE_URL="https://jsonplaceholder.typicode.com",t}();e.ApiConfig=o}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy90b2RvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2h0dHAtY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvYXBpLWNvbmZpZy50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInBvc3RzIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwiVG9kb1NlcnZpY2UiLCJnZXRBbGwiLCJ0aGVuIiwiZm9yRWFjaCIsInBvc3QiLCJpZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkFwcCIsInNlcnZpY2VVUkwiLCJBcGlDb25maWciLCJCQVNFX1VSTCIsInRoaXMiLCJodHRwIiwiSHR0cENsaWVudCIsImZpbmQiLCJ1cGRhdGUiLCJkZXN0cm95IiwidXJsIiwiY29uZmlndXJlUmVxdWVzdCIsImJvZHkiLCJtZXRob2QiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUs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RUcsT0FBTSxJQUFJbkIsTUFBSyxTQUFDcUIsR0FBdUIsT0FBQUEsRUFBU0MsV0FFeEUsRUFoQkEsR0FBYSxFQUFBVixjLGlHQ0FiLCtCQUdBLE9BRnlCLEVBQUFILFNBQ3JCLHVDQUNKLEVBSEEsR0FBYSxFQUFBRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBUb2RvU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdG9kby5zZXJ2aWNlJztcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuL21vZGVscy9wb3N0JztcblxuY2xhc3MgQXBwIHtcbiAgcHVibGljIHBvc3RzOiBBcnJheTxQb3N0PiA9IFtdO1xuXG4gIHN0YXJ0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCc+PiBTdGFydCBhcHAnKTtcblxuICAgIG5ldyBUb2RvU2VydmljZSgpLmdldEFsbCgpLnRoZW4oKHBvc3RzOiBBcnJheTxQb3N0PikgPT4ge1xuICAgICAgdGhpcy5wb3N0cyA9IHBvc3RzO1xuICAgICAgdGhpcy5wb3N0cy5mb3JFYWNoKChwb3N0OiBQb3N0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3QuaWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbmV3IEFwcCgpLnN0YXJ0KCk7XG59KTtcbiIsImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICcuLi91dGlscy9odHRwLWNsaWVudCc7XG5pbXBvcnQgeyBBcGlDb25maWcgfSBmcm9tICcuLi9jb25maWcvYXBpLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvU2VydmljZSB7XG4gIHByaXZhdGUgaHR0cDogSHR0cENsaWVudDtcbiAgcHJpdmF0ZSBzZXJ2aWNlVVJMOiBzdHJpbmcgPSBgJHtBcGlDb25maWcuQkFTRV9VUkx9L3RvZG9zL2A7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5odHRwID0gbmV3IEh0dHBDbGllbnQoKTtcbiAgfVxuXG4gIGdldEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZpY2VVUkwpO1xuICB9XG5cbiAgZmluZCgpIHt9XG5cbiAgY3JlYXRlKCkge31cblxuICB1cGRhdGUoKSB7fVxuXG4gIGRlc3Ryb3koKSB7fVxufVxuIiwiZXhwb3J0IGNsYXNzIEh0dHBDbGllbnQge1xuICBnZXQodXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBIdHRwQ2xpZW50LmNvbmZpZ3VyZVJlcXVlc3QodXJsLCAnR0VUJyk7XG4gIH1cblxuICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QgfCBudWxsKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gSHR0cENsaWVudC5jb25maWd1cmVSZXF1ZXN0KHVybCwgJ1BPU1QnKTtcbiAgfVxuXG4gIHN0YXRpYyBjb25maWd1cmVSZXF1ZXN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIGJvZHk6IG9iamVjdCB8IG51bGwgPSBudWxsXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyBtZXRob2QgfSkudGhlbigocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQXBpQ29uZmlnIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBCQVNFX1VSTDogc3RyaW5nID1cbiAgICAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tJztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=