import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

interface UserPostModel {
  name: string;
  avatarUrl: string;
}

@Injectable()
export class UsersService {

  api = `https://test-chat-fuel-api.herokuapp.com/`;

  constructor(private httpClient: HttpClient) { }

  getUsers(page?: number): Observable<any> {
    const url = this.api + 'users';
    const params: any = {};
    const options = {params};
    if (page) { options.params.page = page.toString(); }
    return this.httpClient.get(url, options);
  }

  getUser(id: number): Observable<any> {
    const url = this.api + `users/${id}`;
    return this.httpClient.get(url);
  }

  saveUser(id: number, user: UserPostModel) {
    const url = this.api + `users/${id}`;
    const body = JSON.stringify(user);
    return this.httpClient.put(url, body);
  }
}
