import React from 'react';
import ReactDom from 'react-dom';
import { Modal } from '../context/Modal';
import NewPostForm from './NewPostForm';
import { useState } from 'react';

function NewPostModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button onClick={() => setShowModal(true)}>New Post</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <NewPostForm setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    );
  }

  export default NewPostModal;
