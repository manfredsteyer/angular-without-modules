import { Type } from "@angular/core";
import { ɵComponentDef as ComponentDef } from '@angular/core';

export function getDef<T>(t: Type<T>): ComponentDef<T> {
    if (t['ngComponentDef']) {
      return t['ngComponentDef'] as ComponentDef<T>;
    }
  
    if (t['ngDirectiveDef']) {
      return t['ngDirectiveDef'] as ComponentDef<T>;
    }
  
    throw new Error('No Angular definition found for ' + t.name);
}

export function getDefs(types: Type<any>[]): ComponentDef<any>[] {
  return types.map(t => getDef(t));
}