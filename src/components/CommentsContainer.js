import React from 'react'
import Comment from "./Comment";
import commentData from "../utils/data"


const CommentsContainer = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl mb-2'>Comments</h1>
            <CommentList comments={commentData} />
        </div>
    )
}

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => {
        return (
            <div key={index}>
                <Comment data={comment} />
                <div className='border border-l-black  pl-5 ml-5'>
                    <CommentList comments={comment.replies} />
                </div>
            </div>
        );
    });
}

export default CommentsContainer
