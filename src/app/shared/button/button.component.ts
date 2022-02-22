import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<any>();
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() type: string = 'button';
  @Input() class: string = 'primary';
  @Input() isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  click(event: Event): void {
    this.onClick.emit(event);
  }
}
