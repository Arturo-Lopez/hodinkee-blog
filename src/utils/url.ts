export const isValidURL = (uri: string) => {
  const res = uri.match(
    // eslint-disable-next-line no-useless-escape
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
};

export const validatePostUrl = (url: string) => {
  if (isValidURL(url)) return url;

  return `/${url}`;
};
