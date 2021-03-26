import styled from 'styled-components';

const DividerContainer = styled.div`
  height: 56px;
  display: none;
  align-items: center;
  & > div {
    height: 1px;
    background-color: #cccccc;
    width: 100%;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Divider = () => (
  <DividerContainer>
    <div />
  </DividerContainer>
);

export default Divider;
