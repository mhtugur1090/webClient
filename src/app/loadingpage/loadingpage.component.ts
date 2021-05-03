import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadingpage',
  templateUrl: './loadingpage.component.html',
  styleUrls: ['./loadingpage.component.css']
})
export class LoadingpageComponent implements OnInit {


  constructor() { }

  @Input()
  loading?:boolean;

  ngOnInit() {
  }

}
