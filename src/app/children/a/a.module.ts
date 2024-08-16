import { NgModule } from '@angular/core';
import { AComponent } from './a.component';

const API = [AComponent];

@NgModule({
  declarations: API,
  exports: API,
})
export class AModule {}
