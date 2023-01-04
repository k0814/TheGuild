import { Component } from '@angular/core';
import { GetMembersService } from '../get-members.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumnus } from '../alumnus';

@Component({
  selector: 'app-alumni-between',
  templateUrl: './alumni-between.component.html',
  styleUrls: ['./alumni-between.component.css']
})
export class AlumniBetweenComponent implements OnInit{
  
  constructor(
    private getMembersService : GetMembersService
  ){

  }
  ngOnInit(): void {
    
    
  }

}
