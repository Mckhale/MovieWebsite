import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  border: none;
  border-radius: 5px;
  background: #333;
  color: #fff;
  &::placeholder {
    color: #aaa;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;