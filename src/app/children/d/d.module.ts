import { NgModule } from '@angular/core';
import { DComponent } from './d.component';

const API = [DComponent];

@NgModule({
  declarations: API,
  exports: API,
})
export class DModule {}
