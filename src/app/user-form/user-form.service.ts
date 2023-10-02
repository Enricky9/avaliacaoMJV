import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

constructor(private http : HttpClient) { }

getUserById(id: string){
  const header = {
    headers: new HttpHeaders({
      'app-id': "64cbeddd253549dc8b990b71"
    })
  }

  return this.http.get<any>(`https://dummyapi.io/data/v1/user/${id}`, header)
}

createUser(user: any){
  const header = {
    headers: new HttpHeaders({
      'app-id': "64cbeddd253549dc8b990b71"
    })
  }

  return this.http.post<any>("https://dummyapi.io/data/v1/user/create",user, header)
}

updateUserById(id: string){
  const header = {
    headers: new HttpHeaders({
      'app-id': "64cbeddd253549dc8b990b71"
    })
  }

  return this.http.put<any>(`https://dummyapi.io/data/v1/user/${id}`, header)
}

deleteUserById(id: string){
  const header = {
    headers: new HttpHeaders({
      'app-id': "64cbeddd253549dc8b990b71"
    })
  }

  return this.http.delete<any>(`https://dummyapi.io/data/v1/user/${id}`, header)
}



}
