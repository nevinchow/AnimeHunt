import React from 'react';
import { Modal } from '../context/Modal';
import { useState } from 'react';
import PostBar from './PostBar';
import PostDetailsPage from './PostDetailsPage';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removePost } from '../store/post';
import EditPostModal from './EditPostModal';
import { useHistory } from 'react-router';
function PostDetailsModal({post}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const user = useSelector((state) => (state.session.user))




    const handleDelete = async (e, post) => {
      e.preventDefault();
      let data = await dispatch(removePost(post.id))
      if (data) {
          history.push(`/`)
      }

  }

    return (
      <>
      <div>
      <div className='post-bar-background'onClick={(e) => {
        e.stopPropagation()
        setShowModal(true)}}>
        <PostBar post={post}/>
        </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <PostDetailsPage setShowModal={setShowModal} post={post}/>
          </Modal>
        )}
        {post.userId === user.id ?
            <>
            <div className='dropdown'>
              <i className="fas fa-ellipsis-h" id='dropdown-button'></i>
              <div className='dropdown-content'>
            <EditPostModal post={post}/>
            <button className='post-bar-edit' onClick={(e)=> {handleDelete(e, post)}}>Delete</button>
              </div>
            </div>
            </> :
            <></>}
      </div>
      </>
    );
  }

  export default PostDetailsModal;
