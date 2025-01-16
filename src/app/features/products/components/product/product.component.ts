import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header/header.component";
import { FooterComponent } from "../../../../shared/components/footer/footer/footer.component";
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-product',
  imports: [HeaderComponent, FooterComponent, FormsModule, MatRadioModule, MatIconModule, MatTabsModule, MatExpansionModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  readonly panelOpenState = signal(false);
}
