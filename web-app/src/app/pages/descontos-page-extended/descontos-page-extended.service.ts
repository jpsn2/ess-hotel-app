import { Observable } from 'rxjs'; // import do observable que sera o objeto recebido do back pelos metodos
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DiscountsService {
  private apiUrl = 'http://localhost:3000/discounts';

  constructor(private http: HttpClient) {}

  getData(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  adddiscount(discount: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, discount);
  }
}