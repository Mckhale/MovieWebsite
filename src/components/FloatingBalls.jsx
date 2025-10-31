import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Ball = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: radial-gradient(circle, #b57bff 0%, #8a2be2 100%);
  border-radius: 50%;
  filter: blur(15px);
  opacity: 0.6;
  pointer-events: none;
`;

const FloatingBalls = ({ count = 8 }) => {
  const [balls, setBalls] = useState([]);

  const generateBalls = () =>
    Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 80 + Math.random() * 100,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
    }));

 
  useEffect(() => {
    setBalls(generateBalls());
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prev) =>
        prev.map((b) => {
          let newX = b.x + b.dx;
          let newY = b.y + b.dy;

         
          if (newX < 0 || newX > 100) b.dx = -b.dx;
          if (newY < 0 || newY > 100) b.dy = -b.dy;

          return {
            ...b,
            x: Math.max(0, Math.min(newX, 100)),
            y: Math.max(0, Math.min(newY, 100)),
          };
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {balls.map((ball, i) => (
        <Ball key={i} size={ball.size} style={{ top: `${ball.y}%`, left: `${ball.x}%` }} />
      ))}
    </>
  );
};

export default FloatingBalls;
