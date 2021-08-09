import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output()
  propagate = new EventEmitter<string>();
  searchText:string='';
  constructor() { }

  ngOnInit(): void {
  
  }
  onPropagate(){
    this.propagate.emit(this.searchText);
  }

}
