import React from 'react';
import styled from 'styled-components';

interface PostCardSmallProps {
  title: string;
  description: string;
  imgUrl: string;
  author: string;
  publishedAt: string;
  url: string;
}

const PostCardSmallContainer = styled.a`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 8px;
  text-decoration: none;

  .post__content {
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 18px;
      margin-bottom: 8px;
      font-weight: 400;
      color: var(--text);
    }

    &__description {
      font-family: var(--font-sans-serif);
      color: var(--text-dimmed);
      font-size: 1rem;
      line-height: 1.5rem;
      margin: 0;
      overflow: hidden;
      overflow-wrap: break-word;
      text-overflow: ellipsis;
      max-height: 2.625rem;
    }

    &__meta {
      text-transform: uppercase;
      font-size: 11px;
      color: var(--text-dimmed);
      margin: 8px 0 0;
    }

    &__meta::before {
      content: 'By ';
      text-transform: none;
      font-style: italic;
      font-family: var(--font-serif);
    }
  }

  .post__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    grid-template-columns: 125px 1fr;

    .post__content {
      padding: 8px 8px 8px 0;
    }

    .post__content {
      &__title {
        max-height: 40px;
        overflow: hidden;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
      }
      &__description {
        font-size: 0.75rem;
        line-height: 1.25rem;
      }
    }
  }
`;

const PostCardSmall: React.FC<PostCardSmallProps> = ({ author, publishedAt, title, description, imgUrl, url }) => (
  <PostCardSmallContainer href={url} target="_blank" rel="noopener noreferrer">
    <img src={imgUrl} className="post__image" alt={title} />
    <div className="post__content">
      <h3 className="post__content__title">{title}</h3>
      <p className="post__content__description">{description}</p>
      <p className="post__content__meta">{`${author} · ${publishedAt}`}</p>
    </div>
  </PostCardSmallContainer>
);

export default PostCardSmall;
