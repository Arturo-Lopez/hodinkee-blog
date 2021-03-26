import { useRouter } from 'next/router';

import usePostStorage from '@hooks/usePostsStorage';
import { Button } from '@ui';
import { formatPostPublishedAt } from 'src/utils/time';

import PostViewContainer from './PostViewContainer';

const PostView = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { localPosts } = usePostStorage();

  const post = localPosts.find((e) => e.title === id);

  if (!post) {
    return (
      <PostViewContainer>
        <div className="empty">
          <h1>[Not Found 404]</h1>
          <Button onClick={() => router.push('/')}>Go back home</Button>
        </div>
      </PostViewContainer>
    );
  }

  return (
    <PostViewContainer>
      <img src={post.urlToImage} className="post__image" alt={post.title} />
      <div className="wrapper">
        <div className="post__header">
          <h1>{post.title}</h1>
          <div className="post__header__meta">{`${post.author} · ${formatPostPublishedAt(post.publishedAt)}`}</div>
        </div>
        <p className="post__content">{post.content}</p>
      </div>
    </PostViewContainer>
  );
};

export default PostView;
