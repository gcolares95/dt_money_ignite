import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%; // por padrão a table não ocupa toda a largura
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      background: red;
      border: 0; // tirando border que possa existir
      background: var(--shape); 
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;