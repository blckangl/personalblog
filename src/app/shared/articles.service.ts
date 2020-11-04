import {Article} from './article.model';

export class ArticlesService {
  private id = 4;
  public articles: Article[] = [
    {id: 1, title: 'test', text: 'TEST ARTICLE CONTENT'},
    {id: 2, title: 'test2', text: 'TEST2 ARTICLE CONTENT'},
    {id: 3, title: 'test3', text: 'TEST3 ARTICLE CONTENT'},
    {id: 4, title: 'test4', text: 'TEST4 ARTICLE CONTENT'},
  ];


  public AddArticle(article: Article): void {
    this.id ++ ;
    article.id = this.id;
    this.articles.push(article);
  }

  public RemoveArticle(id: number): Article {
    const index = this.articles.findIndex(x => {
      return x.id === id;
    });
    if (index === -1) {
      return null;
    }
    const art = this.articles[index];
    this.articles.splice(index, 1);
    return art;
  }
}
