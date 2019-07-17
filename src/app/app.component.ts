import { Component} from '@angular/core';
import { TabComponent, TabbedPaneComponent, TABBEND_PANE_COMPONENTS } from './tabbed-pane';
import { getComponentDef, getDirectiveDef, getDirectiveDefs } from './util';

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

const def = getComponentDef(AppComponent);

def.directiveDefs = [
  getDirectiveDef(TabComponent), 
  getDirectiveDef(TabbedPaneComponent)
];

// Alternative

def.directiveDefs = [
  ...getDirectiveDefs(TABBEND_PANE_COMPONENTS)
];

console.debug('AppComponent', def);