import { Component, OnInit } from '@angular/core';
import {MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MoviesService]
})
export class MoviesComponent implements OnInit {
pageTitle : string="movies_list";
movies: any =[];
filterBy:string;


  constructor(private _movieService : MoviesService ) { }
 
  ngOnInit() {
     this._movieService.getProducts().subscribe((data)=>{
      this.movies=data;
    });
  }

}
