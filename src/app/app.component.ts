import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { DefaultLayoutComponent } from "./components/layout/default-layout/default-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DefaultLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Operaconga Tech Hub';

  titleService = inject(Title);
  metaService = inject(Meta);
  ativatedRouter = inject(ActivatedRoute);
  router = inject(Router);
  spinnerService = inject(NgxSpinnerService);
  layoutVisible = false;

  ngOnInit(): void {
    // Default title and meta description
    if (typeof window !== 'undefined') {
      this.setMetaTags();
    }
  }

  setMetaTags() {
    // Set title
    this.titleService.setTitle('Operaconga Tech Hub');

    // Set meta tags
    this.metaService.updateTag({ name: 'description', content: 'Empowering developers with world-class training, mentorship, and tech solutions.' });
    this.metaService.updateTag({ name: 'keywords', content: 'Tech hub, web development, full-stack development, developer training, coding mentorship, Operaconga' });

    // Open Graph Meta Tags for social sharing
    this.metaService.updateTag({ property: 'og:title', content: 'Operaconga Tech Hub' });
    this.metaService.updateTag({ property: 'og:description', content: 'Empowering developers with world-class training, mentorship, and tech solutions.' });
    this.metaService.updateTag({ property: 'og:image', content: 'path-to-your-operaconga-image.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: window.location.href });

    // Twitter Card Meta Tags for social sharing
    this.metaService.updateTag({ name: 'twitter:title', content: 'Operaconga Tech Hub' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Empowering developers with world-class training, mentorship, and tech solutions.' });
    this.metaService.updateTag({ name: 'twitter:image', content: 'path-to-your-operaconga-image.jpg' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

}
