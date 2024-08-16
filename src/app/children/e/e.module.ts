import { NgModule } from '@angular/core';
import { EComponent } from './e.component';

const API = [EComponent];

@NgModule({
  declarations: API,
  exports: API,
})
export class EModule {}
