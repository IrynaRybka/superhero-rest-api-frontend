import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {Card} from './Home.styled';
import css from './Home.module.css';
import { Button } from 'components/CreateHero/CreateHero.styled';

export const Home = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/hero/');
        setData(response.data.heroes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
 
  useEffect(() => {
    setVisibleData(data.slice(0, currentPage * itemsPerPage));
  }, [data, currentPage]);

  const handleClickLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.home}>
      <h1>All superheroes of Marvel</h1>

      {visibleData.length > 0 && (
        <>
          <ul className={css.home_list}>
            {visibleData.map(({ _id, nickname, images }, index) => (
              <Card
                style={{ maxWidth: '280px', display: 'block' }}
                key={`${_id}_${index}`}
                to={`/hero/${_id}`}
                state={{ from: location }}
              >
                <img src={images} width="280" height="420" alt={nickname} />
                <h2>{nickname}</h2>
              </Card>
            ))}
          </ul>
             {data.length === visibleData.length ? (<Button disabled={true} onClick={handleClickLoadMore} style={{ backgroundColor: '#F0F0F0', color: '#151718', border: 'none' }}>Load More</Button>) : (<Button onClick={handleClickLoadMore}>Load More</Button>) } 
        </>
      )}
    </div>
  );
};