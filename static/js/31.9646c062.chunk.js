(this["webpackJsonpblip-plugin"]=this["webpackJsonpblip-plugin"]||[]).push([[31],{107:function(e,i,t){"use strict";t.r(i),t.d(i,"bds_radio",(function(){return o}));var r=t(14),n=0,o=function(){function e(e){var i=this;Object(r.i)(this,e),this.bdsChange=Object(r.e)(this,"bdsChange",7),this.bdsClickChange=Object(r.e)(this,"bdsClickChange",7),this.checked=!1,this.disabled=!1,this.onClick=function(e){i.checked=!i.checked,i.bdsClickChange.emit({checked:i.checked}),e.stopPropagation()},this.refNativeInput=function(e){i.nativeInput=e}}return e.prototype.checkedChanged=function(e){this.bdsChange.emit({checked:e})},e.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},e.prototype.getValue=function(){return Promise.resolve(this.nativeInput.checked)},e.prototype.connectedCallback=function(){this.radioId=this.refer||"bds-radio-"+n++},e.prototype.render=function(){return Object(r.g)("label",{class:"radio",htmlFor:this.radioId},Object(r.g)("input",{class:"radio__input",type:"radio",ref:this.refNativeInput,id:this.radioId,onClick:this.onClick,disabled:this.disabled,checked:this.checked,value:this.value,name:this.name}),Object(r.g)("div",{class:"radio__circle"},Object(r.g)("div",{class:"radio__circle__pointer"})),this.label&&Object(r.g)("bds-typo",{class:"radio__text",variant:"fs-14",tag:"span"},this.label),Object(r.g)("slot",null))},Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedChanged"]}},enumerable:!1,configurable:!0}),e}();o.style=".radio{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.radio [type=radio]{display:none}.radio [type=radio]:focus{outline:0}.radio__circle{-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:16px;height:16px;-ms-flex-negative:0;flex-shrink:0;border:1px solid #3f7de8;border-radius:100%;background:#ffffff}.radio__circle__pointer{-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;border-radius:100%;background:#ffffff;height:10px;width:10px}.radio__circle:hover{border-color:#125ad5}.radio__text{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;padding-left:8px;color:#505f79}.radio__input[type=radio]:checked~.radio__circle{background:#ffffff}.radio__input[type=radio]:checked~.radio__circle .radio__circle__pointer{background-color:#3f7de8}.radio__input[type=radio]:checked~.radio__circle:hover{border-color:#125ad5}.radio__input[type=radio]:checked~.radio__circle:hover .radio__circle__pointer{background-color:#125ad5}.radio__input[type=radio]:disabled~.radio__circle{border-color:#637798;background-color:#e8f2ff}.radio__input[type=radio]:disabled~.radio__circle .radio__circle__pointer--checked{background-color:#637798}.radio__input[type=radio]:disabled~.radio__text,.radio__input[type=radio]:disabled~.radio__circle{cursor:not-allowed}"}}]);
//# sourceMappingURL=31.9646c062.chunk.js.map