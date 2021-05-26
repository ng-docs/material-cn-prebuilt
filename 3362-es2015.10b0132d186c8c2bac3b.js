(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[3362],{53362:function(e,t,i){"use strict";i.r(t),i.d(t,{CheckboxConfigurableExample:function(){return d},CheckboxExamplesModule:function(){return u},CheckboxHarnessExample:function(){return h},CheckboxOverviewExample:function(){return m}});var a=i(61116),n=i(35366),r=i(31041),o=i(22797),c=i(40994),s=i(7436);let d=(()=>{class e{constructor(){this.checked=!1,this.indeterminate=!1,this.labelPosition="after",this.disabled=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["checkbox-configurable-example"]],decls:27,vars:8,consts:[[1,"example-h2"],[1,"example-section"],[1,"example-margin",3,"ngModel","ngModelChange"],[1,"example-margin"],[3,"ngModel","ngModelChange"],["value","after",1,"example-margin"],["value","before",1,"example-margin"],[1,"result"],[1,"example-margin",3,"ngModel","indeterminate","labelPosition","disabled","ngModelChange","indeterminateChange"]],template:function(e,t){1&e&&(n.TgZ(0,"mat-card"),n.TgZ(1,"mat-card-content"),n.TgZ(2,"h2",0),n._uU(3,"Checkbox configuration"),n.qZA(),n.TgZ(4,"section",1),n.TgZ(5,"mat-checkbox",2),n.NdJ("ngModelChange",function(e){return t.checked=e}),n._uU(6,"Checked"),n.qZA(),n.TgZ(7,"mat-checkbox",2),n.NdJ("ngModelChange",function(e){return t.indeterminate=e}),n._uU(8,"Indeterminate"),n.qZA(),n.qZA(),n.TgZ(9,"section",1),n.TgZ(10,"label",3),n._uU(11,"Align:"),n.qZA(),n.TgZ(12,"mat-radio-group",4),n.NdJ("ngModelChange",function(e){return t.labelPosition=e}),n.TgZ(13,"mat-radio-button",5),n._uU(14,"After"),n.qZA(),n.TgZ(15,"mat-radio-button",6),n._uU(16,"Before"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(17,"section",1),n.TgZ(18,"mat-checkbox",2),n.NdJ("ngModelChange",function(e){return t.disabled=e}),n._uU(19,"Disabled"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(20,"mat-card",7),n.TgZ(21,"mat-card-content"),n.TgZ(22,"h2",0),n._uU(23,"Result"),n.qZA(),n.TgZ(24,"section",1),n.TgZ(25,"mat-checkbox",8),n.NdJ("ngModelChange",function(e){return t.checked=e})("indeterminateChange",function(e){return t.indeterminate=e}),n._uU(26," I'm a checkbox "),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(5),n.Q6J("ngModel",t.checked),n.xp6(2),n.Q6J("ngModel",t.indeterminate),n.xp6(5),n.Q6J("ngModel",t.labelPosition),n.xp6(6),n.Q6J("ngModel",t.disabled),n.xp6(7),n.Q6J("ngModel",t.checked)("indeterminate",t.indeterminate)("labelPosition",t.labelPosition)("disabled",t.disabled))},directives:[o.a8,o.dn,c.oG,r.JJ,r.On,s.VQ,s.U0],styles:[".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"]}),e})();function l(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"li"),n.TgZ(1,"mat-checkbox",6),n.NdJ("ngModelChange",function(e){return t.$implicit.completed=e})("ngModelChange",function(){return n.CHM(e),n.oxw().updateAllComplete()}),n._uU(2),n.qZA(),n.qZA()}if(2&e){const e=t.$implicit;n.xp6(1),n.Q6J("ngModel",e.completed)("color",e.color),n.xp6(1),n.hij(" ",e.name," ")}}let m=(()=>{class e{constructor(){this.task={name:"Indeterminate",completed:!1,color:"primary",subtasks:[{name:"Primary",completed:!1,color:"primary"},{name:"Accent",completed:!1,color:"accent"},{name:"Warn",completed:!1,color:"warn"}]},this.allComplete=!1}updateAllComplete(){this.allComplete=null!=this.task.subtasks&&this.task.subtasks.every(e=>e.completed)}someComplete(){return null!=this.task.subtasks&&this.task.subtasks.filter(e=>e.completed).length>0&&!this.allComplete}setAll(e){this.allComplete=e,null!=this.task.subtasks&&this.task.subtasks.forEach(t=>t.completed=e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["checkbox-overview-example"]],decls:12,vars:6,consts:[[1,"example-section"],[1,"example-margin"],[1,"example-margin",3,"disabled"],[1,"example-list-section"],[1,"example-margin",3,"checked","color","indeterminate","change"],[4,"ngFor","ngForOf"],[3,"ngModel","color","ngModelChange"]],template:function(e,t){1&e&&(n.TgZ(0,"section",0),n.TgZ(1,"mat-checkbox",1),n._uU(2,"Check me!"),n.qZA(),n.TgZ(3,"mat-checkbox",2),n._uU(4,"Disabled"),n.qZA(),n.qZA(),n.TgZ(5,"section",0),n.TgZ(6,"span",3),n.TgZ(7,"mat-checkbox",4),n.NdJ("change",function(e){return t.setAll(e.checked)}),n._uU(8),n.qZA(),n.qZA(),n.TgZ(9,"span",3),n.TgZ(10,"ul"),n.YNc(11,l,3,3,"li",5),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(3),n.Q6J("disabled",!0),n.xp6(4),n.Q6J("checked",t.allComplete)("color",t.task.color)("indeterminate",t.someComplete()),n.xp6(1),n.hij(" ",t.task.name," "),n.xp6(3),n.Q6J("ngForOf",t.task.subtasks))},directives:[c.oG,a.sg,r.JJ,r.On],styles:[".example-section[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n}"]}),e})(),h=(()=>{class e{constructor(){this.disabled=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["checkbox-harness-example"]],decls:4,vars:2,consts:[["required","","name","first-name","value","first-value","aria-label","First checkbox",3,"checked"],["indeterminate","true","aria-label","Second checkbox",3,"disabled"]],template:function(e,t){1&e&&(n.TgZ(0,"mat-checkbox",0),n._uU(1," First\n"),n.qZA(),n.TgZ(2,"mat-checkbox",1),n._uU(3," Second\n"),n.qZA()),2&e&&(n.Q6J("checked",!0),n.xp6(2),n.Q6J("disabled",t.disabled))},directives:[c.oG],encapsulation:2}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.ez,o.QW,c.p9,s.Fk,r.u5]]}),e})()},22797:function(e,t,i){"use strict";i.d(t,{a8:function(){return k},hq:function(){return u},kc:function(){return b},dn:function(){return l},dk:function(){return g},G2:function(){return p},QW:function(){return x},$j:function(){return h},n5:function(){return m}});var a=i(26136),n=i(87064),r=i(35366);const o=["*",[["mat-card-footer"]]],c=["*","mat-card-footer"],s=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],d=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r.lG2({type:e,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r.lG2({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r.lG2({type:e,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),e})(),u=(()=>{class e{constructor(){this.align="start"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r.lG2({type:e,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(e,t){2&e&&r.ekj("mat-card-actions-align-end","end"===t.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r.lG2({type:e,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r.lG2({type:e,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-card-avatar"]}),e})(),k=(()=>{class e{constructor(e){this._animationMode=e}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(a.Qb,8))},e.\u0275cmp=r.Xpm({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(e,t){2&e&&r.ekj("_mat-animation-noopable","NoopAnimations"===t._animationMode)},exportAs:["matCard"],ngContentSelectors:c,decls:2,vars:0,template:function(e,t){1&e&&(r.F$t(o),r.Hsn(0),r.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:d,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(e,t){1&e&&(r.F$t(s),r.Hsn(0),r.TgZ(1,"div",0),r.Hsn(2,1),r.qZA(),r.Hsn(3,2))},encapsulation:2,changeDetection:0}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[n.BQ],n.BQ]}),e})()},40994:function(e,t,i){"use strict";i.d(t,{oG:function(){return v},p9:function(){return C}});var a=i(19861),n=i(35366),r=i(31041),o=i(87064),c=i(26136),s=i(27853),d=i(97388);const l=["input"],m=function(){return{enterDuration:150}},h=["*"],u=new n.OlP("mat-checkbox-default-options",{providedIn:"root",factory:p});function p(){return{color:"accent",clickAction:"check-indeterminate"}}let b=0;const k=p(),g={provide:r.JU,useExisting:(0,n.Gpc)(()=>v),multi:!0};class x{}class f{constructor(e){this._elementRef=e}}const _=(0,o.sb)((0,o.pj)((0,o.Kr)((0,o.Id)(f))));let v=(()=>{class e extends _{constructor(e,t,i,a,r,o,c){super(e),this._changeDetectorRef=t,this._focusMonitor=i,this._ngZone=a,this._animationMode=o,this._options=c,this.ariaLabel="",this.ariaLabelledby=null,this._uniqueId="mat-checkbox-"+ ++b,this.id=this._uniqueId,this.labelPosition="after",this.name=null,this.change=new n.vpe,this.indeterminateChange=new n.vpe,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=0,this._controlValueAccessorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||k,this.color=this.defaultColor=this._options.color||k.color,this.tabIndex=parseInt(r)||0}get inputId(){return(this.id||this._uniqueId)+"-input"}get required(){return this._required}set required(e){this._required=(0,a.Ig)(e)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e||Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}),this._syncIndeterminate(this._indeterminate)}ngAfterViewChecked(){}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){const t=(0,a.Ig)(e);t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(e){const t=e!=this._indeterminate;this._indeterminate=(0,a.Ig)(e),t&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_getAriaChecked(){return this.checked?"true":this.indeterminate?"mixed":"false"}_transitionCheckState(e){let t=this._currentCheckState,i=this._elementRef.nativeElement;if(t!==e&&(this._currentAnimationClass.length>0&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);const e=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(e)},1e3)})}}_emitChangeEvent(){const e=new x;e.source=this,e.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(e),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked}_onInputClick(e){var t;const i=null===(t=this._options)||void 0===t?void 0:t.clickAction;e.stopPropagation(),this.disabled||"noop"===i?this.disabled||"noop"!==i||(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==i&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this.toggle(),this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}focus(e,t){e?this._focusMonitor.focusVia(this._inputElement,e,t):this._inputElement.nativeElement.focus(t)}_onInteractionEvent(e){e.stopPropagation()}_getAnimationClassForCheckStateTransition(e,t){if("NoopAnimations"===this._animationMode)return"";let i="";switch(e){case 0:if(1===t)i="unchecked-checked";else{if(3!=t)return"";i="unchecked-indeterminate"}break;case 2:i=1===t?"unchecked-checked":"unchecked-indeterminate";break;case 1:i=2===t?"checked-unchecked":"checked-indeterminate";break;case 3:i=1===t?"indeterminate-checked":"indeterminate-unchecked"}return"mat-checkbox-anim-"+i}_syncIndeterminate(e){const t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.SBq),n.Y36(n.sBO),n.Y36(d.tE),n.Y36(n.R0b),n.$8M("tabindex"),n.Y36(c.Qb,8),n.Y36(u,8))},e.\u0275cmp=n.Xpm({type:e,selectors:[["mat-checkbox"]],viewQuery:function(e,t){if(1&e&&(n.Gf(l,5),n.Gf(o.wG,5)),2&e){let e;n.iGM(e=n.CRH())&&(t._inputElement=e.first),n.iGM(e=n.CRH())&&(t.ripple=e.first)}},hostAttrs:[1,"mat-checkbox"],hostVars:12,hostBindings:function(e,t){2&e&&(n.Ikx("id",t.id),n.uIk("tabindex",null),n.ekj("mat-checkbox-indeterminate",t.indeterminate)("mat-checkbox-checked",t.checked)("mat-checkbox-disabled",t.disabled)("mat-checkbox-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],id:"id",labelPosition:"labelPosition",name:"name",required:"required",checked:"checked",disabled:"disabled",indeterminate:"indeterminate",ariaDescribedby:["aria-describedby","ariaDescribedby"],value:"value"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[n._Bn([g]),n.qOj],ngContentSelectors:h,decls:17,vars:20,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24",0,"xml","space","preserve",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(e,t){if(1&e&&(n.F$t(),n.TgZ(0,"label",0,1),n.TgZ(2,"span",2),n.TgZ(3,"input",3,4),n.NdJ("change",function(e){return t._onInteractionEvent(e)})("click",function(e){return t._onInputClick(e)}),n.qZA(),n.TgZ(5,"span",5),n._UZ(6,"span",6),n.qZA(),n._UZ(7,"span",7),n.TgZ(8,"span",8),n.O4$(),n.TgZ(9,"svg",9),n._UZ(10,"path",10),n.qZA(),n.kcU(),n._UZ(11,"span",11),n.qZA(),n.qZA(),n.TgZ(12,"span",12,13),n.NdJ("cdkObserveContent",function(){return t._onLabelTextChange()}),n.TgZ(14,"span",14),n._uU(15,"\xa0"),n.qZA(),n.Hsn(16),n.qZA(),n.qZA()),2&e){const e=n.MAs(1),i=n.MAs(13);n.uIk("for",t.inputId),n.xp6(2),n.ekj("mat-checkbox-inner-container-no-side-margin",!i.textContent||!i.textContent.trim()),n.xp6(1),n.Q6J("id",t.inputId)("required",t.required)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex),n.uIk("value",t.value)("name",t.name)("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby)("aria-checked",t._getAriaChecked())("aria-describedby",t.ariaDescribedby),n.xp6(2),n.Q6J("matRippleTrigger",e)("matRippleDisabled",t._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",n.DdM(19,m))}},directives:[o.wG,s.wD],styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-ripple{outline:solid 3px}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}\n"],encapsulation:2,changeDetection:0}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[o.si,o.BQ,s.Q8,y],o.BQ,y]}),e})()},7436:function(e,t,i){"use strict";i.d(t,{U0:function(){return C},VQ:function(){return f},Fk:function(){return A}});var a=i(35366),n=i(87064),r=i(19861),o=i(31041),c=i(26136),s=i(97388),d=i(58378);const l=["input"],m=function(){return{enterDuration:150}},h=["*"],u=new a.OlP("mat-radio-default-options",{providedIn:"root",factory:function(){return{color:"accent"}}});let p=0;const b={provide:o.JU,useExisting:(0,a.Gpc)(()=>f),multi:!0};class k{constructor(e,t){this.source=e,this.value=t}}const g=new a.OlP("MatRadioGroup");let x=(()=>{class e{constructor(e){this._changeDetector=e,this._value=null,this._name="mat-radio-group-"+p++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new a.vpe}get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition="before"===e?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,r.Ig)(e),this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=(0,r.Ig)(e),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new k(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.sBO))},e.\u0275dir=a.lG2({type:e,inputs:{name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"}}),e})(),f=(()=>{class e extends x{}return e.\u0275fac=function(){let t;return function(i){return(t||(t=a.n5z(e)))(i||e)}}(),e.\u0275dir=a.lG2({type:e,selectors:[["mat-radio-group"]],contentQueries:function(e,t,i){if(1&e&&a.Suo(i,C,5),2&e){let e;a.iGM(e=a.CRH())&&(t._radios=e)}},hostAttrs:["role","radiogroup",1,"mat-radio-group"],exportAs:["matRadioGroup"],features:[a._Bn([b,{provide:g,useExisting:e}]),a.qOj]}),e})();class _{constructor(e){this._elementRef=e}}const v=(0,n.Kr)((0,n.sb)(_));let y=(()=>{class e extends v{constructor(e,t,i,n,o,c,s,d){super(t),this._changeDetector=i,this._focusMonitor=n,this._radioDispatcher=o,this._animationMode=c,this._providerOverride=s,this._uniqueId="mat-radio-"+ ++p,this.id=this._uniqueId,this.change=new a.vpe,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,d&&(this.tabIndex=(0,r.su)(d,0)),this._removeUniqueSelectionListener=o.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}get checked(){return this._checked}set checked(e){const t=(0,r.Ig)(e);this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(e){this._setDisabled((0,r.Ig)(e))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=(0,r.Ig)(e)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return(this.id||this._uniqueId)+"-input"}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new k(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputChange(e){e.stopPropagation();const t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(x),a.Y36(a.SBq),a.Y36(a.sBO),a.Y36(s.tE),a.Y36(d.A8),a.Y36(String),a.Y36(void 0),a.Y36(String))},e.\u0275dir=a.lG2({type:e,viewQuery:function(e,t){if(1&e&&a.Gf(l,5),2&e){let e;a.iGM(e=a.CRH())&&(t._inputElement=e.first)}},inputs:{id:"id",checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{change:"change"},features:[a.qOj]}),e})(),C=(()=>{class e extends y{constructor(e,t,i,a,n,r,o,c){super(e,t,i,a,n,r,o,c)}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(g,8),a.Y36(a.SBq),a.Y36(a.sBO),a.Y36(s.tE),a.Y36(d.A8),a.Y36(c.Qb,8),a.Y36(u,8),a.$8M("tabindex"))},e.\u0275cmp=a.Xpm({type:e,selectors:[["mat-radio-button"]],hostAttrs:[1,"mat-radio-button"],hostVars:17,hostBindings:function(e,t){1&e&&a.NdJ("focus",function(){return t._inputElement.nativeElement.focus()}),2&e&&(a.uIk("tabindex",null)("id",t.id)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),a.ekj("mat-radio-checked",t.checked)("mat-radio-disabled",t.disabled)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-primary","primary"===t.color)("mat-accent","accent"===t.color)("mat-warn","warn"===t.color))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matRadioButton"],features:[a.qOj],ngContentSelectors:h,decls:13,vars:19,consts:[[1,"mat-radio-label"],["label",""],[1,"mat-radio-container"],[1,"mat-radio-outer-circle"],[1,"mat-radio-inner-circle"],["type","radio",1,"mat-radio-input","cdk-visually-hidden",3,"id","checked","disabled","tabIndex","required","change","click"],["input",""],["mat-ripple","",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-radio-label-content"],[2,"display","none"]],template:function(e,t){if(1&e&&(a.F$t(),a.TgZ(0,"label",0,1),a.TgZ(2,"span",2),a._UZ(3,"span",3),a._UZ(4,"span",4),a.TgZ(5,"input",5,6),a.NdJ("change",function(e){return t._onInputChange(e)})("click",function(e){return t._onInputClick(e)}),a.qZA(),a.TgZ(7,"span",7),a._UZ(8,"span",8),a.qZA(),a.qZA(),a.TgZ(9,"span",9),a.TgZ(10,"span",10),a._uU(11,"\xa0"),a.qZA(),a.Hsn(12),a.qZA(),a.qZA()),2&e){const e=a.MAs(1);a.uIk("for",t.inputId),a.xp6(5),a.Q6J("id",t.inputId)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex)("required",t.required),a.uIk("name",t.name)("value",t.value)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby),a.xp6(2),a.Q6J("matRippleTrigger",e)("matRippleDisabled",t._isRippleDisabled())("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",a.DdM(18,m)),a.xp6(2),a.ekj("mat-radio-label-before","before"==t.labelPosition)}},directives:[n.wG],styles:[".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-ripple,.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-ripple{outline:solid 3px}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],encapsulation:2,changeDetection:0}),e})(),A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[n.si,n.BQ],n.BQ]}),e})()}}]);