import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Akshay Akhileshwaran</h2>
        <p>
          <a href="mailto:akshay14806@gmail.com">akshay14806@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Akshay. I am a freshman majoring in Computer Science at the {' '}
        <a href="https://siebelschool.illinois.edu/academics/undergraduate/degree-program-options/bs-computer-science">University of Illinois Urbana Champaign</a> My journey into the world of data science and machine learning began at an early age and I am captivated by the endless possibilities and the power to solve complex problems using technology and Artificial Intelligence.This has led me to explore and master various programming languages and frameworks.{' '}
        Previously, I
        was a SWE Intern at <a href="https://www.habtoor.com/en/">Al Habtoor Group </a>
        and
        <a href="https://www.dunecrest.ae"> Dunecrest American School</a>, and
        am a mentor at <a href="https://www.acm.illinois.edu">ACM@UIUC. </a>
        I am currently conducting research at UIUC under the guidance of
        Dr. Yael Gertner which includes designing curricula and programs for K-12 students.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Akshay Akhileshwaran <Link to="/">akshayakhileshwaran.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
