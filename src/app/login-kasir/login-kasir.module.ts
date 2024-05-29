import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginKasirPageRoutingModule } from './login-kasir-routing.module';

import { LoginKasirPage } from './login-kasir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginKasirPageRoutingModule
  ],
  declarations: [LoginKasirPage]
})
export class LoginKasirPageModule {}
