import{S as mt,i as vt,s as pt,k as S,a as R,q,l as w,m as C,h as I,c as M,r as H,J as nt,n as p,b as gt,G as h,u as it,H as lt,y as U,z as X,A as Z,K as ht,L as ot,M as Et,g as N,f as tt,d as V,B as z,N as yt,O as St,v as et,w as wt}from"../chunks/index.c5da838d.js";function It(n){let s,r,e,t,a,i,g,y,m=n[0]==="user"?"Me":"Bot",o,k,L,T,E,D;return{c(){s=S("div"),r=S("div"),e=S("div"),t=S("img"),g=R(),y=S("div"),o=q(m),k=R(),L=S("div"),T=q(n[1]),this.h()},l(f){s=w(f,"DIV",{class:!0});var v=C(s);r=w(v,"DIV",{class:!0});var O=C(r);e=w(O,"DIV",{class:!0});var x=C(e);t=w(x,"IMG",{src:!0,alt:!0}),x.forEach(I),O.forEach(I),g=M(v),y=w(v,"DIV",{class:!0});var G=C(y);o=H(G,m),G.forEach(I),k=M(v),L=w(v,"DIV",{class:!0});var P=C(L);T=H(P,n[1]),P.forEach(I),v.forEach(I),this.h()},h(){nt(t.src,a="https://ui-avatars.com/api/?name="+(n[0]==="user"?"Me":"B"))||p(t,"src",a),p(t,"alt",i=n[0]+" avatar"),p(e,"class","w-10 rounded-full"),p(r,"class","chat-image avatar"),p(y,"class","chat-header"),p(L,"class",E="chat-bubble "+(n[0]==="user"?"chat-bubble-primary":"chat-bubble-secondary")),p(s,"class",D="chat "+(n[0]==="user"?"chat-end":"chat-start")+" justify-end")},m(f,v){gt(f,s,v),h(s,r),h(r,e),h(e,t),h(s,g),h(s,y),h(y,o),h(s,k),h(s,L),h(L,T)},p(f,[v]){v&1&&!nt(t.src,a="https://ui-avatars.com/api/?name="+(f[0]==="user"?"Me":"B"))&&p(t,"src",a),v&1&&i!==(i=f[0]+" avatar")&&p(t,"alt",i),v&1&&m!==(m=f[0]==="user"?"Me":"Bot")&&it(o,m),v&2&&it(T,f[1]),v&1&&E!==(E="chat-bubble "+(f[0]==="user"?"chat-bubble-primary":"chat-bubble-secondary"))&&p(L,"class",E),v&1&&D!==(D="chat "+(f[0]==="user"?"chat-end":"chat-start")+" justify-end")&&p(s,"class",D)},i:lt,o:lt,d(f){f&&I(s)}}}function Ct(n,s,r){let{type:e}=s,{message:t}=s;return n.$$set=a=>{"type"in a&&r(0,e=a.type),"message"in a&&r(1,t=a.message)},[e,t]}class K extends mt{constructor(s){super(),vt(this,s,Ct,It,pt,{type:0,message:1})}}var _t={};(function(n){var s=function(r,e){if(!(this instanceof s))return new s(r,e);this.INITIALIZING=-1,this.CONNECTING=0,this.OPEN=1,this.CLOSED=2,this.url=r,e=e||{},this.headers=e.headers||{},this.payload=e.payload!==void 0?e.payload:"",this.method=e.method||this.payload&&"POST"||"GET",this.withCredentials=!!e.withCredentials,this.FIELD_SEPARATOR=":",this.listeners={},this.xhr=null,this.readyState=this.INITIALIZING,this.progress=0,this.chunk="",this.addEventListener=function(t,a){this.listeners[t]===void 0&&(this.listeners[t]=[]),this.listeners[t].indexOf(a)===-1&&this.listeners[t].push(a)},this.removeEventListener=function(t,a){if(this.listeners[t]!==void 0){var i=[];this.listeners[t].forEach(function(g){g!==a&&i.push(g)}),i.length===0?delete this.listeners[t]:this.listeners[t]=i}},this.dispatchEvent=function(t){if(!t)return!0;t.source=this;var a="on"+t.type;return this.hasOwnProperty(a)&&(this[a].call(this,t),t.defaultPrevented)?!1:this.listeners[t.type]?this.listeners[t.type].every(function(i){return i(t),!t.defaultPrevented}):!0},this._setReadyState=function(t){var a=new CustomEvent("readystatechange");a.readyState=t,this.readyState=t,this.dispatchEvent(a)},this._onStreamFailure=function(t){var a=new CustomEvent("error");a.data=t.currentTarget.response,this.dispatchEvent(a),this.close()},this._onStreamAbort=function(t){this.dispatchEvent(new CustomEvent("abort")),this.close()},this._onStreamProgress=function(t){if(this.xhr){if(this.xhr.status!==200){this._onStreamFailure(t);return}this.readyState==this.CONNECTING&&(this.dispatchEvent(new CustomEvent("open")),this._setReadyState(this.OPEN));var a=this.xhr.responseText.substring(this.progress);this.progress+=a.length,a.split(/(\r\n|\r|\n){2}/g).forEach(function(i){i.trim().length===0?(this.dispatchEvent(this._parseEventChunk(this.chunk.trim())),this.chunk=""):this.chunk+=i}.bind(this))}},this._onStreamLoaded=function(t){this._onStreamProgress(t),this.dispatchEvent(this._parseEventChunk(this.chunk)),this.chunk=""},this._parseEventChunk=function(t){if(!t||t.length===0)return null;var a={id:null,retry:null,data:"",event:"message"};t.split(/\n|\r\n|\r/).forEach(function(g){g=g.trimRight();var y=g.indexOf(this.FIELD_SEPARATOR);if(!(y<=0)){var m=g.substring(0,y);if(m in a){var o=g.substring(y+1).trimLeft();m==="data"?a[m]+=o:a[m]=o}}}.bind(this));var i=new CustomEvent(a.event);return i.data=a.data,i.id=a.id,i},this._checkStreamClosed=function(){this.xhr&&this.xhr.readyState===XMLHttpRequest.DONE&&this._setReadyState(this.CLOSED)},this.stream=function(){this._setReadyState(this.CONNECTING),this.xhr=new XMLHttpRequest,this.xhr.addEventListener("progress",this._onStreamProgress.bind(this)),this.xhr.addEventListener("load",this._onStreamLoaded.bind(this)),this.xhr.addEventListener("readystatechange",this._checkStreamClosed.bind(this)),this.xhr.addEventListener("error",this._onStreamFailure.bind(this)),this.xhr.addEventListener("abort",this._onStreamAbort.bind(this)),this.xhr.open(this.method,this.url);for(var t in this.headers)this.xhr.setRequestHeader(t,this.headers[t]);this.xhr.withCredentials=this.withCredentials,this.xhr.send(this.payload)},this.close=function(){this.readyState!==this.CLOSED&&(this.xhr.abort(),this.xhr=null,this._setReadyState(this.CLOSED))}};n.SSE=s})(_t);function ut(n,s,r){const e=n.slice();return e[11]=s[r],e}function ct(n){let s,r;return s=new K({props:{type:n[11].role,message:n[11].content}}),{c(){U(s.$$.fragment)},l(e){X(s.$$.fragment,e)},m(e,t){Z(s,e,t),r=!0},p(e,t){const a={};t&8&&(a.type=e[11].role),t&8&&(a.message=e[11].content),s.$set(a)},i(e){r||(N(s.$$.fragment,e),r=!0)},o(e){V(s.$$.fragment,e),r=!1},d(e){z(s,e)}}}function ft(n){let s,r;return s=new K({props:{type:"assistant",message:n[1]}}),{c(){U(s.$$.fragment)},l(e){X(s.$$.fragment,e)},m(e,t){Z(s,e,t),r=!0},p(e,t){const a={};t&2&&(a.message=e[1]),s.$set(a)},i(e){r||(N(s.$$.fragment,e),r=!0)},o(e){V(s.$$.fragment,e),r=!1},d(e){z(s,e)}}}function dt(n){let s,r;return s=new K({props:{type:"assistant",message:"..."}}),{c(){U(s.$$.fragment)},l(e){X(s.$$.fragment,e)},m(e,t){Z(s,e,t),r=!0},i(e){r||(N(s.$$.fragment,e),r=!0)},o(e){V(s.$$.fragment,e),r=!1},d(e){z(s,e)}}}function kt(n){let s,r,e,t,a,i,g,y,m,o,k,L,T,E,D,f,v,O,x,G,P,Q,F,W,st;k=new K({props:{type:"assistant",message:"Hello, ask me anything you want!"}});let B=n[3],c=[];for(let l=0;l<B.length;l+=1)c[l]=ct(ut(n,B,l));const bt=l=>V(c[l],1,1,()=>{c[l]=null});let _=n[1]&&ft(n),b=n[2]&&dt();return{c(){s=S("div"),r=S("div"),e=S("h1"),t=q("Iris"),a=R(),i=S("p"),g=q("Powered by gpt-3.5-turbo"),y=R(),m=S("div"),o=S("div"),U(k.$$.fragment),L=R();for(let l=0;l<c.length;l+=1)c[l].c();T=R(),_&&_.c(),E=R(),b&&b.c(),D=R(),f=S("div"),v=R(),O=S("form"),x=S("input"),G=R(),P=S("button"),Q=q("Send"),this.h()},l(l){s=w(l,"DIV",{class:!0});var d=C(s);r=w(d,"DIV",{});var u=C(r);e=w(u,"H1",{class:!0});var $=C(e);t=H($,"Iris"),$.forEach(I),a=M(u),i=w(u,"P",{class:!0});var rt=C(i);g=H(rt,"Powered by gpt-3.5-turbo"),rt.forEach(I),u.forEach(I),y=M(d),m=w(d,"DIV",{class:!0});var j=C(m);o=w(j,"DIV",{class:!0});var A=C(o);X(k.$$.fragment,A),L=M(A);for(let Y=0;Y<c.length;Y+=1)c[Y].l(A);T=M(A),_&&_.l(A),E=M(A),b&&b.l(A),A.forEach(I),D=M(j),f=w(j,"DIV",{class:!0}),C(f).forEach(I),j.forEach(I),v=M(d),O=w(d,"FORM",{class:!0});var J=C(O);x=w(J,"INPUT",{type:!0,class:!0}),G=M(J),P=w(J,"BUTTON",{type:!0,class:!0});var at=C(P);Q=H(at,"Send"),at.forEach(I),J.forEach(I),d.forEach(I),this.h()},h(){p(e,"class","text-2xl text-black font-bold w-full text-center"),p(i,"class","text-sm text-black italic"),p(o,"class","flex flex-col gap-2"),p(f,"class",""),p(m,"class","h-[500px] w-full bg-gray-900 rounded-md p-4 overflow-y-auto flex flex-col gap-4"),p(x,"type","text"),p(x,"class","input text-black input-bordered w-full"),p(P,"type","submit"),p(P,"class","btn btn-accent"),p(O,"class","flex w-full rounded-md gap-4 bg-gray-900 p-4"),p(s,"class","flex flex-col pt-4 w-full px-1 items-center gap-2")},m(l,d){gt(l,s,d),h(s,r),h(r,e),h(e,t),h(r,a),h(r,i),h(i,g),h(s,y),h(s,m),h(m,o),Z(k,o,null),h(o,L);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(o,null);h(o,T),_&&_.m(o,null),h(o,E),b&&b.m(o,null),h(m,D),h(m,f),n[6](f),h(s,v),h(s,O),h(O,x),ht(x,n[0]),h(O,G),h(O,P),h(P,Q),F=!0,W||(st=[ot(x,"input",n[7]),ot(O,"submit",Et(n[8]))],W=!0)},p(l,[d]){if(d&8){B=l[3];let u;for(u=0;u<B.length;u+=1){const $=ut(l,B,u);c[u]?(c[u].p($,d),N(c[u],1)):(c[u]=ct($),c[u].c(),N(c[u],1),c[u].m(o,T))}for(et(),u=B.length;u<c.length;u+=1)bt(u);tt()}l[1]?_?(_.p(l,d),d&2&&N(_,1)):(_=ft(l),_.c(),N(_,1),_.m(o,E)):_&&(et(),V(_,1,1,()=>{_=null}),tt()),l[2]?b?d&4&&N(b,1):(b=dt(),b.c(),N(b,1),b.m(o,null)):b&&(et(),V(b,1,1,()=>{b=null}),tt()),d&1&&x.value!==l[0]&&ht(x,l[0])},i(l){if(!F){N(k.$$.fragment,l);for(let d=0;d<B.length;d+=1)N(c[d]);N(_),N(b),F=!0}},o(l){V(k.$$.fragment,l),c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)V(c[d]);V(_),V(b),F=!1},d(l){l&&I(s),z(k),yt(c,l),_&&_.d(),b&&b.d(),n[6](null),W=!1,St(st)}}}function Lt(n,s,r){let e="",t="",a=!1,i=[],g;function y(){setTimeout(function(){g.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},100)}const m=async()=>{r(2,a=!0),r(3,i=[...i,{role:"user",content:e}]);const E=new _t.SSE("/api/chat",{headers:{"Content-Type":"application/json"},payload:JSON.stringify({messages:i})});r(0,e=""),E.addEventListener("error",o),E.addEventListener("message",D=>{y();try{if(r(2,a=!1),D.data==="[DONE]"){r(3,i=[...i,{role:"assistant",content:t}]),r(1,t="");return}const f=JSON.parse(D.data),[{delta:v}]=f.choices;v.content&&r(1,t=(t??"")+v.content)}catch(f){o(f)}}),E.stream(),y()};function o(E){r(2,a=!1),r(0,e=""),r(1,t=""),console.error(E)}function k(E){wt[E?"unshift":"push"](()=>{g=E,r(4,g)})}function L(){e=this.value,r(0,e)}return[e,t,a,i,g,m,k,L,()=>m()]}class Ot extends mt{constructor(s){super(),vt(this,s,Lt,kt,pt,{})}}export{Ot as default};