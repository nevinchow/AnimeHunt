import React from 'react';
import { Modal } from '../context/Modal';
import { useState } from 'react';
import EditCommentForm from './EditCommentForm';


function EditCommentModal({comment, post, setShowButton, showButton}) {
    const [showCommentModal, setShowCommentModal] = useState(false);
    return (
      <>
        <button className='edit-delete-comment-button'style= {{display: showButton ? "block" : "none"}}onClick={(e) => {
          e.stopPropagation()
          setShowCommentModal(true)
          setShowButton(false)}}>Edit</button>
        {showCommentModal && (
          <Modal onClose={() => setShowCommentModal(false)}>
            <EditCommentForm className='edit-comment-modal'setShowCommentModal={setShowCommentModal} comment={comment} post={post} setShowButton={setShowButton}/>
          </Modal>
        )}
      </>
    );
  }

  export default EditCommentModal;
