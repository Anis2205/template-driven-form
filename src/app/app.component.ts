import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('localreferencevariable') form : NgForm | undefined
  defaultvalue = "pet"
  genders = ['male','female']

  onSubmit(){
    console.log(this.form)
  }
}
