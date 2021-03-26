import dayjs from 'dayjs';

export const formatPostPublishedAt = (value: string) => dayjs(value).format('MMMM DD, YYYY');
