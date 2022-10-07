import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css',
              '../../assets/fonts/Roboto/roboto.css',
              '../../assets/fonts/Montserrat/montserrat.css'
]
})
export class MenuComponent implements OnInit {

  public hidemenu: boolean = true;

  public openCloseStyles = 
    {
      transition: '2s',
      display: 'block',
      transform: 'translateY(0%)'
    };

  constructor() { }

  ngOnInit(): void {
  }
  
  hideMenu(): void  {
    if(this.hidemenu) {
      this.hidemenu = false;
      console.log('afw')
    }
  }
}
