import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  isMenuShown: boolean = false;
  activeLinkIndex: number = 0;
  isHeaderVisible: boolean = true;
  headerHeight: number = 155;

  constructor() { }

  ngOnInit(): void {

  }

  onBurgerClick(): void {
    this.isMenuShown = !this.isMenuShown;
  }

  onClick(index: number): void {
    this.activeLinkIndex = index;
    this.isMenuShown = !this.isMenuShown;
  }

  @HostListener('window:scroll', [ '$event' ])
  onScroll(event: any): void {
    const scrollTop: number = event.target.scrollingElement.scrollTop;
    this.isHeaderVisible = scrollTop < this.headerHeight;
  }
}
