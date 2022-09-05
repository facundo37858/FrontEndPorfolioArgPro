import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  dataAbout!: string
  urlPhotoProfile!:string
  constructor(private data:PorfolioService) { }

  ngOnInit(): void {
    this.data.getData().subscribe(data=>{
      console.log(data.aboutMe)
      this.dataAbout=data.aboutMe
      this.urlPhotoProfile=data.urlPhotoProfile
    })
  }

}
