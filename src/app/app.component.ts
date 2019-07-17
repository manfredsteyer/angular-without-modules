import { Component} from '@angular/core';
import { TABBEND_PANE_COMPONENTS } from './tabbed-pane';
import { ComponentDeps } from './util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@ComponentDeps({
  directives: [ 
    ...TABBEND_PANE_COMPONENTS
  ]
})
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