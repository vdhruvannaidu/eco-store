import { Component, effect, Input, Signal, signal, WritableSignal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'basic' | 'flat' | 'raised' | 'stroked' | 'icon';
type ButtonColor = 'primary' | 'accent' | 'warn';

interface ButtonConfig {
  variant: ButtonVariant;
  color?: ButtonColor; // Color is optional
  customClass?: string;
  style?: { [key: string]: string };
  type?: string;
  disabled?: boolean;
}
@Component({
  selector: 'app-button',
  imports: [MatIconModule, MatDividerModule, MatButtonModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  // private _buttonConfig = signal<ButtonConfig>({
  //   variant: 'basic',
  //   color: 'primary',
  //   customClass: '',
  //   style: {
  //     padding: '8px 16px',
  //     'font-size': '16px',
  //     'border-radius': '4px',
  //   },
  //   type: 'button',
  //   disabled: false,
  // });

  // buttonConfig = this._buttonConfig.asReadonly(); // Expose as readonly

  // @Input() set variant(value: ButtonVariant) {
  //   this._buttonConfig.update(config => ({ ...config, variant: value }));
  // }

  // @Input() set color(value: ButtonColor | undefined) { // Color is optional
  //   this._buttonConfig.update(config => ({ ...config, color: value }));
  // }

  // @Input() set customClass(value: string | undefined) {
  //   this._buttonConfig.update(config => ({ ...config, customClass: value }));
  // }

  // @Input() set padding(value: string | undefined) {
  //   this._buttonConfig.update(config => ({
  //     ...config,
  //     style: { ...config.style, padding: value || '8px 16px' }, //If value is undefined, use the default
  //   }));
  // }

  // @Input() set size(value: string | undefined) {
  //   this._buttonConfig.update(config => ({ ...config, style: { ...config.style, 'font-size': value || '16px'} }));
  // }

  // @Input() set borderRadius(value: string | undefined) {
  //   this._buttonConfig.update(config => ({ ...config, style: { ...config.style, 'border-radius': value  || '8px'} }));
  // }

  // @Input() set width(value: string | undefined) {
  //   this._buttonConfig.update(config => ({ ...config, style: { ...config.style, width: value || '40px' } }));
  // }

  // @Input() set height(value: string | undefined) {
  //   this._buttonConfig.update(config => ({ ...config, style: { ...config.style, height: value || '38px'} }));
  // }

  // @Input() set type(value: string | undefined) {
  //   this._buttonConfig.update(config => ({ ...config, type: value }));
  // }

  // @Input() set disabled(value: boolean | undefined) {
  //   this._buttonConfig.update(config => ({ ...config, disabled: value }));
  // }

  // constructor() {
  //   effect(() => {
  //     console.log('Button Config Updated:', this.buttonConfig());
  //   });
  // }
}
