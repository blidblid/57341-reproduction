import { NgModule } from '@angular/core';
import { CFeatureComponent } from './c.component';
import { ChildrenSharingModule } from '../../children';

const API = [CFeatureComponent];

@NgModule({
  imports: [ChildrenSharingModule],
  declarations: API,
  exports: API,
})
export class CFeatureModule {}
