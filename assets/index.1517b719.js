import{d as t,w as e,a as n,c as s,b as a,t as o,u as c,o as i,e as d,f as r}from"./vendor.12cff40d.js";const u=t({id:"counter",state:()=>({count:0}),actions:{increment(){this.count++},decrement(){this.count&&this.count--}}});const m={class:"counter"},p={class:"button__wrapper"};const l=d(n({setup(t){const n=u();return"BroadcastChannel"in window&&function(t,n,{ref:s="shared-",initialize:a=!0}={}){const o=`${s}-${t.toString()}`;let c=new BroadcastChannel(o),i=!1,d=0;e((()=>n[t]),(t=>{i||(d=Date.now(),c.postMessage({timestamp:d,state:t})),i=!1}),{deep:!0}),c.onmessage=e=>{void 0!==e.data?e.data.timestamp<=d||(i=!0,d=e.data.timestamp,n[t]=e.data.state):c.postMessage({timestamp:d,state:n[t]})};const r=()=>c.postMessage(void 0);a&&r()}("count",n),(t,e)=>(i(),s("div",m,[a("h1",{class:"count",textContent:o(c(n).count)},null,8,["textContent"]),a("div",p,[a("button",{onClick:e[1]||(e[1]=(...t)=>c(n).decrement&&c(n).decrement(...t))},"-"),a("button",{onClick:e[2]||(e[2]=(...t)=>c(n).increment&&c(n).increment(...t))},"+")])]))}}));l.use(r()),l.mount("#app");