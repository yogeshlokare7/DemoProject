import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRowMaterialComponent } from './add-rowmaterial.component';


describe('AddRowmaterialComponent', () => {
  let component: AddRowMaterialComponent;
  let fixture: ComponentFixture<AddRowMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRowMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRowMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
