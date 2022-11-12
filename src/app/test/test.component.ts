import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  @Input('parentData') public name: any;

  constructor() { }

  ngOnInit(): void {
  }
  OnClick(){
    console.log("Tu wekehe ya bada ")
  }

}