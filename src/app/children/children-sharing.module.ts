import { NgModule } from '@angular/core';
import { AModule } from './a';
import { CModule } from './c';
import { DModule } from './d';
import { EModule } from './e';
import { FModule } from './f';
import { GModule } from './g';
import { KModule } from './k';
import { BModule } from './b';
import { HModule } from './h';
import { IModule } from './i';
import { JModule } from './j';

const API = [
  AModule,
  BModule,
  CModule,
  DModule,
  EModule,
  FModule,
  GModule,
  HModule,
  IModule,
  JModule,
  KModule,
];

@NgModule({
  imports: API,
  exports: API,
})
export class ChildrenSharingModule {}
