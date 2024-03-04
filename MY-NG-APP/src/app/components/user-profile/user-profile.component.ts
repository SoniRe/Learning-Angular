import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges,
  numberAttribute,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { CountryCodePipe } from '../../pipes/country-code.pipe';

function formatName(value: string) {
  return 'Hi ' + value;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, CurrencyPipe, CountryCodePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  @Input({ alias: 'userName' }) name = '';
  @Input({ transform: numberAttribute }) age!: number;
  @Input({ transform: numberAttribute }) salary!: number;

  @Output() myEvent = new EventEmitter<User>();

  sendData() {
    this.myEvent.emit({ name: this.name, updatedSalary: 25000 });
  }

  constructor() {
    console.log('constructor called');
  }

  // Multiple times called or it is called whenever changes happen
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnDestroy() {
    // It is for cleaup ot Unregister Event listener
    console.log('ngOnDestroy is called');
  }

  // name = 'Aditya';
  // salary = 1000000;
  // status = 'male';
  // isBtnDisabled = true;
  // inputVal = 'test';
  phone = 989328023;

  // users = [
  //   {
  //     name: 'Aditya',
  //     age: 21,
  //     sal: 21000,
  //   },
  //   {
  //     name: 'Suresh',
  //     age: 31,
  //     sal: 32000,
  //   },
  //   {
  //     name: 'Param',
  //     age: 201,
  //     sal: 10000,
  //   },
  // ];

  // onChange(e: Event) {
  //   const value = (e.target as HTMLInputElement).value;
  //   // console.log('on chnage event called', value);
  //   this.inputVal = value;
  // }
}
