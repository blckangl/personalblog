import { Component } from '@angular/core';
import {ArticlesService} from './shared/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers :[]
})
export class AppComponent {
  title = 'personalblog';
}
