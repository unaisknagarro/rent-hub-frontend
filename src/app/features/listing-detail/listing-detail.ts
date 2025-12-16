import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApartmentService } from '../../core/services/apartment';

@Component({
  selector: 'app-listing-detail',
  imports: [FormsModule],
  templateUrl: './listing-detail.html',
  styleUrl: './listing-detail.css',
})

export class ListingDetail implements OnInit {
  apartment: any;
  commentText = '';


  constructor(private route: ActivatedRoute, private service: ApartmentService) { }


  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.service.getApartment(id).subscribe(res => this.apartment = res);
  }


  addComment() {
    this.service.addComment(this.apartment._id, { text: this.commentText })
      .subscribe(() => this.commentText = '');
  }
}