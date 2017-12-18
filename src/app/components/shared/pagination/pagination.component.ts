import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Paging} from '../../../models/users.models';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() paging: Paging;
  @Input() label = '';
  @Output() pageClicked = new EventEmitter();
  pageNumbers: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.paging) {
      this.pageNumbers = Array.from(Array(this.paging.totalPages), (x, i) => i + 1);
    }
  }

  pageNumberClicked($event, pageNumber) {
    $event.stopPropagation();
    $event.preventDefault();
    this.pageClicked.emit(pageNumber);
  }
}
