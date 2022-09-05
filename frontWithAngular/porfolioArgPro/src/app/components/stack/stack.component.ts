import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
  urlImages!:[string]
  constructor( private data:PorfolioService) { }

  ngOnInit(): void {

    this.data.getData().subscribe(data=>{
      this.urlImages=data.urlImageStack
    })
  }


}
