import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-testgrid',
  templateUrl: './testgrid.component.html',
  styleUrls: ['./testgrid.component.css']
})
export class TestgridComponent implements OnInit {
  pageTitle : string="array_list";
  items = ['item1','item2','item3','item4','item5','item6','item7'];
 

  constructor() { }
  ngOnInit() {
  }



add(myName){
  this.items.push(myName);
  
}
}
