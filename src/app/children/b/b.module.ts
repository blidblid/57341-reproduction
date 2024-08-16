import { NgModule } from '@angular/core';
import { BComponent } from './b.component';

const API = [BComponent];

@NgModule({
  declarations: API,
  exports: API,
})
export class BModule {}
