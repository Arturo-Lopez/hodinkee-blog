import { useState } from 'react';
import { Edit2, Trash, Link as LinkIcon } from 'react-feather';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Button, Divider, NavBar, PostCard } from '@ui';
import usePostStorage, { Post } from '@hooks/usePostsStorage';

import ManagePostsContainer from './ManagePostsContainer';
import CreatePostModal from './CreatePostModal';
import UpdatePostModal from './UpdatePostModal';
import DeletePostModal from './DeletePostModal';

const ManagePage = () => {
  const { localPosts, updatePostsStore } = usePostStorage();
  const { push } = useRouter();

  const [addPostModal, setAddPostModal] = useState(false);
  const openAddPostModal = () => setAddPostModal(true);
  const closeAddPostModal = () => {
    updatePostsStore();
    setAddPostModal(false);
  };

  const [updatePostModal, setUpdatePostModal] = useState<Post | null>(null);
  const openUpdatePostModal = (post: Post) => setUpdatePostModal(post);
  const closeUpdatePostModal = () => {
    updatePostsStore();
    setUpdatePostModal(null);
  };

  const [deletePostModal, setDeletePostModal] = useState<Post | null>(null);
  const openDeletePostModal = (post: Post) => setDeletePostModal(post);
  const closeDeletePostModal = () => {
    updatePostsStore();
    setDeletePostModal(null);
  };

  const PostsList = () => (
    <>
      {localPosts?.map((post) => (
        <div key={`post-${post.title}`} className="post-item">
          <PostCard
            title={post.title}
            author={post.author}
            imgUrl={post.urlToImage}
            publishedAt={post.publishedAt}
            url={post.title}
            description=""
            ref={undefined}
          />
          <div className="post-item__actions">
            <button onClick={() => openUpdatePostModal(post)} type="button">
              <Edit2 size={24} />
            </button>
            <button onClick={() => openDeletePostModal(post)} type="button">
              <Trash size={24} />
            </button>
            <Link href={`/${post.title}`}>
              <a>
                <LinkIcon size={24} />
              </a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <ManagePostsContainer>
      <NavBar>
        <Button onClick={() => push('/')} simple>
          Back to home
        </Button>
        <Button onClick={openAddPostModal}>Add post</Button>
      </NavBar>
      <div className="wrapper">
        <div className="manage-header">
          <h2>Manage Local Posts</h2>
          <Divider />
        </div>
        <div className="manage-content">
          {localPosts.length > 0 ? (
            <PostsList />
          ) : (
            <h3 className="empty">Nothing here! Maybe you should write something new ✍️</h3>
          )}
        </div>
      </div>

      <CreatePostModal open={addPostModal} onClose={closeAddPostModal} />
      <UpdatePostModal open={updatePostModal !== null} onClose={closeUpdatePostModal} post={updatePostModal} />
      <DeletePostModal open={deletePostModal !== null} onClose={closeDeletePostModal} post={deletePostModal} />
    </ManagePostsContainer>
  );
};

export default ManagePage;
