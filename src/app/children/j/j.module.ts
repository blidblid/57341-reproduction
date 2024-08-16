import { NgModule } from '@angular/core';
import { JComponent } from './j.component';

const API = [JComponent];

@NgModule({
  declarations: API,
  exports: API,
})
export class JModule {}
