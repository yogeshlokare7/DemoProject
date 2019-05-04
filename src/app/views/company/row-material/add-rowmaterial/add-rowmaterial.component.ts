import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RawMaterial } from 'src/app/models/raw-material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-rowmaterial',
  templateUrl: './add-rowmaterial.component.html',
  styleUrls: ['./add-rowmaterial.component.css']
})
export class AddRowMaterialComponent implements OnInit {

  rawMaterial = new RawMaterial();
  title="Add";
  materialForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddRowMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder) { }

  ngOnInit() {
    if(this.data!=null){
      if(this.data.material!=null){
        this.rawMaterial = this.data.product;
        this.title = "Edit";
      }
    }
    this.createForm();
  }

  createForm(){
    this.materialForm = this.fb.group({
      materialid: ['', Validators.required],
      materialname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      unit: ['', Validators.required],
      price: ['', Validators.required],
      openingStock: ['', Validators.required],
      reorderLevel: ['', Validators.required],
      status: ['', Validators.required , ]
    })
  }

  get materialId(){
    return this.materialForm.get('materialId');
  }

  get materialname(){
    return this.materialForm.get('materialname');
  }

  get unit(){
    return this.materialForm.get('unit');
  }

  get price(){
    return this.materialForm.get('price');
  }

  get openingstock(){
    return this.materialForm.get('openingstock');
  }

  get reorderlevel(){
    return this.materialForm.get('reorderlevel');
  }

  get status(){
    return this.materialForm.get('status');
  }



  onNoClick(): void {
    this.dialogRef.close(false);
  }

 onSubmit(){

  }

}

