(function(t){function e(e){for(var n,s,a=e[0],u=e[1],c=e[2],l=0,p=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("header",{staticClass:"site-header"},[o("div",{staticClass:"site-input container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"type your todo..."},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),o("button",{staticClass:"btn site-input-btn",on:{click:t.addTodo}},[o("i",{staticClass:"fas fa-plus"})])])]),o("main",[o("TodoList",{attrs:{todosData:t.todos},on:{isCompleted:t.isCompleted,"delete-todo":t.deleteTodo}})],1)])},i=[],s=(o("4de4"),o("d81d"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todosData,(function(e){return o("TodoItem",{key:e.id,attrs:{todo:e},on:{isCompleted:function(o){return t.$emit("isCompleted",e.id)},"delete-todo":function(o){return t.$emit("delete-todo",e.id)}}})})),1)}),a=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.completed},on:{click:function(e){return t.$emit("isCompleted",t.todo.id)}}}),o("p",{class:{"line-through":t.todo.completed}},[t._v(t._s(t.todo.text))]),o("button",{staticClass:"btn",on:{click:function(e){return t.$emit("delete-todo",t.todo.id)}}},[o("i",{staticClass:"fas fa-trash"})])])},c=[],d={props:{todo:Object}},l=d,p=(o("7f83"),o("2877")),f=Object(p["a"])(l,u,c,!1,null,"1a4536be",null),m=f.exports,h={props:{todosData:Array},components:{TodoItem:m}},v=h,b=Object(p["a"])(v,s,a,!1,null,null,null),y=b.exports,x={name:"app",components:{TodoList:y},data:function(){return{todos:[],text:""}},methods:{generateNumber:function(){return Math.round(99999*Math.random()+1)},addTodo:function(){var t={id:this.generateNumber(),text:this.text,completed:!1},e=/\S/;e.test(this.text)&&this.todos.unshift(t),this.text=""},isCompleted:function(t){this.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))},deleteTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))}}},g=x,O=(o("034f"),Object(p["a"])(g,r,i,!1,null,null,null)),_=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(_)}}).$mount("#app")},"7f83":function(t,e,o){"use strict";var n=o("c2f3"),r=o.n(n);r.a},"85ec":function(t,e,o){},c2f3:function(t,e,o){}});
//# sourceMappingURL=app.d31b7de3.js.map