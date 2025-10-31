import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const MovieList = ({ movies }) => (
  <List>
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </List>
);

export default MovieList;