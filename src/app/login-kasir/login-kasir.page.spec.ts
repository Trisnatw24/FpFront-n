import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginKasirPage } from './login-kasir.page';

describe('LoginKasirPage', () => {
  let component: LoginKasirPage;
  let fixture: ComponentFixture<LoginKasirPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginKasirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
