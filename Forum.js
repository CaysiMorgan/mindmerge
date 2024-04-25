import React, { useState, useRef } from 'react';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const newPostRef = useRef(null);

  const handlePostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handlePostSubmit = () => {
    if (newPost.trim() !== '') {
      const updatedPosts = [{ id: posts.length + 1, content: newPost }, ...posts];
      setPosts(updatedPosts);
      setNewPost('');

      // Scroll to the top of the screen
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div id="Forum">
      <h3 id="forumtext">MindMerge Forum</h3>
      <div>
      {posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <p>{post.content}</p>
          </div>
        ))}
        <textarea 
        placeholder="Chat with us" value={newPost} onChange={handlePostChange} />
        <button id="forumbut" onClick={handlePostSubmit}>➯</button>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Forum;
