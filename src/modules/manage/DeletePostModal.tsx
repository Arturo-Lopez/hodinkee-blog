import React from 'react';
import { Button, Modal } from '@ui';
import usePostsStorage, { Post } from '@hooks/usePostsStorage';
import FormCardContainer from './FormCardContainer';

interface DeletePostProps {
  onClose: () => void;
  open: boolean;
  post: Post | null;
}

const DeletePostModal: React.FC<DeletePostProps> = ({ onClose, open, post }) => {
  const { removePost } = usePostsStorage();

  const handleRemove = () => {
    removePost(post);
    onClose();
  };

  return (
    <Modal open={open}>
      <FormCardContainer>
        <h2>Delete Post?</h2>
        <Button onClick={handleRemove} type="submit" fullWidth big>
          Delete post
        </Button>
        <Button type="button" onClick={onClose} fullWidth simple big style={{ marginTop: 16 }}>
          Cancel
        </Button>
      </FormCardContainer>
    </Modal>
  );
};

export default DeletePostModal;
