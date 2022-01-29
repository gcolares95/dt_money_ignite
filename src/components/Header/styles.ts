import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto; // para centralizar o content
  
  padding: 2rem 1rem 12rem; // top | horizontal | bottom
  display: flex;
  align-items: center; // alinhando logo e button verticalmente ao centro
  justify-content: space-between;
  
  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;


