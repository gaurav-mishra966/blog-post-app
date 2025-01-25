import { Injectable } from '@angular/core';
import { Categories } from '../model/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Categories[] = [];
  private apiUrl = 'https://your-api-endpoint.com/categories'; 
  
  constructor() {
    //sample categories to test UI component
    //later to intergrate with api responses
    this.categories = [
      {
        id: '47F36FCB-53DD-4BA5-89A5-08DD360F2F55',
        name: 'HTML',
        UrlHandle: 'HTML-Blogs',
      },
      {
        id: '89B7EA92-6E89-4DAC-7073-08DD36133DDF',
        name: 'Asp.netCore',
        UrlHandle: 'Asp.netCore-blogs',
      },
      {
        id: '47F36FCB-53DD-4BA5-89A5-08DD360F2F55',
        name: 'Testing',
        UrlHandle: 'testing-blogs',
      },
      {
        id: '89B7EA92-6E89-4DAC-7073-08DD36133DDF',
        name: 'PHP',
        UrlHandle: 'php-blog',
      },

    ];
  }

  //adding new categories
  addCategory(categories: Categories): void {
    this.categories.push(categories);
  }

  //getting Categories
  getCategories(): Categories[] {
    return this.categories;
  }
}
