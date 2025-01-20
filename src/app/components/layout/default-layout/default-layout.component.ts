import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}
