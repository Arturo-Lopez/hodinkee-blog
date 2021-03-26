import { useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Button, NavBar, Divider, PostCard, PostCardMain, PostCardSmall } from '@ui';
import useNewsApi from '@hooks/useNewsApi';
import { NewsApiResponse } from 'src/utils/api';

import { validatePostUrl } from 'src/utils/url';
import { formatPostPublishedAt } from 'src/utils/time';

import HomeContainer from './HomeContainer';

interface HomeProps {
  newApiResponse: NewsApiResponse;
}

const HomePage = ({ newApiResponse }: HomeProps) => {
  const { articles, loading, hasMore, fetchMore } = useNewsApi({ newApiResponse });
  const { push } = useRouter();

  const lastPostObserver = useRef<IntersectionObserver>();
  const lastPostRef = useCallback(
    (node: HTMLAnchorElement) => {
      if (loading) return;
      if (lastPostObserver.current) lastPostObserver.current.disconnect();

      lastPostObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchMore();
        }
      });

      if (node) lastPostObserver.current.observe(node);
    },
    [loading, hasMore]
  );

  const [headerArticle] = articles.slice(0, 1);
  const smallArticles = articles.slice(1, 4);
  const bodyArticles = articles.slice(5);

  const HomeHeader = () => (
    <div className="home-header">
      <PostCardMain
        author={headerArticle.author}
        publishedAt={formatPostPublishedAt(headerArticle.publishedAt)}
        description={headerArticle.description}
        title={headerArticle.title}
        imgUrl={headerArticle.urlToImage}
        url={validatePostUrl(headerArticle.url)}
      />
      <div className="home-header__small-posts">
        {smallArticles.map((article) => (
          <PostCardSmall
            key={`small-article-${article.title}`}
            author={article.author}
            publishedAt={formatPostPublishedAt(article.publishedAt)}
            description={article.description}
            title={article.title}
            imgUrl={article.urlToImage}
            url={validatePostUrl(article.url)}
          />
        ))}
      </div>
    </div>
  );

  const HomeContent = () => (
    <div className="home-content">
      {bodyArticles.map((article, idx) => (
        <div key={`article-${article.title}`}>
          <Divider />
          <PostCard
            imgUrl={article.urlToImage}
            title={article.title}
            description={article.description}
            author={article.author}
            publishedAt={formatPostPublishedAt(article.publishedAt)}
            url={validatePostUrl(article?.url)}
            ref={idx + 1 === bodyArticles.length ? lastPostRef : undefined}
          />
        </div>
      ))}
      {loading ? <h2 className="title">Loading</h2> : null}
    </div>
  );

  return (
    <HomeContainer>
      <NavBar>
        <Image src="/img/logo.svg" alt="logo" layout="fixed" width={168.82} height={20} />
        <Button onClick={() => push('/manage')} simple>
          Manage posts
        </Button>
      </NavBar>
      {articles && articles.length > 0 ? (
        <div className="wrapper">
          <HomeHeader />
          <HomeContent />
        </div>
      ) : (
        <h2 className="title">There&apos;s no articles!</h2>
      )}
    </HomeContainer>
  );
};

export default HomePage;
