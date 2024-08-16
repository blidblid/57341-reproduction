import { NgModule } from '@angular/core';
import { GFeatureComponent } from './g.component';
import { ChildrenSharingModule } from '../../children';

const API = [GFeatureComponent];

@NgModule({
  imports: [ChildrenSharingModule],
  declarations: API,
  exports: API,
})
export class GFeatureModule {}
