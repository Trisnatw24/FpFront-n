import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginKasirPage } from './login-kasir.page';

const routes: Routes = [
  {
    path: '',
    component: LoginKasirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginKasirPageRoutingModule {}
