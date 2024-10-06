import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

type buttonType = "button" | "submit";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent  implements OnInit {
  
  @Input() disabled: boolean = false;
  @Input() type: buttonType = "submit";

  constructor() { }

  ngOnInit() {}

}
