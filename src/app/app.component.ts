import {Component, HostListener, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, share} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit{
  showSubmenu = false;
  isExpanded = true;
  isShowing = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.innerWidth = window.innerWidth;
  }
  title = 'iComp';
  innerWidth;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Tablet, Breakpoints.Handset])
      .pipe(
          map(result => result.matches),
          share()
      );

  @HostListener('window:resize')
  public onResize(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }

  macMenu = [
    {
      name: 'iMac',
      image: '/assets/images/mac-menu/imac.png',
      router: '/imac'
    },
    {
      name: 'Mac Pro',
      image: '/assets/images/mac-menu/mac-pro1.png',
      router: '/mac-pro'
    },
    {
      name: 'Mac mini',
      image: '/assets/images/mac-menu/mac-mini.png',
      router: '/mac-mini'
    },
    {
      name: 'MacBook Air',
      image: '/assets/images/mac-menu/mac-air.png',
      router: '/macbook-air'
    },
    {
      name: 'MacBook Pro',
      image: '/assets/images/mac-menu/mac-book.png',
      router: '/macbook-pro'
    },
  ];

  ngOnInit(): void {
  }
}
