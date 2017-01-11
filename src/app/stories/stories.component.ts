import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  item: number[];

  constructor() {
    this.item = Array(30);
  }

  ngOnInit() {

  }

}
