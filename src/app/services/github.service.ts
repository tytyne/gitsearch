import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class GithubService {
  private username: string;
  private client_id = "96f25767bae53c053588";
  private client_secret = "675315d857de302a903ee049f967e9c2846b5125";

  constructor(private _http: Http) {
    console.log("Github Service Ready...");
    this.username = "shanawarkhan";
  }

  getUser() {
    return this._http
      .get(
        "http://api.github.com/users/" +
          this.username +
          "?client_id=" +
          this.client_id +
          "&client_secret=" +
          this.client_secret
      )
      .map(res => res.json());
  }

  getRepos() {
    return this._http
      .get(
        "http://api.github.com/users/" +
          this.username +
          "/repos?client_id=" +
          this.client_id +
          "&client_secret=" +
          this.client_secret
      )
      .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}
