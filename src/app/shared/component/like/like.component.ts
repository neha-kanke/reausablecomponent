import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ireel } from '../../modals/reel';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
@Input() getlikedata ! :boolean
  @Output()sendliketoparent:EventEmitter<boolean>=new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }


  onclicklike(){
    this.getlikedata=!this.getlikedata
    this.sendliketoparent.emit(this.getlikedata)
  }
}
