import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Article} from '../../shared/article.model';
import {ArticlesService} from '../../shared/articles.service';
import {ArticleHttpServiceService} from '../../shared/article-http-service.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss'],
  providers: []
})
export class ArticleAddComponent implements OnInit {

  title: string;
  text: string;

  constructor(private articleService: ArticlesService, private articleHttpService: ArticleHttpServiceService) {
  }

  ngOnInit(): void {
  }

  addArticle(): void {
    const article = new Article();
    article.text = this.text;
    article.name = this.title;
    article.image = 'test';

    this.articleHttpService.addAnArticle(article).subscribe(rep => {
      console.log(rep);
    });
    console.log('Article Added');
    window.location.reload();

  }
}
