(function(){"use strict";var e={291:function(e,t,n){var i=n(963),a=n(252);const r={id:"app"},o={class:"wrapper"},c={class:"container"},l={class:"content"},s=(0,a._)("h1",null,"Редактор блоков на Vue 3",-1);function u(e,t,n,i,u,m){const v=(0,a.up)("ItemsList");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",o,[(0,a._)("div",c,[(0,a._)("div",l,[s,(0,a.Wm)(v)])])])])}var m=n(577);const v={class:"list__content"},d={class:"item__card"},f={class:"item__name"},p={class:"item__value"},_=["onClick"],h={key:0};function w(e,t,n,i,r,o){const c=(0,a.up)("EditForm");return(0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.items,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"card__content",key:e.name},[(0,a._)("div",f,(0,m.zw)(e.name),1),(0,a._)("div",p,(0,m.zw)(e.value),1),(0,a._)("button",{class:"select__item",onClick:t=>o.selectItem(e)},"Edit",8,_)])))),128))]),r.selectedItem?((0,a.wg)(),(0,a.iD)("div",h,[(0,a.Wm)(c,{item:r.selectedItem,onCancel:o.cancelItem},null,8,["item","onCancel"])])):(0,a.kq)("",!0)])}var b=[{name:"Andrew",value:"20000"},{name:"Paul",value:"30000"},{name:"Chris",value:"94000"},{name:"John",value:"60000"}];const I=e=>((0,a.dD)("data-v-62c2cfda"),e=e(),(0,a.Cn)(),e),g=I((()=>(0,a._)("label",{for:"name"},"Name: ",-1))),y={class:"name"},k=I((()=>(0,a._)("label",{for:"value"},"Value: ",-1))),O={class:"btns"},C=I((()=>(0,a._)("button",{type:"submit"},"Save",-1)));function D(e,t,n,r,o,c){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:t[2]||(t[2]=(0,i.iM)(((...e)=>c.saveItem&&c.saveItem(...e)),["prevent"]))},[(0,a._)("div",null,[g,(0,a._)("span",y,(0,m.zw)(n.item.name),1)]),(0,a._)("div",null,[k,(0,a.wy)((0,a._)("input",{type:"text",id:"value","onUpdate:modelValue":t[0]||(t[0]=e=>n.item.newValue=e)},null,512),[[i.nr,n.item.newValue]])]),(0,a._)("div",O,[C,(0,a._)("button",{type:"button",onClick:t[1]||(t[1]=t=>e.$emit("cancel"))},"Cancel")])],32)}var V={props:["item"],data(){return{newValue:""}},methods:{saveItem(){this.item.value=this.item.newValue,this.$emit("cancel")}}},j=n(744);const x=(0,j.Z)(V,[["render",D],["__scopeId","data-v-62c2cfda"]]);var E=x,z={components:{EditForm:E},data(){return{items:b,selectedItem:null}},methods:{selectItem(e){this.selectedItem=e},cancelItem(){this.selectedItem=null}}};const F=(0,j.Z)(z,[["render",w],["__scopeId","data-v-882ae97a"]]);var P=F,Z={components:{ItemsList:P}};const L=(0,j.Z)(Z,[["render",u]]);var S=L;(0,i.ri)(S).mount("#app")}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,r){if(!i){var o=1/0;for(u=0;u<e.length;u++){i=e[u][0],a=e[u][1],r=e[u][2];for(var c=!0,l=0;l<i.length;l++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(c=!1,r<o&&(o=r));if(c){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,a,r]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,r,o=i[0],c=i[1],l=i[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(l)var u=l(n)}for(t&&t(i);s<o.length;s++)r=o[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},i=self["webpackChunkoptimal_test"]=self["webpackChunkoptimal_test"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(291)}));i=n.O(i)})();
//# sourceMappingURL=app.1e3b7a3c.js.map