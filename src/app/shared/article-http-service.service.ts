import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from './article.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleHttpServiceService {

  constructor(private http: HttpClient) {
  }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.app_url + 'api/articles');
  }

  addAnArticle(art: Article): Observable<Article> {
    return this.http.post<Article>(environment.app_url + 'api/articles', art);
  }

  removeArticle(id: number): Observable<any>{
    return this.http.delete(environment.app_url + 'api/articles/' + id);
  }
}
