import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ScoreService {
  ghInfo: any;
  constructor(private _http: Http) { }

  askGithub(username, callback){
    console.log("Accessing ScoreService")
    this._http.get(`https://api.github.com/users/${username}`).subscribe(
      (response) => {
        console.log(response.json());

        this.ghInfo = response.json();
        callback(response.json());
      },
      (err) => {
        console.log(err.status);
      }
    )
   

  }

}
