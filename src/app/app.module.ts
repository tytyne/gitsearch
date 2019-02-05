import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { ProfileComponent } from "./components/profile.component";
import { SeachFormComponent } from './seach-form/seach-form.component';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule],
  declarations: [AppComponent, ProfileComponent, SeachFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
