import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Role } from 'src/app/models/role';
import { TbsmError } from 'src/app/models/tbsm-error';
import { ToasterService } from 'src/app/services/toaster.service';
import { RoleService } from 'src/app/services/role.service';
import { FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  role = new Role();
  title = "Add";
  test: boolean;
  expError = new TbsmError();
  disableButton: boolean;
  
  constructor(
    public dialogRef: MatDialogRef<AddRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private roleService:RoleService,
    private dialog:MatDialog,
    private toasterService: ToasterService) {
      this.disableButton = false;
     }

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    if(this.data != null) {
      this.role = this.data.role;
      this.title = "Update";
    }else{
      this.role.status="Y";
    }
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  public confirmAdd(): void {
    this.disableButton = true;
    this.roleService.addRole(this.role).subscribe(data => {
      this.dialogRef.close(data);
      this.disableButton = false;
    }, (err: HttpErrorResponse) => {
      this.disableButton = false;
      this.expError = err.error;
    });
  }
}

