import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentBox = () => (
    <div className="commentBox">
        <h2>Comment Box</h2>
        <CommentList />
    </div>
);
export default CommentBox;