import { Injectable } from '@angular/core';
import { IMovie } from './Interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  movies: IMovie[] = [
    {title: "Toy Story", releaseYear: 1995},
    {title: "Forrest Gump", releaseYear: 1994}
  ]
  constructor() { }

  getMovies(){
    return this.movies;
  }
}
