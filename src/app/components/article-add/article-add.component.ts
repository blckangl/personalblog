import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Article} from '../../shared/article.model';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss']
})
export class ArticleAddComponent implements OnInit {

  @Output('onArticleAdd') articleAdd = new EventEmitter<Article>();
  title: string;
  text: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  addArticle(): void {
    const article = new Article();
    article.text = this.text;
    article.title = this.title;
    this.articleAdd.emit(article);
  }
}
