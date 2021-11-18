function PostDetailsPage ({setShowModal}) {

    
    const handleCancel= async (e) => {
        e.preventDefault();
        setShowModal(false)
      }


    return (
        <div className='modal-wrapper'>
            <h2>hi</h2>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default PostDetailsPage
