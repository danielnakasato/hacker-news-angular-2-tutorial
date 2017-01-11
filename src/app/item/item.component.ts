import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item;

  constructor() {}

  ngOnInit() {
    // this._hackerNewsAPIService.fetchItem(this.itemID).subscribe(data => {
    //   this.item = data;
    // }, error => console.log('Could not load item' + this.itemID));
  }
}
