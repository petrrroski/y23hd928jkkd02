import { Component } from '@angular/core';
import { Auth } from './authentication-new/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private Auth: Auth) { }
  ngOnDestroy(): void {
    this.Auth.logoutAfterClose();
  }

  title = 'jericho';
}
