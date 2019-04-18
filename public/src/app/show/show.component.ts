import { Component, OnInit } from '@angular/core';

//ADD THESE TWO
import { Router } from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
  }

}
