import React from 'react';
import Comment from './Comment';
import CommentData from './CommentData';

const CommentList = ({commentData}) => {
    var commentNodes = CommentData.map(function(commentData) {
        return (
            <Comment author={commentData.author} key={commentData.id}>
                {commentData.text}
            </Comment>
        );
    });
    return (
        <div className="commentList">
            {commentNodes}
        </div>
    );
}
export default CommentList;