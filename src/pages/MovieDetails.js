import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import movies from '../data/movies';

const DetailsContainer = styled.div`
  background: #000;
  color: #fff;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`;


const HeroSection = styled.div`
  position: relative;
  height: 80vh;
  background: url(${props => props.bgImage}) no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.2));
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 700px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 0 0 15px rgba(138,43,226,0.6);
`;

const WatchButton = styled.a`
  display: inline-block;
  background: #8a2be2;
  color: #fff;
  padding: 14px 40px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #6a1b9a;
    transform: translateY(-3px);
  }
`;


const InfoSection = styled.div`
  background: #111;
  padding: 80px 8% 50px 8%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  margin-top: -100px; /* overlap portrait with banner */
  position: relative;
  z-index: 3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Poster = styled.img`
  width: 280px;
  height: 400px;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(138, 43, 226, 0.5);
  object-fit: cover;
  border: 3px solid rgba(255,255,255,0.2);
`;

const InfoText = styled.div`
  max-width: 600px;
`;

const Genre = styled.p`
  color: #8a2be2;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

const Meta = styled.p`
  color: #bbb;
  margin-bottom: 10px;
  font-size: 0.95rem;
`;

const Description = styled.p`
  color: #ddd;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-top: 20px;
`;

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found.</p>;

  return (
    <DetailsContainer>
    
      <HeroSection bgImage={movie.banner}>
        <HeroContent>
          <Title>{movie.title}</Title>
          <WatchButton href={movie.link} target="_blank" rel="noopener noreferrer">
            ▶ Watch Now
          </WatchButton>
        </HeroContent>
      </HeroSection>

     
      <InfoSection>
        <Poster src={movie.image} alt={movie.title} />
        <InfoText>
          <Genre>{movie.genre}</Genre>
          <Meta><strong>Year:</strong> {movie.year}</Meta>
          <Meta><strong>Country:</strong> {movie.country}</Meta>
          <Meta><strong>Production:</strong> {movie.production}</Meta>
          <Meta><strong>Rating:</strong> {movie.rating}</Meta>
          <Meta><strong>Duration:</strong> {movie.duration}</Meta>
          <Description>{movie.description}</Description>
        </InfoText>
      </InfoSection>
    </DetailsContainer>
  );
};

export default MovieDetails;
