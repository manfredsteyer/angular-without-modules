import { NgModule } from '@angular/core';
import { TabbedPaneComponent } from './tabbed-pane.component';
import { TabComponent } from './tab.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TabbedPaneComponent,
        TabComponent
    ],
    exports: [
        TabbedPaneComponent,
        TabComponent
    ]
})
export class TabbedPaneModule {
}
