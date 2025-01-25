import { Component } from '@angular/core';

@Component({
  selector: 'app-add-category',
  standalone:true,
  imports: [],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  formDataSubmit():void{
    console.log('Form Save Clicked !');
  }

  formDataCancel():void{
    console.log('Form Data removed!');
  }
}
