import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { IProduct } from '../Shared Classes/IProduct';

@Component({
  selector: 'app-search-commponent',
  templateUrl: './search-commponent.component.html',
  styleUrls: ['./search-commponent.component.scss']
})
export class SearchCommponentComponent implements OnInit {
  Products:IProduct[]=[]
  searchKey:string="";
  errorMsg="";
  constructor(private route:ActivatedRoute,private searchservice:SearchService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.searchKey=params.get('value')!});
if(this.searchKey!=""){
      this.searchservice.GetSearchResult(this.searchKey,0).subscribe(
        data=>{this.Products=data;},
        error=>{this.errorMsg=error}
      )
    }
     
  }
  // GetSearchResult(){

  // }

  GoToProduct(id:number){
    this.router.navigate(['product',id]);
    window.scrollTo(80,80);
  }
}
