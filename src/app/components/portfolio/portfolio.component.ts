import { Component, OnInit } from '@angular/core';
import { PortfolioType } from './portfolia.enum';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: [ './portfolio.component.scss' ]
})
export class PortfolioComponent implements OnInit {
  type: PortfolioType = PortfolioType.All;

  readonly portfolioType = PortfolioType;

  constructor() { }

  ngOnInit(): void {
  }

  onSectionClick(type: PortfolioType): void {
    this.type = type;
  }
}
