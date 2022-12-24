import { Component } from '@angular/core';
import { Members } from '../members';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

listedInstitutions=['UoN', 'KU', 'JKUAT'];

memberModel=new Members('','Adan','', 'email@gmail.com', '123456')

}
