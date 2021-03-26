import React from 'react';
import styled from 'styled-components';

interface PostCardMainProps {
  title: string;
  description: string;
  imgUrl: string;
  url: string;
  author: string;
  publishedAt: string;
}

const PostCardMainContainer = styled.a`
  position: relative;

  .post__image,
  .post__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .post__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .post__content {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.13) 59.09%, rgba(0, 0, 0, 0.6) 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: white;
    padding: 24px;

    &__title {
      font-size: 2rem;
      margin-bottom: 20px;
      font-weight: 400;
    }

    &__description {
      font-family: var(--font-serif);
      font-size: 18px;
      line-height: 1.5rem;
      margin: 0;
      overflow: hidden;
      overflow-wrap: break-word;
      text-overflow: ellipsis;
      max-height: 4.5rem;
    }

    &__meta {
      text-transform: uppercase;
      font-size: 11px;
      margin: 8px 0 0;
    }

    &__meta::before {
      content: 'By ';
      text-transform: none;
      font-style: italic;
      font-family: var(--font-serif);
    }
  }

  @media (max-width: 1024px) {
    min-height: 400px;
  }

  @media (max-width: 512px) {
    min-height: 300px;
  }

  @media (max-width: 480px) {
    padding-bottom: 100%;
  }
`;

const PostCardMain: React.FC<PostCardMainProps> = ({ imgUrl, title, url, author, description, publishedAt }) => (
  <PostCardMainContainer href={url} target="_blank" rel="noopener noreferrer">
    <img src={imgUrl} className="post__image" alt={title} />
    <div className="post__content">
      <h3 className="post__content__title">{title}</h3>
      <p className="post__content__description">{description}</p>
      <p className="post__content__meta">{`${author} · ${publishedAt}`}</p>
    </div>
  </PostCardMainContainer>
);

export default PostCardMain;
