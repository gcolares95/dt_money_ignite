import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0rem 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      // todo input apartir do 2 vai receber margin-top
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    transition: filter 0.2s;
    font-weight: 600;
    margin-top: 1rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

// variável para map das colors
const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

// passando propriedades usando funcionalidade do TS Generic, como se fosse passar um parâmetro para uma função 
export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  // $chaves é uma função na interpolação é chamada automaticamente pelo styled components
  background: ${(props) => props.isActive
    ? transparentize(0.9, colors[props.activeColor]) // deixando 90% transparente
    : 'transparent' 
  };

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color .2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')}; // escurecendo a cor em 10% 
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
