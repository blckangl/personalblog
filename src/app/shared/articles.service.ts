import {Article} from './article.model';

export class ArticlesService {
  private id = 4;
  public articles: Article[] = [

  ];


  public AddArticle(article: Article): void {
    this.id ++ ;
    article.articleId = this.id;
    this.articles.push(article);
  }

  public RemoveArticle(id: number): Article {
    const index = this.articles.findIndex(x => {
      return x.articleId === id;
    });
    if (index === -1) {
      return null;
    }
    const art = this.articles[index];
    this.articles.splice(index, 1);
    return art;
  }
}
