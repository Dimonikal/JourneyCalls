import { Injectable } from "@angular/core";
import { User } from "src/app/models/user.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> { //метод POST, регистрация
    return this.http.post<User>(`${environment.apiUrl}/users`, user);
  }

  login(user: User): Observable<User> { //метод GET, авторизация, сравнение email и пароля
    return this.http
      .get<User[]>(
        `${environment.apiUrl}/users?email=${user.email}&password=${user.password}`
      )
      .pipe(map(_user => (_user.length !== 0 ? _user[0] : null)));
  }

  getUserByEmail(email:string): Observable<User>{ //GET, поиск юзера по email
    return this.http.get(`${environment.apiUrl}/users?email=${email}`).pipe(map((user: User[]) => user[0] ? user[0] : undefined));
  }
}
