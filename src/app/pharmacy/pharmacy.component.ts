import { Component, OnInit } from '@angular/core';
import { Pharmacy } from '../shared/appmodels.model';
import { DataService } from '../shared/dataservice.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {

  constructor(private service: DataService) { }

  pharmacies: Pharmacy[]

  ngOnInit(): void {

    this.service.getPharmacies().subscribe(data =>{

      this.pharmacies = data;
      console.log(this.pharmacies)

    })
  }

}
