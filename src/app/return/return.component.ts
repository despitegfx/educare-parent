import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent {
@Input()
pageName: string = "";

}
