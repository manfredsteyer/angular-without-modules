import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//
// We can even get rid of the app module 
// by directly bootstrapping the AppComponent
// with renderComponent.
//
// However, at the time of writing this, there
// have been some limitations when using
// renderComponents, hence I've decided to 
// bootstrap in this traditional way.
//
// Please note that the AppModule just points
// to the AppComponent. Everything else is used
// in an module-less way.
//

@NgModule({
   imports: [
      BrowserModule
   ],
   declarations: [
      AppComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
