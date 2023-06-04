import css from './HeroDetails.module.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOneHero, deleteOneHero } from 'api/fetchApiHero';
import { Button } from 'components/CreateHero/CreateHero.styled';
import { Avatar } from './HeroDetails.styled';

export const HeroDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hero, setHero] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOneHero(id);
        setHero(response.data.hero);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteOneHero(id);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={css.heroDetails}>
      {hero && (
        <div>
          <h1>{hero.nickname}</h1>
          <Avatar src={hero.images} width="280" alt={hero.nickname} />
          <p>Real name: {hero.real_name}</p>
          <h2>Description</h2>
          <p>{hero.origin_description}</p>
          <div>
            <h2>Superpowers</h2>
            <p>{hero.superpowers}</p>
          </div>
        </div>
      )}
      <Button type="button" onClick={handleDelete}>
        Delete Hero
      </Button>
    </div>
  );
};