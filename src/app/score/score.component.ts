import { Component, OnInit } from '@angular/core';
import { ScoreService } from './../score.service';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  username: string;
  form_data: string;
  ghObj;
  score = {
    public_repos: 0,
    followers: 0,
  }
  total = 0;

  onSubmit(){
    this.username = this.form_data;
    this.askGithub();

  };

  constructor(private _scoreService: ScoreService) { 
  
  }
  askGithub(){
    this.ghObj = this._scoreService.askGithub(this.username, (response)=> {
      // console.log(response);
      this.score.public_repos = response.public_repos;
      this.score.followers = response.followers;
      this.total = this.score.public_repos + this.score.followers;
    });

  }
  
    
  ngOnInit() {
  }

}
