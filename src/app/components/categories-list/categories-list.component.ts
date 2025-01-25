import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Categories } from '../../model/categories';
import { routes } from '../../app.routes';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  standalone:true,
  imports: [CommonModule,RouterModule  ],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css',
})
export class CategoriesListComponent implements OnInit {
  categories: Categories[] = [];

  constructor(private categoryService: CategoryService,private router:Router) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    console.log(this.categories);
  }

  redirectToAddCategory():void{
    console.log ("Add button clicked!");
    // this.router.navigateByUrl('/admin/categories/add');
    // this.router.navigate(['/admin/categories/add']);
  }

  onEdit():void{
    console.log('Edit button clicked !');
  }

  onDelete():void{
    console.log('delete button clicked!');
  }
}
