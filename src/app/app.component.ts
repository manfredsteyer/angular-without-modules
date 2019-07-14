import { Component} from '@angular/core';
import { TabComponent, TabbedPaneComponent, TABBEND_PANE_COMPONENTS } from './tabbed-pane';
import { getDef, getDefs, ComponentDeps } from './util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@ComponentDeps([
  ...TABBEND_PANE_COMPONENTS
])
export class AppComponent {
  title = 'demo';
}


// const def: ComponentDef<AppComponent> = AppComponent['ngComponentDef'];
// console.debug('def', def);

// const def = getDef(AppComponent);

// def.directiveDefs = [
//   ...getDefs(TABBEND_PANE_COMPONENTS)
// ];

// console.debug('AppComponent', def);