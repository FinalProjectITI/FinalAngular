import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ICategory } from '../Shared Classes/ICategory';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  AllCategories?: ICategory[]
  errmsg = "";
classActive="nav-item active";
isactive:string='0';
clicked=0;
  constructor(private categorysevice: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categorysevice.GetAllCategories().subscribe(
      data => {
        //console.log(data)
        this.AllCategories = data
      },
      error => this.errmsg = error
    );
    window.scrollTo(0,0);
  }
  GetOneCategory(id: number) {
    this.router.navigate(['category', id]);
    this.clicked=id;
    this.isactive='-1';
  }
  goToHome(){
    this.clicked=0;
    this.isactive='0';
    //this.router.navigate(['home'])
  }
  GoToSearch(value:string){
    console.log(value)
   if(value!="")
    this.router.navigate(['search', value]);
    else alert("الرجاء إدخال قيمة للبحث")
    window.scrollTo(80,80);
  }
}
