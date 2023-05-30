import { useState, useEffect, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../SearchBox/SearchBox';
import noPoster from '../../noImg/noPosterHero.jpg';
import css from './HeroSearch.module.css';
import { getHeroList } from 'api/fetchApiHero';


// export const Hero = () => {
//   const location = useLocation();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [heroes, setHeroes] = useState([]);
//   const queryHeroName = searchParams.get('name') ?? "";

//   useEffect(() => {
//     const fetchHeroesData = async () => {
//       try {
//         if (queryHeroName) {
//           const data = await getHeroList(queryHeroName);
//           setHeroes(data.data.data.results);
//         }
//       } catch (error) {  
//         console.error(error.message);
//           }
//     };
    
//     fetchHeroesData();
//   }, [queryHeroName]);

//   const changeQuery = value => {
//     setSearchParams(value !== '' ? { name: value } : {});
//   };

//   const visibleMovies = useMemo(() => {
//     return heroes.filter(hero =>
//       hero.name.toLowerCase().includes(queryHeroName.toLowerCase())
//     );
//   }, [queryHeroName, heroes]);

//   return (
//     <main>
//       <SearchBox value={queryHeroName} onChange={changeQuery} />
//       <ul className={css.movies_list}>
//         {visibleMovies.length > 0 ? (
//           visibleMovies.map(hero => {
//             let poster = '';
//             const path = hero.thumbnail.path;
//             const extension = hero.thumbnail.extension;
//             if (hero.thumbnail === null) {
//               poster = noPoster;
//             } else {
//               poster = `${path}.${extension}`;
//             }
//             return (
//               <NavLink
//               style={{
//                 maxWidth: "280px",
//                 display: "block",
//               }}
//                 to={`${hero.id}`}
//                 key={hero.id}
//                 state={{ from: location }}
//               >
//                 <img
//                   src={poster}
//                   width="280"
//                   height="420"
//                   alt={hero.name}
//                 />
//                 <h2>{hero.name}</h2>
//               </NavLink>
//             );
//           })) : (<p>We don`t have yet hero of marvel with this name. Try to write something write.</p>)}
//       </ul>
//     </main>
//   );
// };

// import React, { useState } from 'react';
import axios from 'axios';

export const Hero = () => {
  const [formData, setFormData] = useState({
    nickname: '',
    real_name: '',
    origin_description: '',
    superpowers: '',
    catch_phrase: '',
    images: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3000/api/hero/', formData);
      console.log('Hero created successfully!');

      setFormData({
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrase: '',
        images: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nickname:
        <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} />
      </label>
      <br />
      <label>
        Real Name:
        <input type="text" name="real_name" value={formData.real_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Origin Description:
        <textarea name="origin_description" value={formData.origin_description} onChange={handleChange}></textarea>
      </label>
      <br />
      <label>
        Superpowers:
        <input type="text" name="superpowers" value={formData.superpowers} onChange={handleChange} />
      </label>
      <br />
      <label>
        Catch Phrase:
        <input type="text" name="catch_phrase" value={formData.catch_phrase} onChange={handleChange} />
      </label>
      <br />
      <label>
        Images:
        <input type="text" name="images" value={formData.images} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Create Hero</button>
    </form>
  );
};

