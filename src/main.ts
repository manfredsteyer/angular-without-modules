import { enableProdMode, ɵrenderComponent as renderComponent } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Alternative: Directly bootstrap AppComponent w/o AppModule
// More Infos: see app.module.ts
// renderComponent(AppComponent, { 
//   rendererFactory: null
// });

