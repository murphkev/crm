import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  @Input() entity: any = '';

  constructor() { }

  ngOnInit(): void {
  }

  confirm() {

  }

  close() {

  }

}
