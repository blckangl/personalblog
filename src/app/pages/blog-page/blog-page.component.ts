import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Article} from '../../shared/article.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ArticlesService} from '../../shared/articles.service';
import {ArticleHttpServiceService} from '../../shared/article-http-service.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  providers: []
})
export class BlogPageComponent implements OnInit, OnDestroy {

  private id = 4;

  public articles: Article[] = [];

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private snackBar: MatSnackBar,
              private articleService: ArticlesService,
              private articleHttpService: ArticleHttpServiceService) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    console.log('Log form ngInit in blog page');

    this.initArticle();
    console.log(this.articles);
    // this.articles = this.articleService.articles;
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message);
  }


  initArticle(): void {
    this.articleHttpService.getAllArticles().subscribe(resp => {
      this.articles = resp;
      // resp.forEach(ar => {
      //   console.log(ar);
      //   const art = new Article();
      //   art.articleId = ar.articleId;
      //   art.name = ar.name;
      //   art.text = ar.text;
      //   art.image = ar.image;
      //
      //   this.articles.push(art);
      // });

    });
  }
}
