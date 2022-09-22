import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
type Links={
  github:string,
  linkedin:string,
  email:string
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  public links!:Links

  constructor( private data:PorfolioService) { }

  ngOnInit(): void {
    this.data.getData().subscribe(data=>{
      console.log(data.links)
      this.links=data.links
    })
  }

}
