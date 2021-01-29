import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinics-type',
  templateUrl: './clinics-type.component.html',
  styleUrls: ['./clinics-type.component.css']
})
export class ClinicsTypeComponent implements OnInit {

  constructor() { }

  public = "PUBLIC"
  private = "PRIVATE"

  ngOnInit(): void {
  }

}
