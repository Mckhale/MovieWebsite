import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';  


const glow = keyframes`
  0% { text-shadow: 0 0 5px #fff, 0 0 10px #8a2be2, 0 0 20px #8a2be2; }
  50% { text-shadow: 0 0 10px #fff, 0 0 20px #a64dff, 0 0 30px #a64dff; }
  100% { text-shadow: 0 0 5px #fff, 0 0 10px #8a2be2, 0 0 20px #8a2be2; }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.85), transparent);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 2.2rem;
  font-weight: bold;
  animation: ${glow} 2.5s infinite alternate;
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);

  &:hover {
    color: #fff;
    text-shadow: 0 0 10px #fff, 0 0 20px #8a2be2, 0 0 30px #8a2be2;
    transform: scale(1.05);
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;

  &:hover {
    color: #8a2be2;
    transform: scale(1.05);
  }
`;

const Greeting = styled.span`
  color: #8a2be2;
  font-weight: 600;
  font-size: 1.1rem;
  margin-right: 15px;
`;

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Logo>NetTube</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">TV Shows</NavLink>
        <NavLink to="/">Movies</NavLink>

        {user ? (
          <>
            
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;