import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Home.module.css';
import {Card} from './Home.styled';
// import  { getHeroes } from '../../api/fetchApiHero';
import axios from 'axios';

const initial = 5;

export const Home = () => {
  const location = useLocation();
  const[totalHeroes, setTotalHeroes] = useState([]);
  const[allItems, setAllItems] = useState(null);
  const [offset, setOffset] = useState(initial);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/hero/', offset);
        setData(response.data.heroes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 
  console.log(data)

  // useEffect(() => {
  //   const fetchHeroesData = async () => {
  //     try {
  //       const data = await getHeroes(offset);
  //       const results = data.data.data.results;
  //       const totalResults = data.data.data.total;
  //       setTotalHeroes(results);
  //       setAllItems(totalResults)
  //     } catch (error) { 
  //       console.error(error.message);
  //     }
  //   };
  
  //   fetchHeroesData();
  // }, [offset]);
 
  // const showMoreItems = () => {
  //   setOffset(previousValue => previousValue + 5);
  // };

  return (
    <div className={css.home}>
      <h1>All superheroes of marvel</h1>

      {data && (
  <ul className={css.home_list}>
    {data.map(({ id, nickname, images }, index) => {
         return (
        <Card
          style={{ maxWidth: '280px', display: 'block' }}
          key={`${id}_${index}`}
          to={`/hero/${id}`}
          state={{ from: location }}
        >
          <img
            src={images}
            width="280"
            height="420"
            alt={nickname}
          />
          <h2>{nickname}</h2>
        </Card>
      );
    })}
  </ul>
      )}
       {/* {data.length === allItems ? (
        <div>
          <p>It`s end of all heroes</p>
          <button
            type="button"
            onClick={showMoreItems}
            disabled={true}
            style={{ backgroundColor: '#F0F0F0', color: '#151718' }}
          >
            Load More
          </button>
        </div>
      ) : (
        <button type="button" onClick={showMoreItems}>
        Load More
      </button>
      )} */}
        
    </div>
  );
};
