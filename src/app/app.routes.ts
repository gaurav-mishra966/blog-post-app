import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';


export const routes: Routes = [
  { path: '', component: AddCategoryComponent },
  { path: 'admin/categories', component: CategoriesListComponent },
  { path: 'app-add-category', component: AddCategoryComponent },
 
  
];