import React from 'react';
import ReactDom from 'react-dom';
import { Modal } from '../context/Modal';
import NewPostForm from './NewPostForm';
import { useState } from 'react';
import EditCommentForm from './EditCommentForm';


function EditCommentModal({comment, post, setShowButton, showButton}) {
    const [showCommentModal, setShowCommentModal] = useState(false);
    return (
      <>
        <button style= {{display: showButton ? "block" : "none"}}onClick={(e) => {
          e.stopPropagation()
          setShowCommentModal(true)
          setShowButton(false)}}>Edit Comment</button>
        {showCommentModal && (
          <Modal onClose={() => setShowCommentModal(false)}>
            <EditCommentForm className='edit-comment-modal'setShowCommentModal={setShowCommentModal} comment={comment} post={post} setShowButton={setShowButton}/>
          </Modal>
        )}
      </>
    );
  }

  export default EditCommentModal;
