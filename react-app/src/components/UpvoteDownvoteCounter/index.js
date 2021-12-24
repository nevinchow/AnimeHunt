import React from 'react';
import './UpvoteDownvoteCounter.css'
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router'
import { increaseUpvote } from '../../store/post';
import { decreaseUpvote } from '../../store/post';

function UpvoteDownvoteCounter({post}) {
    const count = post.upvoteCount
    const dispatch = useDispatch();
    const history = useHistory();

    const upvote = async(e, post) => {
        e.preventDefault();
        e.stopPropagation();
        let data = await dispatch(increaseUpvote(post))
        if (data) {
            history.push(`/`)
        }
    }

    const downvote = async(e, post) => {
        e.preventDefault();
        e.stopPropagation();
        let data = await dispatch(decreaseUpvote(post))
        if (data) {
            history.push(`/`)
        }
    }


    return (
        <>
        <div className='counter-container'>
        <i class="far fa-caret-square-up fa-2x" onClick={(e)=> {upvote(e, post)}}></i>
        <p className="count">{count}</p>
        <i class="far fa-caret-square-down fa-2x" onClick={(e)=> {downvote(e, post)}}></i>
        </div>
        </>
    )
}

export default UpvoteDownvoteCounter
