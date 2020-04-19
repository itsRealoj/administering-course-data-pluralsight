import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className='jumbotron'>
    <h1>Karean Administration</h1>
    <p>Using React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to='about' className='btn btn-primary btn-lg'>
      Learn more
    </Link>
  </div>
);

export default HomePage;
