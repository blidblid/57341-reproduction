import { NgModule } from '@angular/core';
import { IFeatureComponent } from './i.component';
import { ChildrenSharingModule } from '../../children';

const API = [IFeatureComponent];

@NgModule({
  imports: [ChildrenSharingModule],
  declarations: API,
  exports: API,
})
export class IFeatureModule {}
