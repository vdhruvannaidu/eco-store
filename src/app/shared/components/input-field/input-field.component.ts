import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input() type: string = 'text';
  @Input() name!: string;
  @Input() value!: string;
  @Input() placeholder!: string;
  @Input() label: string = 'input label';


}