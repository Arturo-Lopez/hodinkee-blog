import styled from 'styled-components';

export default styled.div`
  position: relative;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 24px;
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  margin-bottom: 32px;

  h2 {
    font-weight: 400;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1em;
  }

  form {
    display: grid;
    grid-gap: 16px;
  }

  @media (max-width: 600px) {
    top: 0px;
    left: 0px;
    transform: none;
    width: 100%;
    height: auto;
    max-width: 100%;
    margin-bottom: 0px;
  }
`;
