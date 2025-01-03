import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import Link from "./components/Link.js";
import Button from "./components/Button.js";
import Container from "./components/Container.js";
import Input from "./components/Input.js";
import Card from './components/Card.js';
import SlideShow from './components/SlideShow.js';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Container>
      <Link href="https://react-tutorial.app">Shop online</Link>
    </Container>
    <Container>
      <Input name="Name" placeholder="Insert your name here"/>
      <Button type="button" disabled={false}>Click me!</Button>
    </Container>
    <Container>
      <Input name="Address" placeholder="Insert your address here"/>
      <Button type="button" disabled={false}>Click me!</Button>
    </Container>
    <Container>
      <Card>
        <img src='assets/images/image.png' alt=''/>
      </Card>
    </Container>
    <Container>
      <SlideShow carouselWaitTime={2000}/>
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
