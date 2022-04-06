import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Icart } from '../Shared Classes/Icart';
import { Posproduct } from '../Shared Classes/posproduct';

@Component({
  selector: 'app-cart-commponent',
  templateUrl: './cart-commponent.component.html',
  styleUrls: ['./cart-commponent.component.scss']
})
export class CartCommponentComponent implements OnInit {

  cartlist?:Icart


  constructor(private shoppingcart:ShoppingCartService, private route:Router) { }
  access:string=String(localStorage.getItem("Alasly-Token"))
  logged:boolean=true;
  error:string=""
  ngOnInit(): void {
    this.shoppingcart.getcard(this.access).subscribe(
        servedata=>
        {
          this.cartlist=servedata
          this.logged=true
        },
        error=>{this.error=error
        this.logged=false
        console.log(error)
        }



    )

      }

      deleletprduct(id:number)
      {

        this.shoppingcart.deletfromcart(id,this.access).subscribe(
          servedata=>
          {

            this.logged=true
          },
          error=>{this.error=error
          this.logged=false
          console.log(error)
          }

        )
        window.location.reload()

      }

      Deletcard()
      {
        this.shoppingcart.DeleteCart(this.access).subscribe(
          servedata=>
          {

            this.logged=true
          },
          error=>{this.error=error
          this.logged=false
          console.log(error)
          }


        )
          window.location.reload()
      }

      updatecart( ProdId:any,Quantity:any)
      {
        var product=new Posproduct(ProdId,Quantity)
        const  mySentences:Array<Posproduct> = [
                 product
                                     ];
        this.shoppingcart.UpdateCart(mySentences,this.access).subscribe(

          servedata=>
          {
            this.logged=true
          },
          error=>{this.error=error
          this.logged=false
          console.log(error)
          }

        )
        window.location.reload()
      }


      GotoProduct()
      {
        this.route.navigate(['products'])
      }
      gotoaddPoductinCart()
      {
        this.route.navigate(['productstocart'])
      }
}
