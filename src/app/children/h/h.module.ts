import { NgModule } from '@angular/core';
import { HComponent } from './h.component';

const API = [HComponent];

@NgModule({
  declarations: API,
  exports: API,
})
export class HModule {}
