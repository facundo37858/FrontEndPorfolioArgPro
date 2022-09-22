import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
type Links={
  github:string,
  linkedin:string,
  email:string
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public links!:Links

  constructor(private data:PorfolioService) { }

  ngOnInit(): void {
    this.data.getData().subscribe(data=>{
      this.links=data.links
    })
  }

}
