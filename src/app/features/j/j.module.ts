import { NgModule } from '@angular/core';
import { JFeatureComponent } from './j.component';
import { ChildrenSharingModule } from '../../children';

const API = [JFeatureComponent];

@NgModule({
  imports: [ChildrenSharingModule],
  declarations: API,
  exports: API,
})
export class JFeatureModule {}
