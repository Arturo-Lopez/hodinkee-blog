import styled from 'styled-components';

export default styled.div`
  .title {
    text-align: center;
    margin: 2rem 0;
    font-size: 2.5rem;
  }

  .home-header,
  .home-content {
    margin: 0 auto;
    max-width: 1200px;
  }

  .home-header {
    display: grid;
    grid-gap: 16px;
    margin-bottom: 32px;

    &__small-posts {
      display: grid;
      grid-gap: 16px;
      grid-template-rows: repeat(3, 150px);
    }
  }

  .home-content {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: 480px) {
    .home-content {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
    .home-header {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 1024px) {
    .home-content {
      grid-template-columns: 1fr;
      grid-gap: 0px;
    }
    .home-header {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 480px) {
    .home-header {
      grid-template-columns: 1fr;
      grid-gap: 0px;
      margin-bottom: 0px;

      &__small-posts {
        padding: 16px 0px;
        grid-template-rows: repeat(3, 135px);
      }
    }
  }
`;
