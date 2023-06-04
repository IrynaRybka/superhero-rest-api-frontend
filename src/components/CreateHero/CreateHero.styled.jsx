import styled from 'styled-components';

export const Container = styled.form`
      display: block;
   position: absolute;
   top: 120px;
   left: 60px;
   padding-bottom: 60px;
`
export const LiveContainer = styled.div`
    display: block;
   position: absolute;
   top: 120px;
   right: 60px;
   background: rgb(255,239,49);
    background: linear-gradient(180deg, rgba(255,239,49,0.4738270308123249) 35%, rgba(255,111,0,0.4290091036414566) 100%);
`
export const Label = styled.label`
   display: block;
   width: 360px;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`
export const Input = styled.input`
    background-color: #fbedcf;
    color: #221a0b;
    width: 360px;
    height: 40px;
    border-radius: 5px;
    border-color: #221a0b;
    font-size: 18px;
    line-height: 1.2;

`
export const Text = styled.textarea`
    background-color: #fbedcf;
    color: #221a0b;
    width: 360px;
    height: 300px;
    resize: none;
    border-radius: 5px;
    border-color: #221a0b;
    font-size: 18px;
    line-height: 1.2;
`
export const Button = styled.button`
      display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 15px;
  border-radius: 4px;
  border: 2px #221a0b solid;
  text-decoration: none;
  color: #221a0b;
  background-color: #fbe1aa;
  min-width: 110px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  &.active {
    background-color: orange;
    color: white;
    border-color: orange;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
    border-color: orange;
  }
`