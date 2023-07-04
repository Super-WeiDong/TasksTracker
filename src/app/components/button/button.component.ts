import { Component,OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

//use input to acceppt param, need to init first
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  //allows a child component to emit events that can be captured and handled by its parent component 
  @Output() btnClick :EventEmitter<any>= new EventEmitter();

  constructor(){
    this.text = '';
    this.color = '';
  }

  ngOnInit(): void {
      
  }
  onClick() {
    this.btnClick.emit();
  }
}
