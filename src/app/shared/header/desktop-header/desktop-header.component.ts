import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss']
})
export class DesktopHeaderComponent implements OnInit {
  @Output()
  propagate = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  processPropagate(searchText:string) {
    this.propagate.emit(searchText);
  }
  
}
