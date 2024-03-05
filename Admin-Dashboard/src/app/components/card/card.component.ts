import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() className!: string;
  @Input() cardName!: string;
  @Input({ transform: numberAttribute }) money!: number;
}
