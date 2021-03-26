import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { NewsApiResponse, fetchApi, Article } from '../utils/api';
import usePostStorage, { Post } from './usePostsStorage';

interface useNewsApiArgs {
  newApiResponse: NewsApiResponse;
}

const NEXT_PUBLIC_NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY as string;
const YESTERDAY = dayjs().subtract(1, 'day').toDate();
const TODAY = new Date();

const subtractOneDay = (date: Date) => dayjs(date).subtract(1, 'day').toDate();

const useNewsApi = ({ newApiResponse }: useNewsApiArgs) => {
  const { getPosts } = usePostStorage();

  const [articles, setArticles] = useState<Array<Post | Article>>([]);
  const [interval, setInterval] = useState({
    from: YESTERDAY,
    to: TODAY,
  });
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchMore = async () => {
    if (!hasMore) return;

    setLoading(true);

    const newFrom = subtractOneDay(interval.from);
    const newTo = subtractOneDay(interval.to);

    setInterval({
      from: newFrom,
      to: newTo,
    });

    const data = await fetchApi(newFrom, newTo, NEXT_PUBLIC_NEWS_API_KEY);

    setHasMore(data.totalResults > 0);
    setArticles((prev) => [...prev, ...data.articles]);

    setLoading(false);
  };

  useEffect(() => {
    getPosts().then((localPosts) => {
      setArticles([...localPosts, ...newApiResponse.articles]);
    });
  }, []);

  return {
    articles,
    loading,
    fetchMore,
    hasMore,
  };
};

export default useNewsApi;
