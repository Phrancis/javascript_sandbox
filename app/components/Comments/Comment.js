import React from 'react';

const Comment = ({author, children}) => (
    <div className="comment">
        <h3 className="commentAuthor">
            {author}
        </h3>
        {children}
    </div>
);
export default Comment;