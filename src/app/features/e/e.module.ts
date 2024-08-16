import { NgModule } from '@angular/core';
import { EFeatureComponent } from './e.component';
import { ChildrenSharingModule } from '../../children';

const API = [EFeatureComponent];

@NgModule({
  imports: [ChildrenSharingModule],
  declarations: API,
  exports: API,
})
export class EFeatureModule {}
