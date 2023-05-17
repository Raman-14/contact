import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  post(arg0: string, user: { name: string; job: string }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
  postData(data: any) {
    return this.http.post('https://reqres.in/api/users', data)
  }
}
