import { Component, OnInit } from "@angular/core";
import { GithubService } from "../services/github.service";
import { User } from "../../user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  providers: [GithubService]
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private profileService: GithubService,
    public repoService: GithubService
  ) {
    this.user = this.profileService.user;
  }
  ngOnInit() {
    this.user = this.profileService.user;
  }
}
