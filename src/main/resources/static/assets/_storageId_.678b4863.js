import{a as w,b as V,h as s,r as S,L as T,P as H,o as N,ae as Z,Q as $,u as o,e as r,p as t,t as j,f as A,y as G,F as J,U as Q,V as W,J as d}from"./index.13a41ddb.js";import{b3 as y,b4 as K,m as O,aR as X,r as Y}from"./base.5bbd9596.js";/* empty css                *//* empty css               */import"./tooltip.f118fcb0.js";import{E as ee}from"./popper.7fc982d0.js";/* empty css              */import{E as te}from"./alert.a3c19fe1.js";import{_ as oe}from"./SvgIcon.abd81c33.js";import{Z as z,a as se}from"./ZFormItem.3dcb7c1e.js";import{m as ae,n as re,e as ie}from"./admin-storage.d197d46b.js";import{u as I,r as le}from"./common.7491c70a.js";import{S as ne}from"./sortable.esm.a99254e8.js";import{E as de}from"./request.a43d7f63.js";import{E as pe}from"./index.8d02b3f8.js";import{b as B}from"./route-block.9b0645f8.js";import{_ as me}from"./plugin-vue_export-helper.21dcd24c.js";import{r as ce}from"./BadgeCheckIcon.3a7968b4.js";import{E as ue}from"./index.035ac3f6.js";import{v as _e}from"./directive.dac6fe0e.js";import"./focus-trap.ae6f0781.js";import"./event.3ec63147.js";import"./index.5cf4e3bb.js";import"./index.cf9d729e.js";import"./scroll.be3a3b18.js";import"./validator.4ed8e33b.js";import"./index.62076e8c.js";import"./event.776e7e11.js";function fe(n,u){return w(),V("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})])}let a=S([]),E=S(!1);function he(n,u){let _=u.params.storageId;const v=()=>{ae(_).then(l=>{a.value=l.data,a.value.length===0&&f(),g()})},g=()=>{const l=document.querySelector(".z-form-body");ne.create(l,{draggable:".expression-item",onEnd:e=>{if(e.oldIndex===e.newIndex)return;const p=a.value.splice(e.oldIndex-1,1)[0];a.value.splice(e.newIndex-1,0,p)}})},b=()=>{if(!a.value.find(e=>{if(I.isEmpty(e.description)||I.isEmpty(e.expression)||I.isEmpty(e.password))return de.warning("\u8BF7\u68C0\u67E5\u6570\u636E\u586B\u5199\u662F\u5426\u5B8C\u6574"),!0})){E.value=!0;for(let e=0;e<a.value.length;e++){let p=a.value[e];p.id=e+1}re(_,a.value).then(()=>{pe.confirm("\u4FDD\u5B58\u6210\u529F, \u662F\u5426\u8FD4\u56DE\u5B58\u50A8\u6E90\u5217\u8868\uFF1F","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"success",callback:e=>{e==="confirm"&&n.push("/admin/storage-list")}})}).finally(()=>{E.value=!1})}},f=()=>{a.value.push({description:"\u8868\u8FBE\u5F0F - "+(a.value.length+1),expression:"",password:"",storageId:_})};return{loading:E,loadPasswordData:v,passwordList:a,addPasswordItem:f,deletePasswordItem:l=>{a.value.splice(l,1)},savePasswordData:b}}const c=n=>(Q("data-v-7036fb38"),n=n(),W(),n),we={class:"flex justify-items-center"},ve=c(()=>t("div",{class:"rules-tips"},"Glob \u8868\u8FBE\u5F0F\u89C4\u5219\uFF1A",-1)),ge=c(()=>t("div",{class:"rules-tips"},[t("b",null,"/"),d(": \u5355\u5C42\u6839\u76EE\u5F55\u52A0\u5BC6, \u5982 /, \u8868\u793A\u6839\u8DEF\u5F84\u4E0B\u9700\u8981\u5BC6\u7801\u8BBF\u95EE.")],-1)),be=c(()=>t("div",{class:"rules-tips"},[t("b",null,"/music*"),d(": \u5355\u5C42\u5B50\u76EE\u5F55\u52A0\u5BC6, \u5982 /music*, \u8868\u793A\u6839\u76EE\u5F55\u4E0B\u7684 music \u6587\u4EF6\u5939\u9700\u8981\u5BC6\u7801\u8BBF\u95EE, \u5B50\u6587\u4EF6\u5939\u4E0D\u52A0\u5BC6.")],-1)),xe=c(()=>t("div",{class:"rules-tips"},[t("b",null,"/music**"),d(": \u5D4C\u5957\u5B50\u76EE\u5F55\u52A0\u5BC6, \u5982 /music**, \u8868\u793A\u6839\u76EE\u5F55\u4E0B\u7684 music \u6587\u4EF6\u5939\u53CA\u5176\u6240\u6709\u5B50\u6587\u4EF6\u5939\u90FD\u9700\u8981\u5BC6\u7801\u8BBF\u95EE.")],-1)),ke=c(()=>t("div",{class:"rules-tips"},"\u6CE8\uFF1A\u7CFB\u7EDF\u5339\u914D\u5230\u7B2C\u4E00\u4E2A\u7B26\u5408\u7684\u89C4\u5219\u5C31\u4F1A\u53D6\u5BC6\u7801\u8FDB\u884C\u6821\u9A8C\uFF0C\u5E76\u8FD4\u56DE\u7ED3\u679C\uFF0C\u6240\u4EE5\u8BF7\u8C03\u6574\u597D\u89C4\u5219\u987A\u5E8F\uFF0C\u4E0B\u65B9\u89C4\u5219\u53EF\u8FDB\u884C\u62D6\u62FD\u6392\u5E8F\u3002",-1)),ye={class:"rules-tips-link"},Ie={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},Ee=c(()=>t("span",null,"\u53C2\u8003\u6587\u7AE0 (Wikipedia)",-1)),Ve={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},Se=d("\u53C2\u8003\u6587\u7AE0 (\u962E\u4E00\u5CF0)"),Pe={target:"_blank",class:"link",href:"https://github.com/whinc/blog/issues/18"},ze=d("\u53C2\u8003\u6587\u7AE0 (Github)"),Be={class:"sm:flex sm:space-x-2 sm:border-b-0 sm:pb-0 border-b pb-2"},Ce=d("\u6DFB\u52A0\u66F4\u591A"),Re=d("\u4FDD\u5B58\u8BBE\u7F6E"),C={__name:"[storageId]",setup(n){let u=T(),_=H(),v=u.params.storageId;const{loading:g,loadPasswordData:b,passwordList:f,addPasswordItem:P,deletePasswordItem:l,savePasswordData:e}=he(_,u);N(()=>{b(),R()});const p=S(),R=()=>{ie(v).then(h=>{h.data.type=h.data.type.key,p.value=h.data})};return(h,Ue)=>{const U=oe,D=Z("router-link"),F=te,x=ue,L=ee,k=Y,q=_e;return $((w(),V(se,{model:o(f),class:"zfile-admin-password-form"},{"form-title":r(()=>{var i;return[t("div",we,[s(D,{to:"/admin/storage-list"},{default:r(()=>[s(U,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})]),_:1}),t("span",null,"\u5BC6\u7801\u6587\u4EF6\u5939\uFF08"+j((i=p.value)==null?void 0:i.name)+"\uFF09",1)])]}),"form-sub-title":r(()=>[s(F,{closable:!1,type:"info"},{default:r(()=>[ve,ge,be,xe,ke,t("div",ye,[t("a",Ie,[s(o(y),{class:"inline mr-1"}),Ee]),t("a",Ve,[s(o(y),{class:"inline mr-1"}),Se]),t("a",Pe,[s(o(y),{class:"inline mr-1"}),ze])])]),_:1})]),footer:r(()=>[s(k,{type:"primary",size:"default",icon:o(ce),onClick:o(e)},{default:r(()=>[Re]),_:1},8,["icon","onClick"])]),default:r(()=>[(w(!0),A(J,null,G(o(f),(i,M)=>(w(),V(z,{required:!0,key:i,class:"expression-item"},{default:r(()=>[t("div",Be,[s(L,{content:"\u6B64\u5904\u53EF\u586B\u5199\u8868\u8FBE\u4E66\u63CF\u8FF0\uFF0C\u7528\u4E8E\u8F85\u52A9\u8BB0\u5FC6\uFF0C\u9632\u6B62\u65F6\u95F4\u8FC7\u957F\u540E\u4E0D\u77E5\u9053\u8868\u8FBE\u5F0F\u542B\u4E49.",placement:"top"},{default:r(()=>[s(x,{"prefix-icon":o(K),placeholder:"\u8BF7\u8F93\u5165\u8868\u8FBE\u5F0F\u63CF\u8FF0",modelValue:i.description,"onUpdate:modelValue":m=>i.description=m},null,8,["prefix-icon","modelValue","onUpdate:modelValue"])]),_:2},1024),s(x,{"prefix-icon":o(le),placeholder:"\u8BF7\u8F93\u5165\u8868\u8FBE\u5F0F",modelValue:i.expression,"onUpdate:modelValue":m=>i.expression=m},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),s(x,{"prefix-icon":o(fe),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:"password","show-password":"",modelValue:i.password,"onUpdate:modelValue":m=>i.password=m},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),s(k,{type:"danger",onClick:m=>o(l)(M),icon:o(O)},null,8,["onClick","icon"])])]),_:2},1024))),128)),s(z,null,{default:r(()=>[s(k,{type:"primary",size:"default",icon:o(X),onClick:o(P)},{default:r(()=>[Ce]),_:1},8,["icon","onClick"])]),_:1})]),_:1},8,["model"])),[[q,o(g)]])}}};typeof B=="function"&&B(C);var nt=me(C,[["__scopeId","data-v-7036fb38"]]);export{nt as default};