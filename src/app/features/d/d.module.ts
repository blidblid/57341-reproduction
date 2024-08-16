import { NgModule } from '@angular/core';
import { DFeatureComponent } from './d.component';
import { ChildrenSharingModule } from '../../children';

const API = [DFeatureComponent];

@NgModule({
  imports: [ChildrenSharingModule],
  declarations: API,
  exports: API,
})
export class DFeatureModule {}
