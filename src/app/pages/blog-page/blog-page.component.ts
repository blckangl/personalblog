import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Article} from '../../shared/article.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ArticlesService} from '../../shared/articles.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  providers: []
})
export class BlogPageComponent implements OnInit, OnDestroy {

  private id = 4;

  public articles: Article[];

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private snackBar: MatSnackBar,
              private articleService: ArticlesService) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    console.log('articles ', this.articleService.articles);
    this.articles = this.articleService.articles;
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message);
  }
}
