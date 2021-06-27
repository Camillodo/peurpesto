// == Import
import React, { useState, useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';

// Composants
import Posts from 'src/components/Posts';
import NotFound from 'src/components/NotFound';
import SinglePost from 'src/components/SinglePost';
import postsData from 'src/data/posts';
import Header from 'src/components/Header';
import About from 'src/components/About';
import ScrollToTop from 'src/components/ScrollToTop';
import Preloader from 'src/components/Preloader';

// data, styles et utilitaires

import './styles.scss';

// == Composant
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [postsReady, setPostsReady] = useState(false);

  useEffect(() => {
    setPosts(postsData);
    setPostsReady(true);
  }, []);

  return (
    <div className="blog">
      {!postsReady && <Preloader />}
      {(postsReady) && (
      <>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <Posts posts={posts} />
          </Route>
          <Route path="/post/:slug" exact>
            <SinglePost posts={posts} />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </>
      )}
    </div>
  );
};

// == Export
export default Blog;
