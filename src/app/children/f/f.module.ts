import { NgModule } from '@angular/core';
import { FComponent } from './f.component';

const API = [FComponent];

@NgModule({
  declarations: API,
  exports: API,
})
export class FModule {}
