import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OneProductService } from '../services/one-product.service';
import { SimilarProductService } from '../services/similar-product.service';
import { IOneProduct } from '../Shared Classes/IOneProduct';
import { IProduct } from '../Shared Classes/IProduct';

@Component({
  selector: 'app-one-product-commponent',
  templateUrl: './one-product-commponent.component.html',
  styleUrls: ['./one-product-commponent.component.scss']
})
export class OneProductCommponentComponent implements OnInit {

  CategId?: number;
  productId?: number;
  Products: Array<IOneProduct> = [];
  SimilarProducts: Array<IProduct> = [];
  errormsg: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private oneProduct: OneProductService, private semiProducts: SimilarProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = parseInt(params.get('id')!);
      this.oneProduct.GetProduct(this.productId).subscribe(
        data => {
          this.Products.push(data);
          this.ShowSimilar();
        },
        error => { this.errormsg = error }
      )
    });

  }


  ShowSimilar() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.semiProducts.GetSimilarProducts(this.Products[0].typeID, this.Products[0].categoryID, this.Products[0].id).subscribe(
        data => {
          this.SimilarProducts = data;
        },
        error => { this.errormsg = error }
      )
    })
  }

  GoToProduct(id: number) {
    this.Products = [];
    this.router.navigate(['product', id]);
    window.scrollTo(80, 80);
  }

}
