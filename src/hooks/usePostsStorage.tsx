import { useEffect, useState } from 'react';

export interface Post {
  title: string;
  content: string;
  description: string;
  author: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
}

const usePostStorage = () => {
  const [localPosts, setLocalPosts] = useState<Post[]>([]);

  const getPosts = async (): Promise<Post[]> => {
    const data = window.localStorage.getItem('posts');
    if (!data) return [];

    return new Promise((res) => res(JSON.parse(data)));
  };

  const updatePostsStore = async () => {
    const posts = await getPosts();

    setLocalPosts(posts);
  };

  const storePosts = (postsData: Post[]) => {
    const data = JSON.stringify(postsData);
    window.localStorage.setItem('posts', data);

    updatePostsStore();
  };

  const removePost = (post: Post) => {
    const filterePosts = localPosts.filter((p) => p.publishedAt !== post.publishedAt);
    storePosts(filterePosts);
  };

  const updatePost = (post: Post) => {
    const updatedPosts = localPosts.map((p) => {
      if (p.publishedAt !== post.publishedAt) return p;
      return post;
    });
    storePosts(updatedPosts);
  };

  const addPost = (post: Post) => {
    storePosts([...localPosts, post]);
  };

  useEffect(() => {
    updatePostsStore();
  }, []);

  return {
    getPosts,
    localPosts,
    removePost,
    updatePost,
    addPost,
    updatePostsStore,
  };
};

export default usePostStorage;
