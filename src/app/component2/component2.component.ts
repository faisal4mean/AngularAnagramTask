import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
})
export class Component2Component implements OnInit {
  constructor(private appService: AppService) {}
  values = ['bbcaca', 'aabbcd', 'cacaba'];
  data!:boolean
  ngOnInit(): void {
    this.appService.returnData().subscribe((res) => {
      console.log(res);
      this.data = res
    });
  }
}
