/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './styles.scss';

const SinglePost = ({ posts }) => {
  const { slug } = useParams();
  const newLineText = (text) => (text.split('\n').map((str) => <p className="post-paragraph" key={uuidv4()}>{str}</p>));
  const result = posts.find((post) => post.slug === slug);
  return (
    <article className="single-post">
      <h2 className="post-title">{result.title}</h2>
      <div className="post-text">{ newLineText(result.content)}</div>
    </article>
  );
};

SinglePost.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default SinglePost;
