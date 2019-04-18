import { Component, OnInit } from '@angular/core';

import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //NEW OBJECT



  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    // this._router.navigate(['/seattle'])

  }



}
