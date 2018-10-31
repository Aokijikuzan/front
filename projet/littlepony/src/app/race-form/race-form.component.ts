import { Component, OnInit } from '@angular/core';
import { Race } from './../race';
import { RaceService} from './../race.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-race-form',
  templateUrl: './race-form.component.html',
  styleUrls: ['./race-form.component.css']
})
export class RaceFormComponent implements OnInit {
  course: Race;
  constructor(private service:RaceService, private router:Router) 
  {
    this.course= new Race();
  
  }

  ngOnInit() {
  }

  onSubmit()
  {
    this.service.addRace(this.course);
    this.router.navigate( ['/Ponies'] );
  }

}
