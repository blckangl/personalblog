import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Article} from '../../shared/article.model';
import {ArticlesService} from '../../shared/articles.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss'],
  providers: []
})
export class ArticleAddComponent implements OnInit {

  title: string;
  text: string;

  constructor(private articleService: ArticlesService) {
  }

  ngOnInit(): void {
  }

  addArticle(): void {
    const article = new Article();
    article.text = this.text;
    article.title = this.title;

    this.articleService.AddArticle(article);
    console.log('Article Added');

  }
}
