import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInService {
  constructor(private _Http: HttpClient) {}
  token = localStorage.getItem('token');
  // authorizated: boolean = false;

  isLoggedIn(): boolean {
    if (this.token) {
      // const httpOptions = {
      //   headers: new HttpHeaders({
      //     authorization: this.token || '',
      //   }),
      // };
      // this._Http.get('http://localhost:5000/api/users/', httpOptions).subscribe(
      //   (response: any) => {
      //     console.log(response);
      //   },
      //   (err: any) => {
      //     alert(err.message);
      //     console.log(err);
      //     localStorage.removeItem('token')
      //     window.location.replace('/')
      //   }
      // );
      return true;
    } else {
      console.log('no token');
      return false;
    }
  }

  // postUsingToken(url:string , body:any){
  //   let headers = new HttpHeaders();
  //       const httpOptions = {
  //         headers : new HttpHeaders({
  //           'Content-Type': 'application/json',
  //           'Authoriation': this.token || ""
  //         })
  //       }
  //       return this._Http.post(url,body,httpOptions)
  // }
}
