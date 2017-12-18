import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService {

  url = `https://test-chat-fuel-api.herokuapp.com/users`;

  constructor(private httpClient: HttpClient) { }

  getUsers(page?: number): Observable<any> {
    const params: any = {};
    const options = {params};
    if (page) { options.params.page = page.toString(); }
    return this.httpClient.get(this.url, options);
  }
}
