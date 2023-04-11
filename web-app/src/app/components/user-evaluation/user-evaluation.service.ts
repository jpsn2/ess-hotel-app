import { Observable } from 'rxjs'; // import do observable que sera o objeto recebido do back pelos metodos
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; // import do httpClient neste servico
import { User_review, date } from '../../../../../server/src/models/reviews';

@Injectable({
  providedIn: 'root'
})
export class UserEvaluationService {
  private apiUrl = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) { };

  getData(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  addReview(review: User_review): Observable<any>{
    return this.http.post<any>(this.apiUrl, review);
  }
}
