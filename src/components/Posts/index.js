import React from 'react';
import PropTypes from 'prop-types';

import Post from 'src/components/Post';

import './styles.scss';

const Posts = ({ posts }) => (
  <main className="posts">
    <h1 className="posts-title">Peur Pesto</h1>
    <div className="posts-list">
      {posts.reverse().map((post) => (
        <Post
          key={post.id}
          {...post}
        />
      ))}
    </div>
  </main>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Posts;
