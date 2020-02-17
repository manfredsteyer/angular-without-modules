import { Type } from "@angular/core";

import { 
  ɵComponentDef as ComponentDef, 
  ɵDirectiveDef as DirectiveDef,
  ɵPipeDef as PipeDef,
} from '@angular/core';

export function getComponentDef<T>(t: Type<T>): ComponentDef<T> {
  if (t['ɵcmp']) {
    return t['ɵcmp'] as ComponentDef<T>;
  }

  throw new Error('No Angular definition found for ' + t.name);
}

export function getDirectiveDef<T>(t: Type<T>): DirectiveDef<T> {
    if (t['ɵdir']) {
      return t['ɵdir'] as DirectiveDef<T>;
    }

    // A Component(Def) is also a Directive(Def)
    if (t['ɵcmp']) {
      return t['ɵcmp'] as ComponentDef<T>;
    }

    throw new Error('No Angular definition found for ' + t.name);
}

export function getPipeDef<T>(t: Type<T>): PipeDef<T> {
  if (t['ɵpipe']) {
    return t['ɵpipe'] as PipeDef<T>;
  }

  throw new Error('No Angular definition found for ' + t.name);
}

export function getDirectiveDefs(types: Type<any>[]): DirectiveDef<any>[] {
  return types.map(t => getDirectiveDef(t));
}

export function getPipeDefs(types: Type<any>[]): PipeDef<any>[] {
  return types.map(t => getPipeDef(t));
}

export interface ComponentDepsConfig {
  directives?: Type<any>[];
  pipes?: Type<any>[];
}

export function ComponentDeps(config: ComponentDepsConfig) {
  return (component) => {

    const def = getComponentDef(component);

    def.directiveDefs = [
      ...getDirectiveDefs(config.directives || [])
    ];

    def.pipeDefs = [
      ...getPipeDefs(config.pipes || [])
    ];

  }
}