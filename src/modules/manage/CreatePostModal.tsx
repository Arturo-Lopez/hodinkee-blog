import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Button, TextAreaInput, TextInput, Modal, FileInput } from '@ui';
import usePostsStorage, { Post } from '@hooks/usePostsStorage';
import FormCardContainer from './FormCardContainer';

interface CreatePostProps {
  onClose: () => void;
  open: boolean;
}

const CreatePostModal: React.FC<CreatePostProps> = ({ onClose, open }) => {
  const { addPost } = usePostsStorage();

  const { values, handleChange, errors, handleSubmit, resetForm } = useFormik<Post>({
    initialValues: {
      title: '',
      description: '',
      content: '',
      author: '',
      publishedAt: '',
      urlToImage: '',
      url: '',
    },
    onSubmit: (data) => {
      addPost({
        title: data.title,
        author: data.author,
        content: data.content,
        description: data.description,
        publishedAt: new Date().toISOString(),
        url: data.title,
        urlToImage: data.urlToImage,
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
  });

  const handleOnClose = () => {
    onClose();
    resetForm();
  };

  return (
    <Modal open={open}>
      <FormCardContainer>
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit}>
          <TextInput value={values.title} onChange={handleChange} name="title" label="Title" error={errors.title} />
          <FileInput
            value={values.urlToImage}
            onChange={handleChange('urlToImage')}
            name="urlToImage"
            label="Image"
            error={errors.urlToImage}
          />
          <TextInput value={values.author} onChange={handleChange} name="author" label="Author" error={errors.author} />
          <TextInput
            value={values.description}
            onChange={handleChange}
            name="description"
            label="Description"
            error={errors.description}
          />
          <TextAreaInput
            value={values.content}
            onChange={handleChange}
            name="content"
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

export default CreatePostModal;
