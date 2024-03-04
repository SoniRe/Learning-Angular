import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: true,
})
export class CountryCodePipe implements PipeTransform {
  transform(value: number, country: string): unknown {
    if (country === 'USA') return '+01-' + value;

    return '+91-' + value;
  }
}
