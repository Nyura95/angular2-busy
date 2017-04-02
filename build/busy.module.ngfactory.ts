/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './busy.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/platform-browser';
import * as import4 from '@angular/platform-browser/animations';
import * as import5 from './busy.service';
import * as import6 from './busy.component.ngfactory';
import * as import7 from './busy-backdrop.component.ngfactory';
import * as import8 from './busy-config';
import * as import9 from '@angular/animations/browser';
class BusyModuleInjector extends import0.ɵNgModuleInjector<import1.BusyModule> {
  _CommonModule_0:import2.CommonModule;
  _ErrorHandler_1:any;
  _APP_INITIALIZER_2:any[];
  _ApplicationInitStatus_3:import0.ApplicationInitStatus;
  _ɵf_4:import0.ɵf;
  _ApplicationRef_5:any;
  _ApplicationModule_6:import0.ApplicationModule;
  _BrowserModule_7:import3.BrowserModule;
  _BrowserAnimationsModule_8:import4.BrowserAnimationsModule;
  _BusyModule_9:import1.BusyModule;
  __LOCALE_ID_10:any;
  __NgLocalization_11:import2.NgLocaleLocalization;
  __Compiler_12:import0.Compiler;
  __APP_ID_13:any;
  __IterableDiffers_14:any;
  __KeyValueDiffers_15:any;
  __DomSanitizer_16:import3.ɵe;
  __Sanitizer_17:any;
  __HAMMER_GESTURE_CONFIG_18:import3.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_19:any[];
  __EventManager_20:import3.EventManager;
  __ɵDomSharedStylesHost_21:import3.ɵDomSharedStylesHost;
  __ɵDomRendererFactory2_22:import3.ɵDomRendererFactory2;
  __AnimationDriver_23:any;
  __ɵAnimationStyleNormalizer_24:any;
  __ɵAnimationEngine_25:import4.ɵa;
  __RendererFactory2_26:any;
  __ɵSharedStylesHost_27:any;
  __Testability_28:import0.Testability;
  __Meta_29:import3.Meta;
  __Title_30:import3.Title;
  __BusyService_31:import5.BusyService;
  constructor(parent:import0.Injector) {
    super(parent,[
      import6.BusyComponentNgFactory,
      import7.BusyBackdropComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _LOCALE_ID_10():any {
    if ((this.__LOCALE_ID_10 == null)) { (this.__LOCALE_ID_10 = import0.ɵn(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_10;
  }
  get _NgLocalization_11():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_11 == null)) { (this.__NgLocalization_11 = new import2.NgLocaleLocalization(this._LOCALE_ID_10)); }
    return this.__NgLocalization_11;
  }
  get _Compiler_12():import0.Compiler {
    if ((this.__Compiler_12 == null)) { (this.__Compiler_12 = new import0.Compiler()); }
    return this.__Compiler_12;
  }
  get _APP_ID_13():any {
    if ((this.__APP_ID_13 == null)) { (this.__APP_ID_13 = import0.ɵg()); }
    return this.__APP_ID_13;
  }
  get _IterableDiffers_14():any {
    if ((this.__IterableDiffers_14 == null)) { (this.__IterableDiffers_14 = import0.ɵl()); }
    return this.__IterableDiffers_14;
  }
  get _KeyValueDiffers_15():any {
    if ((this.__KeyValueDiffers_15 == null)) { (this.__KeyValueDiffers_15 = import0.ɵm()); }
    return this.__KeyValueDiffers_15;
  }
  get _DomSanitizer_16():import3.ɵe {
    if ((this.__DomSanitizer_16 == null)) { (this.__DomSanitizer_16 = new import3.ɵe(this.parent.get(import3.DOCUMENT))); }
    return this.__DomSanitizer_16;
  }
  get _Sanitizer_17():any {
    if ((this.__Sanitizer_17 == null)) { (this.__Sanitizer_17 = this._DomSanitizer_16); }
    return this.__Sanitizer_17;
  }
  get _HAMMER_GESTURE_CONFIG_18():import3.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_18 == null)) { (this.__HAMMER_GESTURE_CONFIG_18 = new import3.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_18;
  }
  get _EVENT_MANAGER_PLUGINS_19():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_19 == null)) { (this.__EVENT_MANAGER_PLUGINS_19 = [
      new import3.ɵDomEventsPlugin(this.parent.get(import3.DOCUMENT)),
      new import3.ɵKeyEventsPlugin(this.parent.get(import3.DOCUMENT)),
      new import3.ɵHammerGesturesPlugin(this.parent.get(import3.DOCUMENT),this._HAMMER_GESTURE_CONFIG_18)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_19;
  }
  get _EventManager_20():import3.EventManager {
    if ((this.__EventManager_20 == null)) { (this.__EventManager_20 = new import3.EventManager(this._EVENT_MANAGER_PLUGINS_19,this.parent.get(import0.NgZone))); }
    return this.__EventManager_20;
  }
  get _ɵDomSharedStylesHost_21():import3.ɵDomSharedStylesHost {
    if ((this.__ɵDomSharedStylesHost_21 == null)) { (this.__ɵDomSharedStylesHost_21 = new import3.ɵDomSharedStylesHost(this.parent.get(import3.DOCUMENT))); }
    return this.__ɵDomSharedStylesHost_21;
  }
  get _ɵDomRendererFactory2_22():import3.ɵDomRendererFactory2 {
    if ((this.__ɵDomRendererFactory2_22 == null)) { (this.__ɵDomRendererFactory2_22 = new import3.ɵDomRendererFactory2(this._EventManager_20,this._ɵDomSharedStylesHost_21)); }
    return this.__ɵDomRendererFactory2_22;
  }
  get _AnimationDriver_23():any {
    if ((this.__AnimationDriver_23 == null)) { (this.__AnimationDriver_23 = import4.ɵb()); }
    return this.__AnimationDriver_23;
  }
  get _ɵAnimationStyleNormalizer_24():any {
    if ((this.__ɵAnimationStyleNormalizer_24 == null)) { (this.__ɵAnimationStyleNormalizer_24 = import4.ɵc()); }
    return this.__ɵAnimationStyleNormalizer_24;
  }
  get _ɵAnimationEngine_25():import4.ɵa {
    if ((this.__ɵAnimationEngine_25 == null)) { (this.__ɵAnimationEngine_25 = new import4.ɵa(this._AnimationDriver_23,this._ɵAnimationStyleNormalizer_24)); }
    return this.__ɵAnimationEngine_25;
  }
  get _RendererFactory2_26():any {
    if ((this.__RendererFactory2_26 == null)) { (this.__RendererFactory2_26 = import4.ɵd(this._ɵDomRendererFactory2_22,this._ɵAnimationEngine_25,this.parent.get(import0.NgZone))); }
    return this.__RendererFactory2_26;
  }
  get _ɵSharedStylesHost_27():any {
    if ((this.__ɵSharedStylesHost_27 == null)) { (this.__ɵSharedStylesHost_27 = this._ɵDomSharedStylesHost_21); }
    return this.__ɵSharedStylesHost_27;
  }
  get _Testability_28():import0.Testability {
    if ((this.__Testability_28 == null)) { (this.__Testability_28 = new import0.Testability(this.parent.get(import0.NgZone))); }
    return this.__Testability_28;
  }
  get _Meta_29():import3.Meta {
    if ((this.__Meta_29 == null)) { (this.__Meta_29 = new import3.Meta(this.parent.get(import3.DOCUMENT))); }
    return this.__Meta_29;
  }
  get _Title_30():import3.Title {
    if ((this.__Title_30 == null)) { (this.__Title_30 = new import3.Title(this.parent.get(import3.DOCUMENT))); }
    return this.__Title_30;
  }
  get _BusyService_31():import5.BusyService {
    if ((this.__BusyService_31 == null)) { (this.__BusyService_31 = new import5.BusyService(this.parent.get(import8.BusyConfig,(null as any)))); }
    return this.__BusyService_31;
  }
  createInternal():import1.BusyModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ErrorHandler_1 = import3.ɵa();
    this._APP_INITIALIZER_2 = [
      import0.ɵo,
      import3.ɵc(this.parent.get(import3.NgProbeToken,(null as any)),this.parent.get(import0.NgProbeToken,(null as any)))
    ]
    ;
    this._ApplicationInitStatus_3 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_2);
    this._ɵf_4 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3);
    this._ApplicationRef_5 = this._ɵf_4;
    this._ApplicationModule_6 = new import0.ApplicationModule(this._ApplicationRef_5);
    this._BrowserModule_7 = new import3.BrowserModule(this.parent.get(import3.BrowserModule,(null as any)));
    this._BrowserAnimationsModule_8 = new import4.BrowserAnimationsModule();
    this._BusyModule_9 = new import1.BusyModule();
    return this._BusyModule_9;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_1; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_2; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_3; }
    if ((token === import0.ɵf)) { return this._ɵf_4; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_5; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_6; }
    if ((token === import3.BrowserModule)) { return this._BrowserModule_7; }
    if ((token === import4.BrowserAnimationsModule)) { return this._BrowserAnimationsModule_8; }
    if ((token === import1.BusyModule)) { return this._BusyModule_9; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_10; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_11; }
    if ((token === import0.Compiler)) { return this._Compiler_12; }
    if ((token === import0.APP_ID)) { return this._APP_ID_13; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_14; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_15; }
    if ((token === import3.DomSanitizer)) { return this._DomSanitizer_16; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_17; }
    if ((token === import3.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_18; }
    if ((token === import3.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_19; }
    if ((token === import3.EventManager)) { return this._EventManager_20; }
    if ((token === import3.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_21; }
    if ((token === import3.ɵDomRendererFactory2)) { return this._ɵDomRendererFactory2_22; }
    if ((token === import9.AnimationDriver)) { return this._AnimationDriver_23; }
    if ((token === import9.ɵAnimationStyleNormalizer)) { return this._ɵAnimationStyleNormalizer_24; }
    if ((token === import9.ɵAnimationEngine)) { return this._ɵAnimationEngine_25; }
    if ((token === import0.RendererFactory2)) { return this._RendererFactory2_26; }
    if ((token === import3.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_27; }
    if ((token === import0.Testability)) { return this._Testability_28; }
    if ((token === import3.Meta)) { return this._Meta_29; }
    if ((token === import3.Title)) { return this._Title_30; }
    if ((token === import5.BusyService)) { return this._BusyService_31; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_4.ngOnDestroy();
    (this.__ɵDomSharedStylesHost_21 && this._ɵDomSharedStylesHost_21.ngOnDestroy());
  }
}
export const BusyModuleNgFactory:import0.NgModuleFactory<import1.BusyModule> = new import0.NgModuleFactory<any>(BusyModuleInjector,import1.BusyModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL292aWxpYS9Xb3JrcGxhY2UveXVtYW8vZGV2L2FuZ3VsYXIyLWJ1c3kvYnVpbGQvYnVzeS5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvb3ZpbGlhL1dvcmtwbGFjZS95dW1hby9kZXYvYW5ndWxhcjItYnVzeS9idWlsZC9idXN5Lm1vZHVsZS5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9