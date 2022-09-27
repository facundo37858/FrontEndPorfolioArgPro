import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
type Education = [
  {
    title:string,
    img:string,
    startDate:string,
    endDate:string,
    nameInstitution:string
  }
]

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public education!: Education
  constructor( private data:PorfolioService) { }

  ngOnInit(): void {

    this.data.getData().subscribe(data =>{
      console.log(data.education)
      this.education=data.education
    })
  }

}
