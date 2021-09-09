import React from "react";
import "./styles/App.css";
import DarkMode from "./components/DarkMode";
import Day from '../src/day.jpg';
import Night from "../src/night.jpg";
import Moon from '../src/moon.png'

function App() 
{
  return (
    <div>
    <div className="App">
      
    <nav class="navbar navbar-expand-lg bg-transparent">
      <DarkMode />

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <p class="nav-link" href="#">Home <span class="sr-only">(current)</span></p>
          </li>
          <li class="nav-item active">
            <p class="nav-link" href="#">About <span class="sr-only">(current)</span></p>
          </li>
          <li class="nav-item">
            <p class="nav-link" href="#">Our Links</p>
          </li>
          <li class="nav-item dropdown">
            <p class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Our Office
            </p>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Lahore</a>
              <a class="dropdown-item" href="#">Karachi </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">London</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 mx-0 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      </nav>

      <div className="container main">
        <h1>Change Theme</h1>
        <p className="my-3">I have used local-storage to Change the theme. It is very Easy. Then changed the class name to chnage bg-color and text color</p>
        <button type="button" class="btn btn-primary Here" data-toggle="tooltip" data-placement="bottom" title="Fake btn">
          Enter here
        </button>

      </div>

      <div className="container pt-5">
        <h2>About Us</h2>
        <p>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.
        </p>
        <p>
          Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.[9] This process is called reconciliation. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost.[citation needed] It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.[citation needed]
        </p>
        <p>
        JSX, or JavaScript XML, is an extension to the JavaScript language syntax.[10] Similar in appearance to HTML, JSX provides a way to structure component rendering using syntax familiar to many developers. React components are typically written using JSX, although they do not have to be (components may also be written in pure JavaScript). JSX is similar to another extension syntax created by Facebook for PHP called XHP.
        </p>
        <p>
        React does not attempt to provide a complete "application library". It is designed specifically for building user interfaces[3] and therefore does not include many of the tools some developers might consider necessary to build an application. This allows the choice of whichever libraries the developer prefers to accomplish tasks such as performing network access or local data storage. Common patterns of usage have emerged as the library matures.
        </p>
        <p>
        A React component under the Flux architecture should not directly modify any props passed to it, but should be passed callback functions that create actions which are sent by the dispatcher to modify the store. The action is an object whose responsibility is to describe what has taken place: for example, an action describing one user "following" another might contain a user id, a target user id, and the type USER_FOLLOWED_ANOTHER_USER.[24] The stores, which can be thought of as models, can alter themselves in response to actions received from the dispatcher.
        </p>
        <p>
        On April 18, 2017, Facebook announced React Fiber, a new set of internal algorithms for rendering, as opposed to React's old rendering algorithm, Stack.[32] React Fiber was to become the foundation of any future improvements and feature development of the React library.[33][needs update] The actual syntax for programming with React does not change; only the way that the syntax is executed has changed.[34] React's old rendering system, Stack, was developed at a time when the focus of the system on dynamic change was not understood. Stack was slow to draw complex animation, for example, trying to accomplish all of it in one chunk. Fiber breaks down animation into segments that can be spread out over multiple frames. Likewise, the structure of a page can be broken into segments that may be maintained and updated separately. JavaScript functions and virtual DOM objects are called "fibers", and each can be operated and updated separately, allowing for smoother on-screen rendering.[35]
        </p>
        <div class="alert alert-primary" role="alert">
          We are not fake at all.
        </div>

      </div>

      <h2 className="mt-5 ml-5">Products</h2>
        
      <div className="container pt-5 mx-5 mb-5">
      <div className="row mx-5">
        
        
        <div class="card bg-transparent col-lg-3 m-2">
          <div class="card-body">
            <h5 class="card-title">Car<span class="badge ml-2 badge-secondary">New</span></h5>
            <p class="card-text">Example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Buy It </a>
          </div>
        </div>
        <div class="card bg-transparent col-lg-3 m-2">
          <div class="card-body">
            <h5 class="card-title">Car</h5>
            <p class="card-text">Example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Buy It </a>
          </div>
        </div>
        <div class="card bg-transparent col-lg-3 m-2">
          <div class="card-body">
            <h5 class="card-title">Car</h5>
            <p class="card-text">Example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Buy It </a>
          </div>
        </div>
      </div>
      </div>

      </div>

      <div id="carouselExampleIndicators" className="carousel mb-5 container imgdiv slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={Day} alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Night} alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Moon} alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="text-center container bg-transparent b-5">
        Copy right rights reserved
      </div>
      <br/>
      <br/>
      <br/>
      </div>
    
  );
}

export default App;
