import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


// Define the routes for navigation
const routes: Routes = [
  { path: 'admin/categories', component: CategoriesListComponent },
  { path: 'admin/categories/add', component: AddCategoryComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [CategoriesListComponent, CommonModule],
  imports: [CategoriesListComponent, AddCategoryComponent],  // Import RouterModule with routes AddCategoryComponent
  // template: '',
  template: '<app-add-category></app-add-category>,<app-categories-list></app-categories-list>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Blogpost';
}
