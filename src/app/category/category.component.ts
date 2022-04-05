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
    {id:1,name:"Electronics"},
    {id:2,name:"Mobile"},
    {id:3,name:"TV"},
    {id:4,name:"Fridges"},
    {id:5,name:"Washing Machine"},
  ]

  ngOnInit(): void {
  }

}
