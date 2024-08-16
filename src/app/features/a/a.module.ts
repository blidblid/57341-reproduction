import { NgModule } from '@angular/core';
import { AFeatureComponent } from './a.component';
import { ChildrenSharingModule } from '../../children';

const API = [AFeatureComponent];

@NgModule({
  imports: [ChildrenSharingModule],
  declarations: API,
  exports: API,
})
export class AFeatureModule {}
