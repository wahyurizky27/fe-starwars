import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  imports: [CommonModule, RouterModule]
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getPeople().then(response => {
      this.people = response.data.results;
      // console.log("people", this.people);
    });
  }
}
