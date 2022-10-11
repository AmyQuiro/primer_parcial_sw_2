import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { Utils } from '../Utils';
import { Constants } from '../Constants';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(
    private http: HttpClient
  ) { }
  
  login(user:User):Observable<any>{
    return this.http.post('https://image-criselito.herokuapp.com/api/login',user);
  }
  upload(data:any):Observable<any>{
    let httpHeaders= new HttpHeaders();
    httpHeaders=httpHeaders.append('Authorization',Utils.get(Constants.ACTUAL_ACCESS_TOKEN)||'');
    return this.http.post('https://image-criselito.herokuapp.com/api/uploadImage',data,{headers:httpHeaders})
  }
  getResearches():Observable<any>{
    let httpHeaders= new HttpHeaders();
    httpHeaders=httpHeaders.append('Authorization',Utils.get(Constants.ACTUAL_ACCESS_TOKEN)||'');
    return this.http.get('https://image-criselito.herokuapp.com/api/getResearches',{headers:httpHeaders})
  }
}
