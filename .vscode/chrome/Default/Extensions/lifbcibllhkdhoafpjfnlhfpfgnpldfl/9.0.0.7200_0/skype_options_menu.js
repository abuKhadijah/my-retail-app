(function(a){function b(d){if(c[d])return c[d].exports;var f=c[d]={exports:{},id:d,loaded:!1};return a[d].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)})({0:function(a,b,c){"use strict";const d=c(133),f=document.querySelector("#enableMeetingsToggle");f&&(d.default.userSettings.enableMeetings&&f.classList.add("checked"),f.addEventListener("click",()=>{d.default.updateSetting("enableMeetings",!d.default.userSettings.enableMeetings),f.classList.toggle("checked")}))},133:function(a,b){"use strict";function c(h){try{return localStorage.getItem(h)}catch(i){return null}}function d(h,i){try{localStorage.setItem(h,i)}catch(j){}}const f={enableMeetings:!0};Object.defineProperty(b,"__esModule",{value:!0}),b.default=new class{constructor(){this.storageKey="settings",this.callbacks=[];const h=c(this.storageKey);this.userSettings=Object.assign({},f,JSON.parse(h||"{}")),window.addEventListener("storage",(i)=>{i.storageArea===localStorage&&i.key===this.storageKey&&(this.userSettings=Object.assign({},f,JSON.parse(i.newValue||"{}")),this.callbacks.forEach((j)=>j(this.userSettings)))})}subscribe(h){return this.callbacks.push(h),()=>this.unsubscribe(h)}updateSetting(h,i){this.userSettings[h]=i,d(this.storageKey,JSON.stringify(this.userSettings))}unsubscribe(h){for(let i;0<=(i=this.callbacks.indexOf(h));)this.callbacks.splice(i,1)}}}});