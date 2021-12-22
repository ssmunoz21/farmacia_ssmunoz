import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFullComponent } from './layout/layout-full/layout-full.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path:'',
    children:[{
      path: 'pages',
      component: LayoutFullComponent,
      loadChildren: () => import('./layout/layout.module').then(m =>m.LayoutModule),
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
