import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../services/project-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ProjectDataService){

  }
  cards:any;
  // cards = [{
  //   title: 'Modern Website',
  //   description: 'Some quick example text to build on the card title and make up the bulk of the card content',
  //   img: '../../assets/pokemon.png'
  // },
  // {
  //   title: 'Card Title 2',
  //   description: 'Some quick example text to build on the card title and make up the bulk of the card content',
  //   buttonText: 'Button',
  //   img: '../../assets/cute.png'
  // },
  // {
  //   title: 'Card Title 3',
  //   description: 'Some quick example text to build on the card title and make up the bulk of the card content',
  //   buttonText: 'Button',
  //   img: '../../assets/pokemon.png'
  // },
  // {
  //   title: 'Card Title 4',
  //   description: 'Some quick example text to build on the card title and make up the bulk of the card content',
  //   buttonText: 'Button',
  //   img: '../../assets/cute.png'
  // }];

  ngOnInit(){
    this.getDataFromApi()
  }
  getDataFromApi(){
    this.service.getData().subscribe((response)=>{
      this.cards = response;
    },(error)=>{
      console.log('Error is',error);
    })
  }

}
