import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title=''
  public show=true

  constructor() { }

  showModal(){
    this.show=true
  }
  hideModal(){
    this.show=false
  }
  ngOnInit(): void {
  }

}
