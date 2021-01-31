import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Disease } from 'src/app/shared/appmodels.model';
import { DataService } from 'src/app/shared/dataservice.service';

@Component({
  selector: 'app-disease-details',
  templateUrl: './disease-details.component.html',
  styleUrls: ['./disease-details.component.css']
})
export class DiseaseDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: DataService, private router: Router) { }
  diseaseDTO: any;
  @Input() readMore = false;
  commentForm = new FormGroup({
    comment : new FormControl(),
    diseaseId: new FormControl()
  });

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.service.getSingleDisease(+params['id']).subscribe(data => {
        this.diseaseDTO = data;
        console.log(this.diseaseDTO);

        let comment = new FormControl('', Validators.required)
        let diseaseId = new FormControl(this.diseaseDTO.disease.id)
        this.commentForm = new FormGroup({
          comment: comment,
          diseaseId: diseaseId
        })
      })
    })


  }

  onSubmit() {

    let commentDTO = {
        diseaseId : this.diseaseDTO.disease.id,
        description: this.commentForm.value.comment
    }

    console.log(commentDTO)

    this.service.saveComment(commentDTO)

    window.location.reload();
  }

}
