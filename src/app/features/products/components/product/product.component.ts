import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header/header.component";
import { FooterComponent } from "../../../../shared/components/footer/footer/footer.component";
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-product',
  imports: [HeaderComponent, FooterComponent, FormsModule, MatRadioModule, MatIconModule, MatTabsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
