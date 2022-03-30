import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OneProductService } from '../services/one-product.service';
import { IOneProduct } from '../Shared Classes/IOneProduct';

@Component({
  selector: 'app-one-product-commponent',
  templateUrl: './one-product-commponent.component.html',
  styleUrls: ['./one-product-commponent.component.scss']
})
export class OneProductCommponentComponent implements OnInit {

  productId?: number;
  Products: Array<IOneProduct> = [];
  errormsg: string = "";
  

  constructor(private route: ActivatedRoute, private router: Router, private oneProduct: OneProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = parseInt(params.get('id')!);
      this.oneProduct.GetProduct(this.productId).subscribe(
        data => {
          this.Products.push(data);
        },
        error => { this.errormsg = error }
      )
    });
  }  

}
