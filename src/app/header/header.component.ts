import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
              '../../assets/fonts/Roboto/roboto.css',
              '../../assets/fonts/Montserrat/montserrat.css'
            ]
})

export class HeaderComponent implements OnInit {

  public showmenu: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  showMenu(): void {
    console.log('waf')
    if(!this.showmenu) {
      this.showmenu = true;
      console.log('awfa')
    }
  }
}
