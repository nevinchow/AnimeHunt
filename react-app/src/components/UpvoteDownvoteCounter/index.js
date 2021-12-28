import React from 'react';
import './UpvoteDownvoteCounter.css'
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router'
import { increaseUpvote } from '../../store/post';
import { decreaseUpvote } from '../../store/post';
import { useState } from 'react';
function UpvoteDownvoteCounter({post}) {
    const count = post.upvoteCount
    const dispatch = useDispatch();
    const history = useHistory();
    const [clicked, setClicked] = useState(false)
    const [clickedDown, setClickedDown] = useState(false)

    const upvote = async(e, post) => {
        e.preventDefault();
        e.stopPropagation();
        if (clicked === false) {
            await dispatch(increaseUpvote(post))
            setClicked(true)
            history.push(`/`)
        } else if (clicked === true) {
            await dispatch(decreaseUpvote(post))
            setClicked(false)
            history.push(`/`)
        }
    }

    const downvote = async(e, post) => {
        e.preventDefault();
        e.stopPropagation();
        if (clickedDown === false) {
            await dispatch(decreaseUpvote(post))
            setClickedDown(true)
            history.push(`/`)
        } else if (clickedDown === true) {
            await dispatch(increaseUpvote(post))
            setClickedDown(false)
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
