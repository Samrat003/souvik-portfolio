import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { ServiceProvided } from './service-provided/service-provided';
import { ContactMe } from './contact-me/contact-me';
import { Blog } from './blog/blog';
import { Portfolio } from './portfolio/portfolio';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'service-provided', component: ServiceProvided },
  { path: 'contact-me', component: ContactMe },
  { path: 'blog', component: Blog },
  { path: 'portfolio', component: Portfolio },
  { path: '**', redirectTo: '' }
];
