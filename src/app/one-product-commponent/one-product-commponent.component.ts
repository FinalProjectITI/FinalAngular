import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { favouriteService } from '../services/favoutite.service';
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
  FavouriteProducts: Array<IProduct> = [];
  errormsg: string = "";
  favourite: boolean = false;
  access:string=String(localStorage.getItem("Alasly-Token"))

  constructor(private route: ActivatedRoute, private router: Router, 
    private oneProduct: OneProductService, private semiProducts: SimilarProductService, 
    private favouriteProduct:favouriteService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = parseInt(params.get('id')!);
      this.oneProduct.GetProduct(this.productId).subscribe(
        data => {
          this.Products.push(data);
          this.getFavourite();
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

  getFavourite(){
    this.favouriteProduct.GetAllFavourites(this.access).subscribe(
      data => {
        this.FavouriteProducts = data;
        this.FavouriteProducts.forEach(element => {
          if(element.id == this.Products[0].id){
            this.favourite = true;
          }
        });
      },
      error => { this.errormsg = error }
    )
  }

  AddToFavourite() {
    if(this.access != ""){
      if (this.favourite) {
        this.favouriteProduct.DeleteFavourite(this.Products[0].id,this.access)
        this.favourite = false;
      } else {
        this.favouriteProduct.Addfavourite(this.Products[0].id,this.access);
        this.favourite = true;
      }
    }
    else{
      this.router.navigate(['login']);
      window.scrollTo(80, 80);
    }

  }

  GoToProduct(id: number) {
    this.Products = [];
    this.router.navigate(['product', id]);
    window.scrollTo(80, 80);
  }

}
