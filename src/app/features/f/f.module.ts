import { NgModule } from '@angular/core';
import { FFeatureComponent } from './f.component';
import { ChildrenSharingModule } from '../../children';

const API = [FFeatureComponent];

@NgModule({
  imports: [ChildrenSharingModule],
  declarations: API,
  exports: API,
})
export class FFeatureModule {}
