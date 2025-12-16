import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ApartmentService } from '../../core/services/apartment';

@Component({
  selector: 'app-listing-create',
  imports: [FormsModule],
  templateUrl: './listing-create.html',
  styleUrl: './listing-create.css',
})
export class ListingCreate {


  constructor(private fb: FormBuilder, private service: ApartmentService) { }

  ngOnInit(){
    // postForm = this.fb.group({
    // title: ['', Validators.required],
    // description: ['', Validators.required],
    // location: ['', Validators.required],
    // price: ['', [Validators.required, Validators.min(0)]],
    // furnished: ['no'],
    // amenities: this.fb.group({
    //   wifi: false,
    //   parking: false,
    //   ac: false
    // })
  //});

  }
  

  submit() {
    //if (this.postForm.invalid) return;
    //this.service.createApartment(this.postForm.value).subscribe();
  }
}