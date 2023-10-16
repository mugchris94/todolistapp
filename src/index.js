import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import photo from './images/Photo.jpg'
import css_logo from './images/css_logo.png'
import html_logo from './images/html_logo.png'
import react_logo from './images/react_logo.png'
import javascript_logo from './images/javascript_logo.png'
import verified_tick from './images/icons/verified_tick.png'
import clock_icon from './images/icons/clock_icon.png'


const userImage = (
  <div>
    <img className='userId' src={photo} alt='chris image' />
    
  </div>
)

const logos = (
  <div className='logos'>
    <h3 className='logo-header'>Front End Technologies</h3>
    <img className="logo" src={css_logo} alt='css' />
    <img className="logo" src={html_logo} alt='html'/>
    <img className="logo" src={javascript_logo} alt='javascript'/>
    <img className="logo" src={react_logo} alt='react'/>
    
  </div>
)

const Subscriber = (
  <div className='subscriber'>
    <label>SUBSCRIBE</label>
    <p>Sign up with your email address to receive news and updates</p>
    <div className='input-form'>
      <input type='text' placeholder='First name'/>
      <input type='text' placeholder='Last name'/>
      <input type='email' placeholder='Email' />
    </div>
    <div className='btn'>
      <button className='button-1' role='button' >Subscribe</button>
    </div>
  </div>
)




//JSX elements

const welcome = 'Welcome to the React Hub'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Christian',
  lastName: 'Mugisha',
}

const date = 'Dec 21, 2022'

const header = (
  <header className='header-wrapper' >
    <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
  </header>
)


// const yearBorn = 1994
const currentYear = new Date().getFullYear()
// const age = currentYear - yearBorn
// const personAge = (
//   <p>
//     {' '}
//     <b> <em>{author.firstName} {author.lastName} </em> </b> is {age} years old
//   </p>
// )


// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)


const main = (
  <main>
    <div className='main-wrapper'>
      <div className='userInfo'>
          {userImage}
          <label className='nameId'>Mugisha Christian</label>
          <span><img src={verified_tick} alt="tick" className='tick'/></span>
          <p className='role'>Junior Developer, Rwanda</p>
            <div id='bio_wrapper'>
              <label className='bio'>Bio</label>
              <article id="article">Software Engineer with a successful track record in the information technology and services industries. Expertise in NodeJS, NestJS, ReactJS, Typescript, SpringBoot, Agile Software Development, Test Driven Development,
                Continuous Integration and Delivery, and SQL/NoSQL Databases. With a bachelor's degree in software engineering.</article>
            </div>  
          <h4 className='skill'>SKILLS</h4>
          <ul id='len'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>JS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Flask</li>
            <li>Django</li>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Data Analysis</li>
            <li>MYSQL</li>
            <li>GraphQL</li>
            <li>Docker</li>
            <li>Git</li>
          </ul>

          <img className="clock" src={clock_icon} alt='clock'/>
          <span className='dateJoined'> Joined on Dec 23, {currentYear}</span>
      </div>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
        {logos}
  
    </div>
  </main>
)



// JSX element, footer
const copyRight = 'Copyright 2022'

const footer = (
  <footer className='footer-wrapper' >
    <p>{copyRight}</p>
    {Subscriber}
  </footer>
)

const App = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)



const rootElement = document.getElementById('root');

ReactDOM.render(App, rootElement);
