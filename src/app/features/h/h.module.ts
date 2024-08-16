import { NgModule } from '@angular/core';
import { HFeatureComponent } from './h.component';
import { ChildrenSharingModule } from '../../children';

const API = [HFeatureComponent];

@NgModule({
  imports: [ChildrenSharingModule],
  declarations: API,
  exports: API,
})
export class HFeatureModule {}
