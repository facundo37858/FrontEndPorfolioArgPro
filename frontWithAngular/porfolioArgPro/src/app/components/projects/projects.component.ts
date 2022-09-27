import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
type Project=[{
  title:string,
  img:string,
  description:string,
  customer :string,
  technologies:string,
  year:number,
  links:{
      github:string,
      youtube:string,
      deployPage:string
  }

}]
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects!:Project

  constructor(private data:PorfolioService) { }

  ngOnInit(): void {

    this.data.getData().subscribe(data=>{
      console.log(data.projects)
      this.projects=data.projects
    })
  }

}
