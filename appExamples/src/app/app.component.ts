import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appExamples';
  flag = true;

  delete(){
    this.flag = !this.flag;
  }
}
