import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-input.component.html'
})
export class CustomInputComponent {

  @Input() label!: string;
  @Input() value!: any;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() templateRef!: string;
  @Input() validationMessage!: string;
}
