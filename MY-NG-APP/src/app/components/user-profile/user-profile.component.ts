import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  name = 'Aditya';
  status = 'male';
  salary = 1000000;
  isBtnDisabled = true;
  inputVal = 'test';

  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    console.log('on chnage event called', value);
  }
}
