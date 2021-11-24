import React from 'react';
import { Modal } from '../context/Modal';
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
