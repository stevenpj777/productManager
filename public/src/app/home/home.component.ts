import { Component, OnInit } from '@angular/core';

//ADD THESE TWO
import { Router } from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
  }

}
