import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  private apiUrl = 'http://localhost:3000/api/apartments';

  constructor(private http: HttpClient) { }

  // getApartments() {
  //   return this.http.get<Apartment[]>(this.apiUrl);
  // }

  // getApartment(id: string) {
  //   return this.http.get<Apartment>(`${this.apiUrl}/${id}`);
  // }

  // createApartment(apartment: Apartment) {
  //   return this.http.post<Apartment>(this.apiUrl, apartment);
  // }

  // updateApartment(apartment: Apartment) {
  //   return this.http.put<Apartment>(`${this.apiUrl}/${apartment.id}`, apartment);
  // }

  // deleteApartment(id: string) {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }



  getApartments() { return this.http.get(this.apiUrl); }
  getApartment(id: string) { return this.http.get(`${this.apiUrl}/${id}`); }
  createApartment(data: any) { return this.http.post(this.apiUrl, data); }
  addComment(id: string, data: any) { return this.http.post(`${this.apiUrl}/${id}/comments`, data); }
  addToFavourite(id: string) { return this.http.post(`/api/users/favourite/${id}`, {}); }

}

