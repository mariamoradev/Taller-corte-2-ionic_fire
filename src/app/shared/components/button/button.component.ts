import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

type buttonType = "button" | "submit";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent  implements OnInit {
  @Input({required: true}) value = "";
  @Input() disabled = false;
  @Input() type: buttonType = "submit";

  constructor() { }

  ngOnInit() {}

}
