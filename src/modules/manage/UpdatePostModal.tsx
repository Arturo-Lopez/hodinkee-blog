import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Button, TextAreaInput, TextInput, Modal, FileInput } from '@ui';
import usePostsStorage, { Post } from '@hooks/usePostsStorage';
import FormCardContainer from './FormCardContainer';

interface UpdatePostProps {
  onClose: () => void;
  open: boolean;
  post: Post | null;
}

const UpdatePostModal: React.FC<UpdatePostProps> = ({ onClose, open, post }) => {
  const { updatePost } = usePostsStorage();

  const { values, handleChange, errors, handleSubmit, resetForm } = useFormik<Post>({
    initialValues: {
      title: post?.title || '',
      description: post?.description || '',
      content: post?.content || '',
      author: post?.author || '',
      publishedAt: post?.publishedAt || '',
      urlToImage: post?.urlToImage || '',
      url: post?.url || '',
    },
    onSubmit: (data) => {
      updatePost({
        title: data.title,
        author: data.author,
        content: data.content,
        description: data.description,
        url: data.title,
        urlToImage: data.urlToImage,
        publishedAt: post.publishedAt,
      });

      onClose();
    },
    validationSchema: yup.object().shape({
      title: yup.string().required(),
      description: yup.string().required(),
      content: yup.string().required(),
      author: yup.string().required(),
      urlToImage: yup.string().required('Image is a required field'),
    }),
    enableReinitialize: true,
  });

  const handleOnClose = () => {
    onClose();
    resetForm();
  };

  return (
    <Modal open={open}>
      <FormCardContainer>
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <TextInput value={values.title} onChange={handleChange('title')} label="Title" error={errors.title} />
          <FileInput
            value={values.urlToImage}
            onChange={handleChange('urlToImage')}
            label="Image"
            error={errors.urlToImage}
          />
          <TextInput value={values.author} onChange={handleChange('author')} label="Author" error={errors.author} />
          <TextInput
            value={values.description}
            onChange={handleChange('description')}
            label="Description"
            error={errors.description}
          />
          <TextAreaInput
            value={values.content}
            onChange={handleChange('content')}
            label="Content"
            error={errors.content}
          />
          <Button type="submit" fullWidth big>
            Save post
          </Button>
          <Button type="button" onClick={handleOnClose} fullWidth simple big>
            Cancel
          </Button>
        </form>
      </FormCardContainer>
    </Modal>
  );
};

export default UpdatePostModal;
