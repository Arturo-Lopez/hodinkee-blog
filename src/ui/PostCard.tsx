import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface PostCardProps {
  title: string;
  description: string;
  imgUrl: string;
  author: string;
  publishedAt: string;
  url: string;
  ref: React.ForwardedRef<HTMLAnchorElement>;
}

const PostCardContainer = styled.a`
  display: flex;
  text-decoration: none;

  .post__content,
  .post__image__wrapper {
    flex: 1;
  }

  .post__content {
    margin-right: 20px;

    &__title {
      font-size: 38px;
      margin-bottom: 20px;
      font-weight: 400;
      max-height: 8rem;
      color: var(--text);

      text-overflow: ellipsis;
      overflow: hidden;
    }

    &__description {
      font-family: var(--font-serif);
      color: var(--text-dimmed);
      font-size: 1rem;
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

  .post__image__wrapper {
    height: 288px;
    position: relative;
    .post__image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;

    .post__content {
      margin: 20px 0;

      &__title {
        font-size: 1.25rem;
      }
    }

    .post__image__wrapper {
      padding-bottom: 53%;
      max-height: 0px;
    }
  }

  @media (max-width: 480px) {
    .post__content {
      margin: 20px;
    }
  }
`;

const PostCard: React.FC<PostCardProps> = forwardRef(
  ({ author, description, publishedAt, imgUrl, title, url }, ref: React.ForwardedRef<HTMLAnchorElement>) => (
    <PostCardContainer ref={ref} href={url} target="_blank" rel="noopener noreferrer">
      <div className="post__content">
        <h3 className="post__content__title">{title}</h3>
        <p className="post__content__description">{description}</p>
        <p className="post__content__meta">{`${author} · ${publishedAt}`}</p>
      </div>
      <div className="post__image__wrapper">
        <img src={imgUrl} className="post__image" alt={title} />
      </div>
    </PostCardContainer>
  )
);

export default PostCard;
