import{o as i,c,r as F,a as o,b as p,w as g,d as _,n as $,e as m,f as D,F as y,g as L,t as w,T as P,h as S}from"./@vue-DIPN7l7z.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const k=""+new URL("start-CymFl1py.png",import.meta.url).href,v=(u,n)=>{const a=u.__vccOpts||u;for(const[t,e]of n)a[t]=e;return a},O={};function I(u,n){return i(),c("button",null,[F(u.$slots,"default",{},void 0)])}const x=v(O,[["render",I],["__scopeId","data-v-45aa5700"]]),N={class:"container"},B={class:"container__btn"},R={__name:"StartPage",emits:["start"],setup(u,{emit:n}){return(a,t)=>(i(),c("div",N,[t[2]||(t[2]=o("div",{class:"container__img"},[o("img",{src:k,alt:""})],-1)),o("div",B,[p(x,{onClick:t[0]||(t[0]=e=>a.$emit("start"))},{default:g(()=>t[1]||(t[1]=[_("ПОДАТЬ ДОКУМЕНТЫ "),o("br",null,null,-1),_(" В ЦЗН ")])),_:1})])]))}},T=v(R,[["__scopeId","data-v-ea2c9347"]]),U=""+new URL("blue-purDg0yY.png",import.meta.url).href,V=""+new URL("yellow-DlvzEVI-.png",import.meta.url).href,A=""+new URL("green-Bl-t9ne6.png",import.meta.url).href,E=""+new URL("blue2-DpfTsaFc.png",import.meta.url).href,G={key:0,class:"container__text-good"},z={key:1,class:"container__text-bad"},q={class:"container__btn"},K={__name:"Popup",props:["failCount"],setup(u){const n=()=>{location.reload()};return(a,t)=>(i(),c("div",{class:$(["container",{"green-bg":u.failCount===0,"white-bg":u.failCount!==0}])},[u.failCount===0?(i(),c("div",G,t[0]||(t[0]=[o("p",null,[_(" Вы отлично справились с заданием! "),o("br"),_(" Если хотите еще раз отработать навыки, пройдите тренировку снова. ")],-1)]))):(i(),c("div",z,t[1]||(t[1]=[o("p",null," Вы допустили ошибку! Повторите в уроке, когда подать отчетность. Попробуйте разложить документы снова. ",-1)]))),o("div",q,[p(x,{onClick:n},{default:g(()=>t[2]||(t[2]=[_("ПРОЙТИ СНОВА")])),_:1})])],2))}},M=v(K,[["__scopeId","data-v-2e8a46ac"]]),Y={key:0,class:"container__popup"},j={class:"container"},H={class:"container__folder"},J={class:"container__card"},Q=["onDragstart"],W={key:0,class:"container__btn"},X={__name:"Game",setup(u){const n=m([{text:"О временном переводе работников на дистанционную работу по инициативе работодателя",correctFolder:"Срок подачи 3 рабочих дня",isCorrect:null},{text:"О свободных рабочих местах и вакантных должностях",correctFolder:"Срок подачи 5 рабочих дней",isCorrect:null},{text:"О выполнении квоты для приема на работу инвалидов",correctFolder:"Срок подачи 1 месяц",isCorrect:null},{text:"ЕФС-1",correctFolder:"Документ не относится к ЦЗН",isCorrect:null},{text:"О ликвидации и сокращении штата, или численности работников",correctFolder:"Срок подачи 3 рабочих дня",isCorrect:null},{text:"СТД-Р",correctFolder:"Документ не относится к ЦЗН",isCorrect:null},{text:"О введении режима неполного рабочего дня или недели",correctFolder:"Срок подачи 3 рабочих дня",isCorrect:null},{text:"Приказ о переводе на дистанционную работу",correctFolder:"Документ не относится к ЦЗН",isCorrect:null},{text:"Информация о простое",correctFolder:"Срок подачи 3 рабочих дня",isCorrect:null},{text:"Информация о банкротстве организации",correctFolder:"Срок подачи 3 рабочих дня",isCorrect:null}]),a=m(null);function t(d){a.value=d}function e(d){d.preventDefault()}function s(d,r){d.preventDefault(),d.target.classList.remove("tadam"),d.target.classList.add("tadam"),window.setTimeout(()=>{d.target.classList.remove("tadam")},1e3),a.value.correctFolder===r?(a.value.isCorrect=!0,b.value+=1):(a.value.isCorrect=!1,f.value+=1),n.value=n.value.filter(l=>l!==a.value),a.value=null}const f=m(0),b=m(0),C=m(!1);return(d,r)=>(i(),c(y,null,[C.value?(i(),c("div",Y,[p(M,{failCount:f.value},null,8,["failCount"])])):D("",!0),o("div",j,[o("div",H,[o("img",{class:"img1",src:U,alt:"Срок подачи 3 рабочих дня",onDragover:e,onDrop:r[0]||(r[0]=l=>s(l,"Срок подачи 3 рабочих дня"))},null,32),o("img",{class:"img2",src:V,alt:"Срок подачи 5 рабочих дней",onDragover:e,onDrop:r[1]||(r[1]=l=>s(l,"Срок подачи 5 рабочих дней"))},null,32),r[5]||(r[5]=o("div",{class:"folder-name"},"Срок подачи 3 рабочих дня",-1)),r[6]||(r[6]=o("div",{class:"folder-name"},"Срок подачи 5 рабочих дней",-1)),o("img",{class:"img3",src:A,alt:"Документ не относится к ЦЗН",onDragover:e,onDrop:r[2]||(r[2]=l=>s(l,"Документ не относится к ЦЗН"))},null,32),o("img",{class:"img4",src:E,alt:"Срок подачи 1 месяц",onDragover:e,onDrop:r[3]||(r[3]=l=>s(l,"Срок подачи 1 месяц"))},null,32),r[7]||(r[7]=o("div",{class:"folder-name"},"Документ не относится к ЦЗН",-1)),r[8]||(r[8]=o("div",{class:"folder-name"},"Срок подачи 1 месяц",-1))]),o("div",J,[(i(!0),c(y,null,L(n.value,l=>(i(),c("div",{key:l.text,class:$(["card",{correct:l.isCorrect===!0,incorrect:l.isCorrect===!1}]),draggable:"true",onDragstart:()=>t(l)},w(l.text),43,Q))),128))]),n.value.length===0&&!C.value?(i(),c("div",W,[p(x,{onClick:r[4]||(r[4]=l=>C.value=!0)},{default:g(()=>r[9]||(r[9]=[_("Проверить")])),_:1})])):D("",!0)])],64))}},Z=v(X,[["__scopeId","data-v-3d5116e1"]]),h={key:0},tt={key:1},et={__name:"App",setup(u){const n=m(!1);return(a,t)=>(i(),c(y,null,[p(P,{name:"fade",mode:"out-in"},{default:g(()=>[n.value?(i(),c("div",tt,[p(Z)])):(i(),c("div",h,[p(T,{onStart:t[0]||(t[0]=e=>n.value=!0)})]))]),_:1}),t[1]||(t[1]=o("footer",null,null,-1))],64))}},rt=v(et,[["__scopeId","data-v-c7265cfc"]]);S(rt).mount("#app");
//# sourceMappingURL=index-KuQFc2c4.js.map