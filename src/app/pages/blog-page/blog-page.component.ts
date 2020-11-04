import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Article} from '../../shared/article.model';

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

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {

  }


  addArticle(article: Article) : void {
    this.id++;
    article.id = this.id;
    this.articles.push(article);
    console.log(article);
  }
}
