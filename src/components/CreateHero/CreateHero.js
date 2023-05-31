import { useState } from 'react';
import axios from 'axios';
import {Button, Container, Input, Label, Text} from './CreateHero.styled';


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
    <>
      <form onSubmit={handleSubmit} >
        <Label>
          Nickname:
          <Input type="text" name="nickname" value={formData.nickname} onChange={handleChange} />
        </Label>
        
        <Label>
          Real Name:
          <Input type="text" name="real_name" value={formData.real_name} onChange={handleChange} />
        </Label>
      
        <Label>
          Origin Description:
          <Text name="origin_description" value={formData.origin_description} onChange={handleChange}/>
        </Label>
        
        <Label>
          Superpowers:
          <Input type="text" name="superpowers" value={formData.superpowers} onChange={handleChange} />
        </Label>
        
        <Label>
          Catch Phrase:
          <Input type="text" name="catch_phrase" value={formData.catch_phrase} onChange={handleChange} />
        </Label>
      
        <Label>
          Images:
          <Input type="text" name="images" value={formData.images} onChange={handleChange} placeholder='Copy URL picture in internet and paste' />
        </Label>
        <Button type="submit">Create Hero</Button>
      </form>
      <Container
        style={{
          maxWidth: "280px",
          marginLeft: "60px"
        }}
        key={formData.id}
      >
        <img
          src={formData.images}
          width="280"
          height="420"
          alt={formData.nickname}
        />
        <h2>{formData.nickname}</h2> 
        <p>Real name: {formData.real_name}</p>
        <h3>Description</h3>
        <p>{formData.origin_description}</p>
        <ul>
          <li>
            <p>Superpowers: {formData.superpowers}</p>
          </li>
          <li>
            <p>Catch Phrase: {formData.catch_phrase}</p>
          </li>
        </ul>
      </Container> 
      </>
  );
};
