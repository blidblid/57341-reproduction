import { NgModule } from '@angular/core';
import { BFeatureComponent } from './b.component';
import { ChildrenSharingModule } from '../../children';

const API = [BFeatureComponent];

@NgModule({
  imports: [ChildrenSharingModule],
  declarations: API,
  exports: API,
})
export class BFeatureModule {}
