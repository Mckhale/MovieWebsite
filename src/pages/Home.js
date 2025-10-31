import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import movies from '../data/movies';

const HomeContainer = styled.div`
  background-color: #0d0d0d;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
`;


const Hero = styled.section`
  position: relative;
  height: 90vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 10%,
    rgba(0, 0, 0, 0.7) 70%,
    rgba(0, 0, 0, 0.9) 100%
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 4rem 6rem;
  max-width: 800px;
`;

const HeroTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
  color: #fff;
`;

const HeroMeta = styled.div`
  font-size: 0.95rem;
  color: #b3b3b3;
  margin-bottom: 1rem;
  span {
    margin-right: 10px;
  }
`;

const HeroDesc = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ccc;
  max-width: 650px;
  margin-bottom: 2rem;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const WatchNow = styled.a`
  background: #8a2be2;
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #b066ff;
  }
`;

const Favorite = styled.button`
  background: transparent;
  border: 2px solid #555;
  color: #fff;
  padding: 12px 28px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255,255,255,0.1);
    border-color: #8a2be2;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 3rem 4rem 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;

  &::before, &::after {
    content: "🔥";
  }
`;

const Home = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === movies.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (query) => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const currentMovie = movies[currentIndex];

  return (
    <HomeContainer>
      
      <Hero>
        {movies.map((movie, index) => (
          <BackgroundImage
            key={movie.id}
            image={movie.banner || movie.image}
            active={index === currentIndex}
          />
        ))}
        <Overlay />
        <HeroContent>
          <HeroTitle>{currentMovie.title}</HeroTitle>
          <HeroMeta>
            <span>{currentMovie.genre}</span>
            <span>📅 {currentMovie.year}</span>
            <span>🌍 {currentMovie.country}</span>
          </HeroMeta>
          <HeroDesc>{currentMovie.description}</HeroDesc>
          <Buttons>
            <WatchNow href={currentMovie.link} target="_blank" rel="noopener noreferrer">
              ▶ Watch Now
            </WatchNow>
            <Favorite>♡ Favorite</Favorite>
          </Buttons>
        </HeroContent>
      </Hero>

      
      <SectionTitle>Trending Now</SectionTitle>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={filteredMovies} />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
