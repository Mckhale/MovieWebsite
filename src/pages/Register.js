// src/pages/Register.jsx
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import FloatingBalls from '../components/FloatingBalls';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top, #1a0033, #000);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
`;

const GlassCard = styled.form`
  position: relative; 
  background: rgba(17, 17, 17, 0.9);
  border: 1px solid rgba(138, 43, 226, 0.3);
  box-shadow: 0 0 30px rgba(138, 43, 226, 0.4);
  border-radius: 20px;
  padding: 45px 35px;
  width: 360px;
  backdrop-filter: blur(10px);
  z-index: 1;
`;

const Title = styled.h2`
  color: #b57bff;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  background: #222;
  color: #fff;
  outline: none;
  transition: 0.3s;
  margin-bottom: 18px;
  &:focus {
    background: #2b004d;
    box-shadow: 0 0 8px #8a2be2;
  }
`;

const Button = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #8a2be2, #a74fff);
  color: #fff;
  padding: 12px 0;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 15px #8a2be2;
    transform: translateY(-2px);
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 600;
`;

const LoginLink = styled.p`
  margin-top: 20px;
  text-align: center;
  a {
    color: #b57bff;
    font-weight: 600;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError("Passwords don't match");
      return;
    }
    const success = register(email, password);
    if (success) navigate('/');
    else setError('Failed to register');
  };

  return (
    <Container>
      <FloatingBalls count={10} />
      <GlassCard onSubmit={handleSubmit}>
        <Title>Register</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        <Button type="submit">Register</Button>
        <LoginLink>
          Already have an account? <Link to="/login">Log In</Link>
        </LoginLink>
      </GlassCard>
    </Container>
  );
};

export default Register;
