import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticleComponent } from './components/article/article.component';
import { MenuDirective } from './shared/menu.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BlogPageComponent,
    DashboardPageComponent,
    MenuComponent,
    ArticleComponent,
    MenuDirective],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
