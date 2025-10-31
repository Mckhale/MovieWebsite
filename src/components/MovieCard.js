import React from 'react';
import styled from 'styled-components';  
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05); /* Glass-like background */
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 30px rgba(138, 43, 226, 0.4);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: filter 0.3s ease;
`;

const Title = styled.h3`
  padding: 15px;
  color: #fff;
  font-weight: 600;
  text-align: center;
`;

const MovieCard = ({ movie }) => (
  <Card>
    <Link to={`/movie/${movie.id}`}>
      <Image src={movie.image} alt={movie.title} />
      <Title>{movie.title}</Title>
    </Link>
  </Card>
);

export default MovieCard;