import { NgModule } from '@angular/core';
import { KComponent } from './k.component';

const API = [KComponent];

@NgModule({
  declarations: API,
  exports: API,
})
export class KModule {}
