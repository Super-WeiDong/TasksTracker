import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  title:string = 'Tasks Tracker';

  constructor(){
   
  }

  ngOnInit(): void {
      
  }
  //we pass this to button
  toggleAddTask() {
    console.log('Toggle');
  }
}
