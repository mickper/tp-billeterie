import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {HOME_ROUTES} from "./home.routes";

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(HOME_ROUTES)],
})
export class HomeRoutingModule {
}
