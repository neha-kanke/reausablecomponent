import { Component } from '@angular/core';
import { Ireel } from './shared/modals/reel';
import { reels } from './shared/consts/reels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
 reelarray:Array<Ireel>=reels

  title = 'reausablecomponent';



  onlikestateupdate(state:boolean,id:number){
    console.log(state,id);
   this.reelarray.forEach(ele=>{
    if(ele.id===id){
      if(state){
        ele.likeCount++
      }else{
        ele.likeCount--
      }
    }
   })


  }
}
