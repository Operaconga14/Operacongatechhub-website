import { Component } from '@angular/core';
import { DefaultLayoutComponent } from "./components/layout/default-layout/default-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DefaultLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Operacongatechhub-website';
}
