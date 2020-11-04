import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Article} from '../../shared/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input('article') article: Article;
  @Output('onRemove') removeEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  removeArticle(): void {
    this.removeEvent.emit(this.article.id);
  }
}
