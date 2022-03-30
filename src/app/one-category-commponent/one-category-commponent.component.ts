import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AllProductsService } from '../services/all-products.service';
import { IProduct } from '../Shared Classes/IProduct';

@Component({
  selector: 'app-one-category-commponent',
  templateUrl: './one-category-commponent.component.html',
  styleUrls: ['./one-category-commponent.component.scss']
})
export class OneCategoryCommponentComponent implements OnInit {
  CategId?: number;
  CategoryName:string=""
Products:IProduct[]=[]
errormsg:string=""
  constructor(private route:ActivatedRoute,private allProdService:AllProductsService,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
    this.CategId=parseInt(params.get('id')!);
    this.allProdService.GetAllProducts(0,this.CategId).subscribe(
      data=>{
        this.Products=data ;
      if(this.Products.length!=0)
      this.CategoryName=this.Products[0].category;
      else
      this.CategoryName="";
      },
      error=>{this.errormsg=this.errormsg}
    );
    });
    }

    GoToProduct(id:number){
      this.router.navigate(['product',id]);
    }

}
