import { Component, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { TabComponent } from './tab.component';
import { ComponentDeps } from '../util';
import { COMMON_DIRECTIVES } from '../common';

@Component({
    selector: 'tabbed-pane',
    exportAs: 'flightTabbedPane',
    styles: [`
        .tabbed-pane {
            background-color:#f7ecb5;
            padding:20px;
        }

        a {
            cursor:pointer;
            text-decoration: underline;
        }
    `],
    template: `
        <div class="tabbed-pane">
            <span *ngFor="let tab of tabs" style="padding-right:20px;">
                <a (click)="activate(tab)">{{tab.title}}</a>
            </span>

            <ng-content></ng-content>
        </div>
    `
})
@ComponentDeps({
    directives: [
        ...COMMON_DIRECTIVES        
    ]
})
export class TabbedPaneComponent implements AfterContentInit {

    tabs: Array<TabComponent> = [];
    @Input() currentPage: number = 0;
    @Output() currentPageChange = new EventEmitter<number>();

    get tabsCount() {
        if (!this.tabs) {
            return 0;
        }
        return this.tabs.length;
    }

    public register(tab: TabComponent) {
        this.tabs.push(tab);
    }

    public activate(active: TabComponent) {
        for (const tab of this.tabs) {
            tab.visible = (tab === active);
        }
        this.currentPage = this.tabs.indexOf(active);
        this.currentPageChange.next(this.currentPage);
    }

    public activatePage(pageNumber: number) {
        this.currentPage = pageNumber;
        this.activate(this.tabs[pageNumber]);
    }

    ngAfterContentInit() {
        if (this.tabs.length === 0) {
            return;
        }
        this.activate(this.tabs[this.currentPage]);
    }
}
