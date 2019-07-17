import { Type } from "@angular/core";

import { ɵComponentDef as ComponentDef } from '@angular/core';
import { ɵDirectiveDef as DirectiveDef } from '@angular/core';
import { ɵPipeDef as PipeDef } from '@angular/core';

export function getComponentDef<T>(t: Type<T>): ComponentDef<T> {
  if (t['ngComponentDef']) {
    return t['ngComponentDef'] as ComponentDef<T>;
  }

  throw new Error('No Angular definition found for ' + t.name);
}

export function getDirectiveDef<T>(t: Type<T>): DirectiveDef<T> {
 
    if (t['ngDirectiveDef']) {
      return t['ngDirectiveDef'] as DirectiveDef<T>;
    }

    // A Component(Def) is also a Directive(Def)
    if (t['ngComponentDef']) {
      return t['ngComponentDef'] as ComponentDef<T>;
    }

    throw new Error('No Angular definition found for ' + t.name);
}

export function getPipeDef<T>(t: Type<T>): PipeDef<T> {
 
  if (t['ngPipeDef']) {
    return t['ngPipeDef'] as PipeDef<T>;
  }

  throw new Error('No Angular definition found for ' + t.name);
}

export function getDirectiveDefs(types: Type<any>[]): DirectiveDef<any>[] {
  return types.map(t => getDirectiveDef(t));
}

export function getPipeDefs(types: Type<any>[]): PipeDef<any>[] {
  return types.map(t => getPipeDef(t));
}