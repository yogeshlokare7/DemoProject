import { AppConfirmService } from './app-confirm.service';
import { 
  MatDialogModule,
  MatButtonModule
 } from '@angular/material';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppConfirmComponent } from './app-confirm.component';

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [AppConfirmComponent],
  declarations: [AppConfirmComponent],
  providers: [AppConfirmService],
  entryComponents: [AppConfirmComponent]
})
export class AppConfirmModule { }