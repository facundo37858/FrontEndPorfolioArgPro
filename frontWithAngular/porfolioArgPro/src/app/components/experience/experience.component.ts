import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
type Experience = [
  {
    nameCompany:string,
    img:string,
    descriptionTasks:[string],
    startDate:string,
    endDate:string,
    positionWork:string

  }
]
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public experience!:Experience
  constructor( private data:PorfolioService) {

   }

  ngOnInit(): void {
    this.data.getData().subscribe( data => {
      console.log('EE',data.experience)
      this.experience=data.experience
    })
  }

}
