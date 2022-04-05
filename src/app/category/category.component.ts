import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title="Category List";
  categories:Category[]=[
    {categoryId:1,categoryName:"Electronics"},
    {categoryId:2,categoryName:"Mobile"},
    {categoryId:3,categoryName:"TV"},
    {categoryId:4,categoryName:"Fridges"},
    {categoryId:5,categoryName:"Washing Machine"},
  ]

  ngOnInit(): void {
  }

}
