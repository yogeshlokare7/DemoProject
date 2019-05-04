import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack(){
    console.log("", "back")
    this.router.navigateByUrl("/sessions/signin");
  }

}
