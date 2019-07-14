import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabbedPaneModule } from './tabbed-pane/tabbed-pane.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabbedPaneModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
