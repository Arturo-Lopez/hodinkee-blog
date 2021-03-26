import dayjs from 'dayjs';

export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
}

export interface NewsApiResponse {
  totalResults: number;
  articles: Article[];
}

const NEWS_API_KEY = process.env.NEWS_API_KEY as string;

const YESTERDAY = dayjs().subtract(1, 'day').toDate();
const TODAY = new Date();

/* 
  Dates needs to be in ISO 8601 Format as 
  especified in: https://newsapi.org/docs/endpoints/everything
*/
const formatDate = (date: Date) => dayjs(date).format('YYYY-MM-DD');

export const fetchApi = async (from = YESTERDAY, to = TODAY, key = NEWS_API_KEY): Promise<NewsApiResponse> => {
  try {
    const uri = encodeURI(
      'https://newsapi.org/v2/everything?' +
        'q=“watches”&' +
        `from=${formatDate(from)}&` +
        `to=${formatDate(to)}&` +
        'sortBy=popularity&' +
        `apiKey=${key}`
    );

    const res = await fetch(uri);
    return await res.json();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return null;
  }
};
