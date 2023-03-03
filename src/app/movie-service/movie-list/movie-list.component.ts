import { Component } from '@angular/core';
import { IMovie } from 'c:/Users/Karag/source/repos/Assessment8/src/app/Interfaces/Movie';
import { MovieServiceService } from 'src/app/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  allMovies: IMovie[] | any;

  constructor(private movies: MovieServiceService) {}
  ngOnInit(): void {
    this.allMovies = this.movies.getMovies();
  }
}
