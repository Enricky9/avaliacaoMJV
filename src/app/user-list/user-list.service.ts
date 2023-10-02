import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

constructor( private http : HttpClient) {}

 getUsers(){
  const header = {
    headers: new HttpHeaders({
      'app-id': "64cbeddd253549dc8b990b71"
    })
  }

  return this.http.get<any>("https://dummyapi.io/data/v1/user", header)
}

}
