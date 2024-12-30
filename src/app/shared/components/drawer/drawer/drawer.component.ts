import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-drawer',
  imports: [MatSidenavModule, MatButtonModule, MatIconModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav; // Use ViewChild to get the sidenav instance
    toggleSidenav(event:any) {
      console.log("sidenav");
      
      this.sidenav.toggle();
    }
}
