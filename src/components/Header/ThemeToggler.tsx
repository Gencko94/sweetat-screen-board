import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeToggler = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Toggler>
      <TogglerInput
        onChange={() => {
          toggleTheme?.();
        }}
        type="checkbox"
      />
      <Slider />
    </Toggler>
  );
};

export default ThemeToggler;
const Toggler = styled.label`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 17px;
`;
const TogglerInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #2196f3;
  }
  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  &:checked + span::before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
`;
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  border-radius: 100px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &::before {
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 10px;
    width: 10px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;
