import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsInHomeService } from '../services/products-in-home.service';
import { IProduct } from '../Shared Classes/IProduct';

@Component({
  selector: 'app-home-commponent',
  templateUrl: './home-commponent.component.html',
  styleUrls: ['./home-commponent.component.scss']
})
export class HomeCommponentComponent implements OnInit {
  Products:IProduct[]=[]
  errormsg:string=""
  constructor(private inHomeProdService:ProductsInHomeService,private router:Router) { }

  ngOnInit(): void {
    this.inHomeProdService.GetAllProducts().subscribe(
      data=>{
        this.Products=data ;},
      error=>{this.errormsg=this.errormsg}
    );
  }

  GoToProduct(id:number){
    this.router.navigate(['product',id]);
  }

}
