import { Component, OnInit } from "@angular/core";
import { GithubService } from "../services/github.service";

@Component({
  selector: "app-profile-form",
  templateUrl: "./profile-form.component.html",
  styleUrls: ["./profile-form.component.css"]
})
export class ProfileFormComponent implements OnInit {
  submitSearch(name) {
    this.profileService.getProfileInfo(name.target.value);
    this.repoService.getRepoInfo(name.target.value);
  }
  constructor(
    private profileService: GithubService,
    private repoService: GithubService
  ) {}
  ngOnInit() {}
}
