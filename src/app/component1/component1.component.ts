import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
  constructor(private appService: AppService) {}
  data!: string;
  str = ['bbcaca', 'aabbcd', 'cacaba'];
  isAnagram: boolean = false;
  ngOnInit(): void {}
  anagram() {
    if (!this.data) {
      return;
    }

    const index = this.str.findIndex(
      (e) => e.split('').sort().join('') === this.data.split('').sort().join('')
    );
    if (index > -1) {
      this.appService.getData.next(true);
    } else if (index === -1) {
      this.appService.getData.next(false);
    }
  }
}
