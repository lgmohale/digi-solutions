import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {

  active = "home";
  stage = 1;
  constructor() { }

  ngOnInit() {
  }

  next() {
    this.stage = this.stage + 1;
  }

  // back() {
  //   this.stage = this.stage - 1;
  //   if (this.stage < 1) {
  //     this.stage = 1;
  //   }

  //   if (this.stage > 5) {
  //     this.stage = 5;
  //   }
  // }

  menu(params: string) {
    switch (params) {
      case 'home':
        this.active = 'home';
        break;
      case 'application':
        this.active = 'application';
        break;
      case 'accommodation':
        this.active = 'accommodation';
        break;
      case 'funding':
        this.active = 'funding';
        break;
      default:
        this.active = 'documents';
    }
  }

  applicationStatus() {
    let status = "Personal Details";
    if (this.stage === 1) {
      status = "Personal Details";
    } else if (this.stage === 2) {
      status = "Select course";
    } else if (this.stage === 3) {
      status = "Upload documents";
    } else {
      status = "Admission status";
    }
    return status;
  }

}
