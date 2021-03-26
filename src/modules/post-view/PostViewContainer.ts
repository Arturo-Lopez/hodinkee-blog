import styled from 'styled-components';

export default styled.div`
  height: 100%;

  .empty {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1em;
    }
  }

  .post__image {
    min-height: 200px;
    max-height: 500px;
    width: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 3.5rem;
    margin: 0 0 0.25em;
    font-weight: 400;
  }

  .post__header {
    max-width: 1200px;
    margin: 0 auto;

    &__meta {
      text-transform: uppercase;
      font-size: 1rem;
      color: var(--text-dimmed);
      margin: 12px 0 0;
    }

    &__meta::before {
      content: 'By ';
      text-transform: none;
      font-style: italic;
      font-family: var(--font-serif);
    }
  }

  .post__content {
    margin: 32px auto;
    line-height: 1.75rem;
    font-family: var(--font-serif);
    max-width: 680px;
  }

  .post__content::first-letter {
    font-size: 3rem;
    margin-right: 6px;
    text-transform: capitalize;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2.5rem;
    }

    .post__header {
      padding: 20px;
    }

    .post__content {
      padding: 0 20px;
    }
  }
`;
