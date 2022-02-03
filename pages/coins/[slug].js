import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

const Style = styled.div`
  background-color: #f3f7fb;
  box-sizing: border-box;
  .content {
    padding: 1rem;
    background-color: #fff;
    width: 50vw;
    margin-top: 1rem;
    margin-left: 1rem;
  }
  h5 {
    color: #2569a5;
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
  }
  h6 {
    font-size: 1rem;
    display: flex;
    color: #444f5c;
    .title-name {
      font-weight: 300;
      width: 200px;
    }
    .data-name {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;

const CoinsDetail = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [detailData, setDetailData] = useState(null);

  const fetchDetailCoin = async () => {
    setLoading(true);
    const coinDetail = await axios.get(
      `https://api.coinpaprika.com/v1/coins/${router.query.slug}`
    );
    setDetailData(coinDetail.data);
    setLoading(false);
  };
  useEffect(() => {
    if (router.query.slug && detailData === null) {
      fetchDetailCoin();
    }
  }, [router.query.slug, detailData]);
  
  return (
    <Style>
      <Header />
      {loading && <p>Loading.......</p>}
      {detailData && (
        <div className='content'>
          <h5>Coin Detail</h5>
          <h6>
            <span className='title-name'>ID</span>
            <span className='data-name'>{detailData.id}</span>
          </h6>
          <h6>
            <span className='title-name'>NAME</span>
            <span className='data-name'>{detailData.name}</span>
          </h6>
          <h6>
            <span className='title-name'>SYMBOL</span>
            <span className='data-name'>{detailData.symbol}</span>
          </h6>
          <h6>
            <span className='title-name'>TYPE</span>
            <span className='data-name'>{detailData.type}</span>
          </h6>
          <h6>
            <span className='title-name'>ACTIVE</span>
            <span className='data-name'>
              {detailData.is_active ? `yes` : `no`}
            </span>
          </h6>
          <h6>
            <span className='title-name'>NEW</span>
            <span className='data-name'>
              {detailData.is_new ? `yes` : `no`}
            </span>
          </h6>
        </div>
      )}
    </Style>
  );
};

export default CoinsDetail;
