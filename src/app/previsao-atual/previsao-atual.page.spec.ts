import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrevisaoAtualPage } from './previsao-atual.page';

describe('PrevisaoAtualPage', () => {
  let component: PrevisaoAtualPage;
  let fixture: ComponentFixture<PrevisaoAtualPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisaoAtualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
