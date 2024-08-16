import { NgModule } from '@angular/core';
import { GComponent } from './g.component';

const API = [GComponent];

@NgModule({
  declarations: API,
  exports: API,
})
export class GModule {}
