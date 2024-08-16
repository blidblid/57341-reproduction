import { NgModule } from '@angular/core';
import { KFeatureComponent } from './k.component';
import { ChildrenSharingModule } from '../../children';

const API = [KFeatureComponent];

@NgModule({
  imports: [ChildrenSharingModule],
  declarations: API,
  exports: API,
})
export class KFeatureModule {}
