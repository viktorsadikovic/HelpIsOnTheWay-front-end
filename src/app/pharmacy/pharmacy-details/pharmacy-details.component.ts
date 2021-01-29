import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pharmacy } from 'src/app/shared/appmodels.model';
import { DataService } from 'src/app/shared/dataservice.service';

@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.css']
})
export class PharmacyDetailsComponent implements OnInit {

  constructor(private service: DataService, private route: ActivatedRoute) { }
  pharmacy: Pharmacy;

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {
      this.service.getSinglePharmacy(+params['id']).subscribe(data => {
        this.pharmacy = data;
        console.log(this.pharmacy);
      })
    })

    let node2 = document.createElement('script')
    node2.src ="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYoeIt2333Mdzjjq_of7JQs2WqZE-XdTY&callback=initMap&libraries=&v=weekly"
    node2.type = 'text/javascript';
    node2.async = true;
    document.getElementsByTagName('head')[0].appendChild(node2);

    let node = document.createElement('script');
    node.src = '../../../assets/mapscript.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
