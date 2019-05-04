import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowMaterialComponent } from './row-material.component';

describe('RowMaterialComponent', () => {
  let component: RowMaterialComponent;
  let fixture: ComponentFixture<RowMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
