import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionType, MovieDataType} from '../types';
import {Action} from '../actions';
import {MOVIE_DB_KEY, NO_MOVIES_ERROR_MESSAGE} from '../constants/strings';
type NUM_OF_PAGES = {
  total_pages: string;
};
type LIST_OF_MOVIES = {
  results: MovieDataType[];
};

export const searchMovies = (searchString: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.SEARCH_MOVIES});

    try {
      let fetchedData = await axios.get<NUM_OF_PAGES>(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${MOVIE_DB_KEY}&page=1`,
      );

      let numOfPages = parseInt(fetchedData.data.total_pages);
    
      let allMoviesDetails: MovieDataType[] = [];
      let count = 0;
      for (let i = 1; i < 500; i++) {
       
        let fetchedPageData = await axios.get<LIST_OF_MOVIES>(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${MOVIE_DB_KEY}&page=${i}`,
        );

        for (let movie of fetchedPageData.data.results) {
          if (
            !movie['title'].toLowerCase().startsWith(searchString.toLowerCase())
          )
            continue;

          count += 1;
    
          allMoviesDetails.push({
            title: movie.title,
            overview: movie.overview,
            popularity: movie.popularity,
            adult: movie.adult,
            backdrop_path: movie.backdrop_path,
            poster_path: movie.poster_path,
            vote_average: movie.vote_average,
            id: movie.id,
            release_date: movie.release_date.split('-')[0],
            vote_count: movie.vote_count,
            original_language:movie.original_language
          });

          if (count == 10) break;
        }
        if (count == 10) break;
      }
      if (allMoviesDetails.length == 0)
        dispatch({
          type: ActionType.SEARCH_MOVIES_ERROR,
          payload: NO_MOVIES_ERROR_MESSAGE,
        });
      else {
        allMoviesDetails.sort((a, b) => b.vote_average - a.vote_average);
        dispatch({
          type: ActionType.SEARCH_MOVIES_SUCCESS,
          payload: allMoviesDetails,
        });
      }
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_MOVIES_ERROR,
          payload: err.message,
        });
      } else
        dispatch({
          type: ActionType.SEARCH_MOVIES_ERROR,
          payload: 'Oops, an unexpected error occured',
        });
    }
  };
};
