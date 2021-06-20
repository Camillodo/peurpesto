// == Import
import React, { useState, useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';

// Composants
import Posts from 'src/components/Posts';
import NotFound from 'src/components/NotFound';
import SinglePost from 'src/components/SinglePost';
import postsData from 'src/data/posts';
import Header from 'src/components/Header';
import ScrollToTop from 'src/components/ScrollToTop';

// data, styles et utilitaires

import './styles.scss';

// == Composant
const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData);
  }, []);

  return (
    <div className="blog">
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Posts posts={posts} />
        </Route>
        <Route path="/post/:slug">
          <SinglePost posts={posts} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default Blog;
