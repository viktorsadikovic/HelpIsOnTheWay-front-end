import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Clinic } from '../shared/appmodels.model';
import { DataService } from '../shared/dataservice.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  constructor(private service: DataService, private route:ActivatedRoute) { }

  clinics: Clinic[];
  type;

  ngOnInit(): void {
    this.route.params.forEach((params:Params) => {
      this.service.getClinics(params['type']).subscribe(data =>{
        this.type=params['type'];
        this.clinics = data;
        console.log(this.clinics)

      })
    })


  }

}
