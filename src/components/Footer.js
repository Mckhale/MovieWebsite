import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #111;
  padding: 20px;
  text-align: center;
  color: #aaa;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2025 NetTube. Made by Mckhale.</p>
  </FooterContainer>
);

export default Footer;