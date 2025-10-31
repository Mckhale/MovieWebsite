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

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #8a2be2, #b57bff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px #8a2be2, 0 0 20px #b57bff, 0 0 30px #8a2be2;
  letter-spacing: 2px;
  animation: glow 2s ease-in-out infinite alternate;

  @keyframes glow {
    0% { text-shadow: 0 0 10px #8a2be2, 0 0 20px #b57bff, 0 0 30px #8a2be2; }
    100% { text-shadow: 0 0 20px #b57bff, 0 0 30px #8a2be2, 0 0 40px #b57bff; }
  }
`;

const Title = styled.h2`
  color: #b57bff;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 2rem;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
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
  &:focus {
    background: #2b004d;
    box-shadow: 0 0 8px #8a2be2;
  }
`;

const TogglePassword = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #aaa;
  cursor: pointer;
  &:hover {
    color: #b57bff;
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

const RegisterLink = styled.p`
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

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!validateEmail(email)) return setError('Please enter a valid email.');
    if (password.length < 6) return setError('Password must be at least 6 characters.');
    setLoading(true);
    try {
      const success = await login(email, password);
      if (success) navigate('/');
      else setError('Invalid email or password.');
    } catch {
      setError('An error occurred. Try again.');
    }
    setLoading(false);
  };

  return (
    <Container>
      <FloatingBalls count={12} />
      <GlassCard onSubmit={handleSubmit}>
        <Logo>NetTube</Logo>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <InputGroup>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TogglePassword
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </TogglePassword>
        </InputGroup>
        <Button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </Button>
        <RegisterLink>
          Don't have an account? <Link to="/register">Register</Link>
        </RegisterLink>
      </GlassCard>
    </Container>
  );
};

export default Login;
