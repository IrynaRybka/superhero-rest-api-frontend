import axios from 'axios';

export const getOneHero = async id => {
  const data = await axios.get(
      `http://localhost:3000/api/hero/${id}`);
   return data;
}

export const deleteOneHero = async id => {
  const data = await axios.delete(
      `http://localhost:3000/api/hero/${id}`);
   return data;
}
