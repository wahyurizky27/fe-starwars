import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../../services/swapi.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  imports: [CommonModule, RouterModule]
})
export class PersonDetailComponent implements OnInit {
  person: any = {};
  films: any[] = [];
  species: any[] = [];
  starships: any[] = [];
  vehicles: any[] = [];

  constructor(private route: ActivatedRoute, private swapiService: SwapiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.swapiService.getPerson(Number(id)).then(response => {
      this.person = response.data;
      // console.log("personDetails", this.person);

      this.films = response.data.films;
      this.species = response.data.species;
      this.starships = response.data.starships;
      this.vehicles = response.data.vehicles;
    });
  }
}
