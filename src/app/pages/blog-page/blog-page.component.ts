import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Article} from '../../shared/article.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit, OnDestroy {

  private id = 4;

  public articles: Article[] = [
    {id: 1, title: 'test', text: 'TEST ARTICLE CONTENT'},
    {id: 2, title: 'test2', text: 'TEST2 ARTICLE CONTENT'},
    {id: 3, title: 'test3', text: 'TEST3 ARTICLE CONTENT'},
    {id: 4, title: 'test4', text: 'TEST4 ARTICLE CONTENT'},
  ];

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private snackBar: MatSnackBar) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {

  }


  addArticle(article: Article): void {
    this.id++;
    article.id = this.id;
    this.articles.push(article);
    console.log(article);
  }

  removeArticle(id: number): void {
    const index = this.articles.findIndex(x => {
      return x.id === id;
    });

    this.articles.splice(index, 1);
    this.openSnackBar('Article ' + id + ' is Removed.');
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message);
  }
}
