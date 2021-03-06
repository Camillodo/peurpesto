/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import arrow from 'src/assets/img/arrow.png';

import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './styles.scss';

const SinglePost = ({ posts }) => {
  const { slug } = useParams();
  const newLineText = (text) => (text.split('\n').map((str) => <p className="post-paragraph" key={uuidv4()}>{str}</p>));
  const result = posts.find((post) => post.slug == slug);
  return (
    <article className="single-post" id="top">
      <h2 className="post-title">{result.title}</h2>
      <div className="post-banner-container" style={{ background: `center / contain no-repeat  url(${result.banner})` }} />
      <div className="post-text">{ newLineText(result.content)}</div>
      <div className="to-top">
        <a href="#top"><img src={arrow} alt="arrow" /></a>
      </div>
    </article>
  );
};

SinglePost.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default SinglePost;
