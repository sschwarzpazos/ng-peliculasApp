import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: 'routePath', component: Component },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
