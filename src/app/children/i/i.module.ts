import { NgModule } from '@angular/core';
import { IComponent } from './i.component';

const API = [IComponent];

@NgModule({
  declarations: API,
  exports: API,
})
export class IModule {}
