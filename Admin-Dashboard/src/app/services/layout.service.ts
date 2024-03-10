import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor() {}

  layoutChosen = signal(1);

  changeLayout(layout: number) {
    this.layoutChosen.set(layout);
  }
}
