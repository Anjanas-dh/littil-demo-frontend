import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentContainerModule} from '../../../components/content-container/content-container.module';
import {AboutUsComponent} from "./about-us.component";
import {ButtonModule} from "../../../components/button/button.module";

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
  },
];

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    ButtonModule,
    CommonModule,
    ContentContainerModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [AboutUsComponent],
  entryComponents: [],
})
export class AboutUsModule {
}
