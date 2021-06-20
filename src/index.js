// == Import
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import
// Composants
import Blog from 'src/components/Blog';

// == Render
const rootComponent = (
  <Router>
    <Blog />
  </Router>
);

const target = document.getElementById('root');
render(rootComponent, target);
