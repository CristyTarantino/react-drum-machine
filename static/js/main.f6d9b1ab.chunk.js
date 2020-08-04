(this["webpackJsonpreact-drum-machine"]=this["webpackJsonpreact-drum-machine"]||[]).push([[0],{14:function(e,a,r){},15:function(e,a,r){},21:function(e,a,r){"use strict";r.r(a);var t=r(0),o=r.n(t),n=r(6),c=r.n(n),m=(r(14),r(2)),i=(r(15),{backgroundColor:"orange",boxShadow:"0 3px orange",height:77,marginTop:13}),s={backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"},d=function(e){var a=e.clipId,r=e.keyTrigger,n=e.keyCode,c=e.clip,d=e.updateDisplay,l=e.power,u=Object(t.useState)(s),p=Object(m.a)(u,2),g=p[0],k=p[1],y=Object(t.useCallback)((function(){k(l?function(e){return"orange"===e.backgroundColor?s:i}:function(e){return 13===e.marginTop?s:{height:77,marginTop:13,backgroundColor:"grey",boxShadow:"0 3px grey"}})}),[l]),h=Object(t.useCallback)((function(){var e=document.getElementById(r);e.CurrentTime=0,e.play().then(),y(),setTimeout((function(){return y()}),100),d(a.replace(/-/g," "))}),[y,a,r,d]),C=Object(t.useCallback)((function(e){e.keyCode===n&&h()}),[n,h]);return Object(t.useEffect)((function(){return document.addEventListener("keydown",C),function(){document.removeEventListener("keydown",C)}}),[]),o.a.createElement("div",{id:a,onClick:h,className:"drum-pad",style:g},o.a.createElement("audio",{className:"clip",id:r,src:c}),r)},l=function(e){var a=e.power,r=e.currentPadBank,t=e.updateDisplay,n=r.map((function(e,r,n){return o.a.createElement(d,{key:n[r].id,clipId:n[r].id,clip:a?n[r].url:"#",keyTrigger:n[r].keyTrigger,keyCode:n[r].keyCode,updateDisplay:t,power:a})}));return o.a.createElement("div",{className:"pad-bank"},n)},u=r(8),p=r(7),g=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],k=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}];var y=function(){var e=Object(t.useState)(!0),a=Object(m.a)(e,2),r=a[0],n=a[1],c=Object(t.useState)(String.fromCharCode(160)),i=Object(m.a)(c,2),s=i[0],d=i[1],y=Object(t.useState)(g),h=Object(m.a)(y,2),C=h[0],f=h[1],w=Object(t.useState)("Heater Kit"),v=Object(m.a)(w,2),E=v[0],b=v[1],T=Object(t.useState)(.3),H=Object(m.a)(T,2),S=H[0],O=H[1],_=function(){d(String.fromCharCode(160))},z=r?{float:"right"}:{float:"left"},j=C===g?{float:"left"}:{float:"right"};return[].slice.call(document.getElementsByClassName("clip")).forEach((function(e){e.volume=S})),o.a.createElement("div",{id:"drum-machine",className:"inner-container"},o.a.createElement(l,{power:r,updateDisplay:function(e){r&&d(e)},currentPadBank:C}),o.a.createElement("div",{className:"logo"},o.a.createElement("div",{className:"inner-logo "},"FCC"+String.fromCharCode(160)),o.a.createElement(p.a,{icon:u.a,size:"lg"})),o.a.createElement("div",{className:"controls-container"},o.a.createElement("div",{className:"control"},o.a.createElement("p",null,"Power"),o.a.createElement("div",{onClick:function(){n((function(e){return!e})),d(String.fromCharCode(160))},className:"select"},o.a.createElement("div",{style:z,className:"inner"}))),o.a.createElement("p",{id:"display"},s),o.a.createElement("div",{className:"volume-slider"},o.a.createElement("input",{type:"range",min:"0",max:"1",step:"0.01",value:S,onChange:function(e){r&&(O(e.target.value),d("Volume: "+Math.round(100*e.target.value)),setTimeout((function(){return _()}),1e3))}})),o.a.createElement("div",{className:"control"},o.a.createElement("p",null,"Bank"),o.a.createElement("div",{onClick:function(){r&&("Heater Kit"===E?(f(k),d("Smooth Piano Kit"),b("Smooth Piano Kit")):(f(g),d("Heater Kit"),b("Heater Kit")))},className:"select"},o.a.createElement("div",{style:j,className:"inner"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,r){e.exports=r(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.f6d9b1ab.chunk.js.map