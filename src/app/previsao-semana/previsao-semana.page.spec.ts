import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrevisaoSemanaPage } from './previsao-semana.page';

describe('PrevisaoSemanaPage', () => {
  let component: PrevisaoSemanaPage;
  let fixture: ComponentFixture<PrevisaoSemanaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisaoSemanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
