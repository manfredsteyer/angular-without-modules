import { Component} from '@angular/core';
import { TabComponent, TabbedPaneComponent } from './tabbed-pane';
import { getDef } from './util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
}




// const def: ComponentDef<AppComponent> = AppComponent['ngComponentDef'];
// console.debug('def', def);

const def = getDef(AppComponent);

def.directiveDefs = [
  getDef(TabComponent), 
  getDef(TabbedPaneComponent)
];

console.debug('AppComponent', def);