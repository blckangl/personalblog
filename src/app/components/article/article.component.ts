import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Article} from '../../shared/article.model';
import {ArticlesService} from '../../shared/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: []
})
export class ArticleComponent implements OnInit {

  @Input('article') article: Article;

  constructor(private articleService: ArticlesService) {
  }

  ngOnInit(): void {
  }

  removeArticle(): void {
    this.articleService.RemoveArticle(this.article.id);
    console.log('Article Removed');
  }
}
