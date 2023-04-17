import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlameserviceService {
  constructor(private http: HttpClient) {}
  public calculate(p1: string, p2: string) {
    return this.http.get('https://localhost:7203/api/flames/' + p1 + '/' + p2, {
      responseType: 'text',
    });
  }
}
