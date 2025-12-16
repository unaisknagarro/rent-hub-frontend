import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../../core/services/apartment';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {
  apartments: any[] = [];

  constructor(private apartmentService: ApartmentService) { }


  ngOnInit() {
    this.loadApartments();
  }


  loadApartments() {
    this.apartmentService.getApartments().subscribe(res => {
      this.apartments = res as any[];
    });
  }


  favourite(id: string) {
    this.apartmentService.addToFavourite(id).subscribe();
  }
}
