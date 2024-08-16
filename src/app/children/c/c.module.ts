import { NgModule } from '@angular/core';
import { CComponent } from './c.component';

const API = [CComponent];

@NgModule({
  declarations: API,
  exports: API,
})
export class CModule {}
