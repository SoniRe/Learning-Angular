import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from './models/user';
import { JokeComponent } from './components/joke/joke.component';
import { JokeService } from './services/joke.service';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';
import { C2Component } from './components/c2/c2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserProfileComponent,
    CommonModule,
    JokeComponent,
    AComponent,
    B1Component,
    C2Component,
  ],
  templateUrl: './app.component.html',
  // template: `<h1>Hello bro angular</h1>`, // Custom Inline HTML
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = [
    {
      name: 'Aditya',
      age: 21,
      sal: 21000,
    },
    // {
    //   name: 'Suresh',
    //   age: 31,
    //   sal: 32000,
    // },
    // {
    //   name: 'Param',
    //   age: 201,
    //   sal: 10000,
    // },
  ];

  receivedData(e: User) {
    // console.log(e);
    const userIndex = this.users.findIndex((user) => user.name === e.name);
    this.users[userIndex].sal = e.updatedSalary;
  }
}
