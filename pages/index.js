import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import TableUniversal from '../components/Table';
import { COLUMNS } from '../utils/coloumn';

const Style = styled.div`
  background-color: #f3f7fb;
  /* font-size: 50px; */
  /* color: ${({ theme }) => theme.colors.primary}; */
  .content {
    height: 80vh;
    width: 100vw;
    box-sizing: border-box;
    padding: 2rem;
  }
`;

export default function Home() {
  const [data, setData] = useState([]);
  const columns = useMemo(() => COLUMNS, []);
  const action = {};

  const fetchData = async () => {
    const data = await axios.get('https://api.coinpaprika.com/v1/coins/');
    setData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Style>
      <Header />
      <div className='content'>
        {data.length !== 0 && (
          <TableUniversal columns={columns} data={data} action={action} />
        )}
      </div>
    </Style>
  );
}
