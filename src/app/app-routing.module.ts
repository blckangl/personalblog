import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {BlogPageComponent} from './pages/blog-page/blog-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', redirectTo: ''},
  {path: 'blog', component: BlogPageComponent},
  {path: 'blog/:ref', component: BlogPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: '404', component: NotFoundPageComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
