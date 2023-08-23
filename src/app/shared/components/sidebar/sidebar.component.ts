import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() name: string = '';
  constructor() {}
  ngOnInit(): void {
    // if(this.name == ''){
    //   this.name = 'Brinto'
    // }
  }
}
