import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [

        {
                path: '',
                component: HomeComponent
        },
        {
                path: 'about',
                loadComponent: () => import('../app/components/pages/about/about.component').then(m => m.AboutComponent)
        },
        {
                path: 'services',
                loadComponent: () => import('../app/components/pages/services/services.component').then(m => m.ServicesComponent)
        },
        {
                path: 'projects',
                loadComponent: () => import('../app/components/pages/projects/projects.component').then(m => m.ProjectsComponent)
        },
        {
                path: 'contact',
                loadComponent: () => import('../app/components/pages/contact/contact.component').then(m => m.ContactComponent)
        }
];
