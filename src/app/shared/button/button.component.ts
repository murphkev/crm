import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<any>();
  @Input() label: string = '';
  @Input() type: string = 'button';
  @Input() class: string = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event: Event): void {
    this.onClick.emit(event);
  }
}
