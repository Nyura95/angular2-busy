/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './busy.component';
import * as import3 from './promise-tracker.service';
const styles_BusyComponent:any[] = ([] as any[]);
export const RenderType_BusyComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_BusyComponent,
      data: {'animation': [{
        name: 'flyInOut',
        definitions: [
          {
            type: 1,
            expr: 'void => *',
            animation: [
              {
                type: 6,
                styles: {
                  opacity: 0,
                  transform: 'translateY(-40px)'
                }

              }
              ,
              {
                type: 4,
                styles: (null as any),
                timings: '.3s ease'
              }

            ]

          }
          ,
          {
            type: 1,
            expr: '* => void',
              animation: [{
                type: 4,
                styles: {
                  type: 6,
                  styles: {
                    opacity: 0,
                    transform: 'translateY(-40px)'
                  }

                }
                ,
                timings: '.3s ease'
              }
            ]
          }

        ]

      }
  ]}
}
);
function View_BusyComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[(l()(),import0.ɵeld(0,(null as any),(null as any),0,(null as any),(null as any),(null as any),(null as any),(null as any),(null as any),(null as any)))],(null as any),(null as any));
}
function View_BusyComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',([] as any[]),[
      [
        8,
        'className',
        0
      ]
      ,
      [
        24,
        '@flyInOut',
        0
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_BusyComponent_2)),
    import0.ɵdid(335872,(null as any),0,import1.NgComponentOutlet,[import0.ViewContainerRef],{
      ngComponentOutlet: [
        0,
        'ngComponentOutlet'
      ]
      ,
      ngComponentOutletNgModuleFactory: [
        1,
        'ngComponentOutletNgModuleFactory'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_2:any = co.TemplateComponent;
    const currVal_3:any = co.nmf;
    ck(v,3,0,currVal_2,currVal_3);
  },(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.wrapperClass;
    const currVal_1:any = (null as any);
    ck(v,0,0,currVal_0,currVal_1);
  });
}
export function View_BusyComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_BusyComponent_1)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:import2.BusyComponent = v.component;
    const currVal_0:any = co.isActive();
    ck(v,2,0,currVal_0);
  },(null as any));
}
function View_BusyComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'ng-busy',([] as any[]),(null as any),(null as any),(null as any),View_BusyComponent_0,RenderType_BusyComponent)),
    import0.ɵdid(155648,(null as any),0,import2.BusyComponent,[
      import3.PromiseTrackerService,
      import0.Compiler
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const BusyComponentNgFactory:import0.ComponentFactory<import2.BusyComponent> = import0.ɵccf('ng-busy',import2.BusyComponent,View_BusyComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL292aWxpYS9Xb3JrcGxhY2UveXVtYW8vZGV2L2FuZ3VsYXIyLWJ1c3kvYnVpbGQvYnVzeS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvb3ZpbGlhL1dvcmtwbGFjZS95dW1hby9kZXYvYW5ndWxhcjItYnVzeS9idWlsZC9idXN5LmNvbXBvbmVudC5kLnRzIiwibmc6Ly8vVXNlcnMvb3ZpbGlhL1dvcmtwbGFjZS95dW1hby9kZXYvYW5ndWxhcjItYnVzeS9idWlsZC9idXN5LmNvbXBvbmVudC5kLnRzLkJ1c3lDb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL292aWxpYS9Xb3JrcGxhY2UveXVtYW8vZGV2L2FuZ3VsYXIyLWJ1c3kvYnVpbGQvYnVzeS5jb21wb25lbnQuZC50cy5CdXN5Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgICAgIDxkaXYgW2NsYXNzXT1cIndyYXBwZXJDbGFzc1wiICpuZ0lmPVwiaXNBY3RpdmUoKVwiIEBmbHlJbk91dD5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiVGVtcGxhdGVDb21wb25lbnQ7IG5nTW9kdWxlRmFjdG9yeTogbm1mO1wiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAiLCI8bmctYnVzeT48L25nLWJ1c3k+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJDRVk7Ozs7SUFESjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQXlEO0lBQ3JEO2dCQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUEyRjs7OztJQUE3RTtJQUFBO0lBQWQsU0FBYyxtQkFBZDs7O0lBREM7SUFBMEM7SUFBL0MsU0FBSyxVQUEwQyxTQUEvQzs7Ozs7SUFEUjtJQUNRO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFFTTs7OztJQUZzQjtJQUE1QixTQUE0QixTQUE1Qjs7Ozs7SUNEUjtnQkFBQTs7O0lBQUE7S0FBQTs7O0lBQUE7OzsifQ==