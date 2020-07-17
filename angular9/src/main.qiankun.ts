import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {singleSpaAngular,getSingleSpaExtraProviders } from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode(); 
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  platformBrowserDynamic(getSingleSpaExtraProviders())
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);;
  },
  template: '<app-root />', 
  Router,
  NgZone: NgZone,
});

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}
 
 
export const bootstrap = lifecycles.bootstrap;

export  function mount(props) {
   console.log('[angular9] props from main framework', props);
   storeTest(props);
   lifecycles.mount(props);  
 }

//export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
