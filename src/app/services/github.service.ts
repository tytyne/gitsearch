import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../user";
import { environment } from "../../environments/environment";
import { Repo } from "../repo";
import { NumberSymbol } from "@angular/common";

@Injectable({
  providedIn: "root" //we declare that this service should be created by the root application injector.
})
export class GithubService {
  repo: Repo;
  user: User;

  private username: string;
  items;
  constructor(private http: HttpClient) {
    this.username = "tytyne";
    this.user = new User(" ", " ", " ", " ", " ", " ", 0, 0, 0, new Date());
    this.repo = new Repo(" ", " ", " ", " ", " ");
  }
  getProfileInfo(username) {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      email: string;
      location: string;
      public_repos: number;
      html_url: string;
      followers: number;
      following: number;
      creation: Date;
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
            username +
            "?access_token=0ff610d62888f906dbf5c067b0c783b468b7462f"
        )
        .toPromise()
        .then(profile => {
          this.user.name = profile.name;
          this.user.login = profile.login;
          this.user.avatar_url = profile.avatar_url;
          this.user.email = profile.email;
          this.user.location = profile.location;
          this.user.public_repos = profile.public_repos;
          this.user.html_url = profile.html_url;
          this.user.followers = profile.followers;
          this.user.following = profile.following;
          this.user.creation = profile.creation;

          console.log(profile);
          resolve();
        });
    });
    return promise;
  }
  getRepoInfo(username) {
    interface ApiResponse {
      name: string;
      homepage: string;
      description: string;
      html_url: string;
      clone_url: string;
    }
    this.http
      .get<ApiResponse>(
        "https://api.github.com/users/" +
          username +
          "/repos?access_token=0ff610d62888f906dbf5c067b0c783b468b7462f"
      )
      .subscribe(response => {
        this.items = response;
      });
  }
}
