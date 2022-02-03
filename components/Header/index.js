import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Style = styled.nav`
  height: 100px;
  width: 100vw;
  background-color: #fff;
  box-sizing: border-box;
  padding: 1rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 1rem;
    }
  }
  .home {
    color: #8597ac;
  }
  .coin {
    color: #1e5387;
    border-bottom: 3px solid #1e5387;
  }
`;

const Header = () => {
  return (
    <Style>
      <ul>
        <Link href={`/`}>
          <li className='home'>Home</li>
        </Link>
        <Link href={`/`}>
          <li className='coin'>Coin</li>
        </Link>
      </ul>
    </Style>
  );
};

export default Header;
