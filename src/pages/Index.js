import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Akshay Akhileshwaran's personal website. Freshman in CS at the University of Illinois Urbana Champaign, "
      + 'Former SWE Intern at Al Habtoor Group and Dunecrest American School, Current Mentor at ACM UIUC'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">WELCOME TO MY PERSONAL WEBSITE!</Link>
          </h2>
          <p>
            --------------INNOVATIVE | DRIVEN | PROBLEM-SOLVER | TRAVELER--------------
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
