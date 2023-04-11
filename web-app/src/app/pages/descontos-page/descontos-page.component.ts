import { Component } from '@angular/core';
import { Discount } from '../../../../../server/src/models/discount';
import { DiscountspageService } from './descontos-page.service';
@Component({
  selector: 'app-descontos-page',
  templateUrl: './descontos-page.component.html',
  styleUrls: ['./descontos-page.component.scss']
})
export class DescontosPageComponent {
  discounts: Discount[] = [];

  constructor(private dService: DiscountspageService){}
  
  ngOnInit(): void {
    this.dService.getData().subscribe((data: any) => {
      this.discounts = data.alldiscounts;
    });
  }
}

