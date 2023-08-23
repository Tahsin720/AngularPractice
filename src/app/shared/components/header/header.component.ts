import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSide: EventEmitter<boolean> = new EventEmitter();
  Name: string = '';
  flag = false;
  constructor() {}
  ngOnInit(): void {}
  toggleSidebar(): void {
    if(this.flag){
      this.flag = false;
      this.Name = 'Brinto is';
    }else{
      this.flag = true;
      this.Name = '';
    }
    this.toggleSide.emit();
  }
}
