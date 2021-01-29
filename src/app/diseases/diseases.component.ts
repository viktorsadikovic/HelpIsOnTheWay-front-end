import { Component, OnInit } from '@angular/core';
import { Disease } from '../shared/appmodels.model';
import { DataService } from '../shared/dataservice.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {

  constructor(private service:DataService) { }
  diseases: Disease[];
  searchTerm;
  filter;

  ngOnInit(): void {
    this.service.getDiseases().subscribe(data =>{
      this.diseases = data;
      console.log(this.diseases);

      let node = document.createElement('script');
      node.src = '../../../assets/search.js';
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    })
  }

  getDiseasesByType(type) {
    this.service.getDiseasesByType(type).subscribe(data => {
      this.diseases = data;
      console.log(this.diseases)
    })
  }

}
