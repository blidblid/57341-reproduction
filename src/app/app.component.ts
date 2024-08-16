import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildrenSharingModule } from './children/children-sharing.module';
import {
  AFeatureModule,
  BFeatureModule,
  CFeatureModule,
  DFeatureModule,
  EFeatureModule,
  FFeatureModule,
  GFeatureModule,
  HFeatureModule,
  IFeatureModule,
  JFeatureModule,
  KFeatureModule,
} from './features';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AFeatureModule,
    BFeatureModule,
    CFeatureModule,
    DFeatureModule,
    EFeatureModule,
    FFeatureModule,
    GFeatureModule,
    HFeatureModule,
    IFeatureModule,
    JFeatureModule,
    KFeatureModule,
    ChildrenSharingModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '57341-reproduction';
}
