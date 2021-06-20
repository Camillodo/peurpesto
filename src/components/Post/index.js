/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Post = ({
  title,
  excerpt,
  slug,
  thumbnail,
}) => (
  <Link to={`/post/${slug}`} className="post">
    <article>
      <h2 className="post-title">{title}</h2>
      <div
        className="post-cover"
        style={{ background: `center / contain no-repeat  url(${thumbnail})` }}
      />
      <p className="post-excerpt">{excerpt}</p>
    </article>
  </Link>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Post;
