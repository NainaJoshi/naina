import { Component, OnInit } from '@angular/core';
import { Todo } from './todos';


@Component({
  selector: 'app-my-components',
  templateUrl: './my-components.component.html',
  styleUrls: ['./my-components.component.css']
})
export class MyComponentsComponent implements OnInit {

  todo: Todo[];

  constructor() {
    this.todo = [
      {
        sno:3,
        title: "jUST",
        des: "24",
        active: true
      }
    ]

    // this.todo=[
    //   {
    //     sno:1,
    //     title:"This is a title",
    //     des:"Description",
    //     active:true
    //   },

    //   {
    //     sno:2,
    //     title:"This is a title2",
    //     des:"Description2",
    //     active:true
    //   },

    //   {
    //     sno:3,
    //     title:"This is a title3",
    //     des:"Description3",
    //     active:true
    //   }
    // ]
   }

  ngOnInit(): void {
  }

}
