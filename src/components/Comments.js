// src/components/Comments.js
import React, { useState, useEffect } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch comments from the backend
    fetch('/api/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const handleCommentSubmit = () => {
    // Submit new comment to the backend
    const comment = { text: newComment };
    fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comment),
    })
      .then((response) => response.json())
      .then((data) => {
        setComments([...comments, data]);
        setNewComment('');
      });
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleCommentSubmit}>Submit</button>
    </div>
  );
};

export default Comments;
