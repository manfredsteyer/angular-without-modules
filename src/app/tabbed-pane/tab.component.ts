import { Component, OnInit, Input, Optional } from '@angular/core';
import { TabbedPaneComponent } from './tabbed-pane.component';
import { getComponentDef, getDirectiveDef, getPipeDefs } from '../util';
import { NgIf, NgForOf } from '@angular/common';

import { ɵComponentDef as ComponentDef } from '@angular/core';
import { COMMON_PIPES } from '../common';

@Component({
    selector: 'tab',
    template: `
        <div *ngIf="visible">
            <h2>{{title}}</h2>
            <ng-content></ng-content>
        </div>
    `
})
export class TabComponent implements OnInit {
    public visible: boolean = false;
    @Input() public title: string;

    constructor(@Optional() public tabs: TabbedPaneComponent) {
    }

    ngOnInit() {
        if (this.tabs) {
            this.tabs.register(this);
        }
    }
}

const compDef = TabComponent['ngComponentDef'] as ComponentDef<TabComponent>;
console.debug('compDef', compDef);

const def = getComponentDef(TabComponent);

def.directiveDefs = [
    getDirectiveDef(NgIf),
    getDirectiveDef(NgForOf)
];

def.pipeDefs = [
    ...getPipeDefs(COMMON_PIPES)
];