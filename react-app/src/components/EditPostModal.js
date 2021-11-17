import React from 'react';
import ReactDom from 'react-dom';
import { Modal } from '../context/Modal';
import NewPostForm from './NewPostForm';
import { useState } from 'react';
import EditPostForm from './EditPostForm';


function EditPostModal({post}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button onClick={() => setShowModal(true)}>Edit Post</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditPostForm setShowModal={setShowModal} post={post}/>
          </Modal>
        )}
      </>
    );
  }

  export default EditPostModal;
