import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import styled from 'styled-components';
import SearchIcons from '../components/Icons/Search';

const Input = styled.div`
  position: relative;
  width: 250px;
  input {
    height: 30px;
    width: 200px;
    padding-left: 1rem;
  }
  svg {
    position: absolute;
    right: 13%;
    top: 15%;
  }
`;

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500);
  return (
    <Input>
      <input
        value={value || ''}
        placeholder='Search Data Here'
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      <SearchIcons />
    </Input>
  );
};

export default GlobalFilter;
