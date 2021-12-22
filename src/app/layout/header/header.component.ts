import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  username:string="ssmunoz";
  constructor() { }

  ngAfterViewInit(): void {
    
  }
  
  ngOnInit(): void {
  }

  sesion(){
    console.log("cerrando sesion")
  }

}
