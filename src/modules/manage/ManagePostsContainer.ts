import styled from 'styled-components';

export default styled.div`
  position: relative;

  .manage-header,
  .manage-content {
    margin: 0 auto;
    max-width: 1200px;
  }

  .manage-header {
    h2 {
      text-align: center;
      font-size: 2.5rem;
      margin: 1em 0;
    }
  }

  .post-item {
    display: grid;
    grid-template-columns: auto 53px;
    grid-gap: 9px;

    &__actions {
      button,
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text);
        background-color: transparent;
        border: 2px solid var(--input-border);
        height: 44px;
        width: 44px;
        cursor: pointer;
        margin-bottom: 9px;
      }
    }
  }

  .empty {
    text-align: center;
    font-weight: 400;
    font-family: var(--font-sans-serif);
  }
`;
