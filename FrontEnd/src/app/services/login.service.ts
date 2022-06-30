import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'https://localhost:7257/api/login';

  constructor(private httpClient: HttpClient) {}

  entrar(email: string, password: string): Observable<any> {
    return this.httpClient.post(this.url, JSON.stringify({ email, password }), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body',
      responseType: 'json',
    });
  }
}
