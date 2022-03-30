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

  constructor(private categorysevice: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categorysevice.GetAllCategories().subscribe(
      data => {
        //console.log(data)
        this.AllCategories = data
      },
      error => this.errmsg = error
    );
  }
  GetOneCategory(id: number) {
    this.router.navigate(['category', id]);
  }
}
