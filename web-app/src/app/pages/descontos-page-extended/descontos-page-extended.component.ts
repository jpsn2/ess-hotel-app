import { Component, Input, OnInit} from '@angular/core';
import { DiscountsService } from './descontos-page-extended.service';
import { Discount } from '../../../../../server/src/models/discount';

@Component({
  selector: 'app-descontos-page-extended',
  templateUrl: './descontos-page-extended.component.html',
  styleUrls: ['./descontos-page-extended.component.scss']
})
export class DescontosPageExtendedComponent implements OnInit{
  @Input() hotelName!: string;
  @Input() location!: string;
  @Input() price!: string;
  @Input() imageUrl!: string;

  discounts: Discount[] = [];

  constructor(private dService: DiscountsService){}
  
  ngOnInit(): void {
    this.dService.getData().subscribe((data: any) => {
      this.discounts = data.alldiscounts;
    });
  }
}