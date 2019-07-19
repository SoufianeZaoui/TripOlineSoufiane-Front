import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { Trip } from 'src/app/domain/trip';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  data: Trip[];
  width: number = 100;


  constructor(private service: TripsService) { }

  ngOnInit() {
    this.service.getAllTrips().subscribe(
      response => this.data = response,
      erreur => console.log('Attention il y a l\'erreur ' + erreur)
    );
  }
    // this.data='('

}
