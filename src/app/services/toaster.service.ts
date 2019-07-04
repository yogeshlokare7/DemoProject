import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

constructor(private snackBar: MatSnackBar) { }

  showToaster(message: string, action: string, duration:number):void{
    console.log("------------------------------"+message)
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }

  openSuccessSnackBar(message: string,action: string, duration:number) {
    this.snackBar.open(message, action, {
      panelClass: ['mat--success'],
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      duration: duration
    });
  }

  openErrorSnackBar(message: string,action: string, duration:number) {
    this.snackBar.open(message, action, {
      panelClass: ['mat--errors'],
      verticalPosition: 'bottom',
      horizontalPosition: 'right', 
      duration: duration
    });
  }


}


