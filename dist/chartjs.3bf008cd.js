parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"leYY":[function(require,module,exports) {
window.addEventListener("load",function(a){var r=document.getElementById("myChart");new Chart(r,{type:"bubble",data:{labels:"Zon",datasets:[{label:["Almere"],backgroundColor:"rgba(166,206,227,0.2)",borderColor:"rgba(166,206,227,1)",data:[{x:52.35,y:1650,r:30}]},{label:["Amersfoort"],backgroundColor:"rgba(31,120,180,0.2)",borderColor:"rgba(31,120,180,1)",data:[{x:52.15,y:1590,r:30}]},{label:["Amsterdam"],backgroundColor:"rgba(178,223,138,0.2)",borderColor:"rgba(178,223,138,1)",data:[{x:52.37,y:1670,r:15}]},{label:["Den Burg"],backgroundColor:"rgba(51,160,44,0.2)",borderColor:"rgba(51,160,44,1)",data:[{x:53.05,y:1620,r:15}]},{label:["Groningen"],backgroundColor:"rgba(227,26,28,0.2)",borderColor:"rgba(227,26,28,1)",data:[{x:53.21,y:1540,r:15}]},{label:["Krommenie"],backgroundColor:"rgba(253,191,111,0.2)",borderColor:"rgba(253,191,111,1)",data:[{x:52.5,y:1640,r:15}]},{label:["Maastricht"],backgroundColor:"rgba(255,127,0,0.2)",borderColor:"rgba(255,127,0,1)",data:[{x:50.85,y:1530,r:15}]},{label:["Rotterdam"],backgroundColor:"rgba(202,178,214,0.2)",borderColor:"rgba(202,178,214,1)",data:[{x:51.92,y:1590,r:15}]}]},options:{tooltips:{callbacks:{label:function(a,r){return city=r.datasets[a.datasetIndex].label[0],city+": noorderbreedte van deze plaats is "+a.xLabel+" met het aantal zonuren: "+a.yLabel}}},title:{display:!0,text:"De ligging van in Nederland en het gemiddelde aantal zonuren"},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Zonuren",position:"left"}}],xAxes:[{scaleLabel:{display:!0,labelString:"Noorderbreedte",position:"right"}}]}}})});
},{}]},{},["leYY"], null)
//# sourceMappingURL=chartjs.3bf008cd.js.map