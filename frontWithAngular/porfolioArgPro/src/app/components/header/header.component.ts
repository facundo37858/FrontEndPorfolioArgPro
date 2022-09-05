import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataName!:string
  constructor( private data:PorfolioService) { }

  ngOnInit(): void {
    this.data.getData().subscribe(data=>{
      this.dataName=data.name
    })
  }

}
