import React from 'react';
import ReactDom from 'react-dom';
import { Modal } from '../context/Modal';
import NewPostForm from './NewPostForm';
import { useState } from 'react';
import EditPostForm from './EditPostForm';


function EditPostModal({post}) {
    const [showEditPostModal, setShowEditPostModal] = useState(false);


    return (
      <>
        <button onClick={(e) => {
          e.stopPropagation()
          setShowEditPostModal(true)}}>Edit Post</button>
        {showEditPostModal && (
          <Modal onClose={() => setShowEditPostModal(false)}>
            <EditPostForm setShowEditPostModal={setShowEditPostModal} post={post}/>
          </Modal>
        )}
      </>
    );
  }

  export default EditPostModal;
