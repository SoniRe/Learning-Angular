import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { StatsComponent } from './components/stats/stats.component';
// import { InfoComponent } from './components/info/info.component';
import { authGuard } from './auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'bookmark',
        component: BookmarkComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'stats',
        component: StatsComponent,
      },
      {
        path: 'info',
        loadComponent: () =>
          import('./components/info/info.component').then(
            (mod) => mod.InfoComponent
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
