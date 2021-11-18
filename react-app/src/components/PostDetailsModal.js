import React from 'react';
import ReactDom from 'react-dom';
import { Modal } from '../context/Modal';
import { useState } from 'react';
import PostBar from './PostBar';
import PostDetailsPage from './PostDetailsPage';

function PostDetailsModal({post}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <><div onClick={() => setShowModal(true)}>
        <PostBar post={post}/>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <PostDetailsPage setShowModal={setShowModal}/>
          </Modal>
        )}
      </div>
      </>
    );
  }

  export default PostDetailsModal;
